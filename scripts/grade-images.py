"""Generate brand-graded web images from assets/stock into public/images/stock.

Usage: python3 scripts/grade-images.py
Grade: grayscale -> autocontrast -> gamma -> colorize (DoD Black shadows, muted purple mids, lavender highlights).
Calibrated so people and faces still read; the brand's own silhouette photography sits a little darker.
"""
import os
from PIL import Image, ImageOps, ImageStat

SRC, OUT = "assets/stock", "public/images/stock"


def grade(im):
    g = ImageOps.autocontrast(ImageOps.grayscale(im), cutoff=1)
    gamma = 1.0 if ImageStat.Stat(g).mean[0] < 80 else 1.15
    g = g.point(lambda v: round(255 * ((v / 255) ** gamma)))
    return ImageOps.colorize(g, black=(10, 9, 14), mid=(74, 68, 96), white=(206, 204, 220), midpoint=140)


def crop(im, ratio, ax=0.5, ay=0.5):
    """Crop to ratio; ax/ay (0..1) choose which part of the frame to keep."""
    w, h = im.size
    if w / h > ratio:
        nw = round(h * ratio); x = round((w - nw) * ax)
        return im.crop((x, 0, x + nw, h))
    nh = round(w / ratio); y = round((h - nh) * ay)
    return im.crop((0, y, w, y + nh))


def make(src, name, ratio, width, q=82, ax=0.5, ay=0.5):
    im = crop(Image.open(os.path.join(SRC, src)).convert("RGB"), ratio, ax, ay)
    width = min(width, im.width)  # never upscale the source
    im = grade(im.resize((width, round(width / ratio)), Image.LANCZOS))
    im.save(os.path.join(OUT, name), "JPEG", quality=q, optimize=True, progressive=True)
    print(f"{name} {im.width}x{im.height}")


# Strategic Focus Area thumbnails (4:3)
FOCUS = {
    "sustainment": ("02-trident-refit-facility-bangor-machinist-shop.jpg", 0.5, 0.5),
    "commercialization": ("03-america-makes-additive-manufacturing-for-equipment-repair.jpg", 0.5, 0.6),
    "emerging-technology": ("02-project-origin-robotic-combat-vehicle-training.jpg", 0.5, 0.5),
    "workforce": ("03-norfolk-naval-shipyard-apprentices-in-the-machine-shop.jpg", 0.5, 0.5),
    "microelectronics": ("01-soldier-operating-beast-electronic-warfare-interface.jpg", 0.55, 0.5),
    "kinetic-weapons": ("04-precision-strike-missile-test-launch-from-himars.jpg", 0.5, 0.45),
    "critical-chemicals": ("04-rock-island-arsenal-jmtc-manufacturing-add-on-armor.jpg", 0.5, 0.62),
    "casting-forging": ("02-watervliet-arsenal-heated-howitzer-tube-and-rotary-forge.jpg", 0.5, 0.5),
    "space-systems": ("05-mq-28-ghost-bat-flyover.jpg", 0.5, 0.5),
    "industrial-base-readiness": ("03-rock-island-arsenal-jmtc-manufacturing-equipment-and-facility.jpg", 0.5, 0.5),
}

if __name__ == "__main__":
    os.makedirs(OUT, exist_ok=True)
    for f in os.listdir(OUT):
        os.remove(os.path.join(OUT, f))
    for key, (src, ax, ay) in FOCUS.items():
        make(src, f"focus-{key}.jpg", 4 / 3, 640, ax=ax, ay=ay)
    # Home audience panels (3:2)
    make("01-afrl-collaborative-automation-for-manufacturing-systems-laboratory.jpg", "panel-industry.jpg", 3 / 2, 1000)
    make("02-army-research-laboratory-and-west-point-research-discussion.jpg", "panel-government.jpg", 3 / 2, 1000, ay=0.4)
    # For Industry eligibility (4:5), small company founder with printed parts
    make("02-firestorm-labs-drone-assembly-at-jifx.jpg", "industry-eligibility.jpg", 4 / 5, 1000, ax=0.78)
    # For Government band (21:8), reviewers at a lab model
    make("01-erdc-research-board-participants-reviewing-a-laboratory-model.jpg", "government-band.jpg", 21 / 8, 1800, ay=0.45)
    # Resources tiles (square), labeled by focus area
    make("01-cnc-machining-accelerated-training-in-defense-manufacturing.jpg", "tile-workforce.jpg", 1, 640, ax=0.3)
    make("04-soldiers-wearing-ivas-inside-a-stryker.jpg", "tile-microelectronics.jpg", 1, 640, ax=0.35)
    make("04-marine-operating-a-stalker-small-unmanned-aircraft.jpg", "tile-emerging-technology.jpg", 1, 640, ax=0.4)
    make("03-marine-and-l-madis-counter-drone-equipment-in-australia.jpg", "tile-sustainment.jpg", 1, 640, ax=0.4)
    # Home hero (3:2), Dark Eagle launcher at dusk
    make("02-dark-eagle-at-valiant-shield-2026.jpg", "hero.jpg", 3 / 2, 1000, q=84)
    # Explainer video posters (16:9)
    make("01-watervliet-arsenal-big-gun-shop-interior.jpg", "poster-marketplace.jpg", 16 / 9, 1000)
    make("01-afrl-collaborative-automation-for-manufacturing-systems-laboratory.jpg", "poster-submission.jpg", 16 / 9, 1000, ay=0.35)
    make("05-electromagnetic-warfare-specialists-in-a-tactical-operations-center.jpg", "poster-government.jpg", 16 / 9, 1000)
