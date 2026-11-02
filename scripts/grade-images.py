"""Generate brand-graded web images from assets/stock into public/images/stock.

Usage: python3 scripts/grade-images.py
Grade: grayscale -> autocontrast -> gamma 1.2 -> colorize (DoD Black shadows, APEX Dark Purple mids, lavender highlights).
"""
import os
from PIL import Image, ImageOps, ImageStat

SRC, OUT = "assets/stock", "public/images/stock"

def grade(im):
    g = ImageOps.grayscale(im)
    g = ImageOps.autocontrast(g, cutoff=1)
    # Low-key sources keep more midtone detail; bright sources are deepened further.
    gamma = 1.1 if ImageStat.Stat(g).mean[0] < 70 else 1.35
    g = g.point(lambda v: round(255 * ((v / 255) ** gamma)))
    # Calibrated against the brand photography: mean RGB ~ (30, 28, 38), low saturation, deep shadows.
    return ImageOps.colorize(g, black=(10, 9, 14), mid=(64, 59, 80), white=(198, 196, 212), midpoint=150)

def crop(im, ratio):
    w, h = im.size
    if w / h > ratio:
        nw = round(h * ratio); x = (w - nw) // 2
        return im.crop((x, 0, x + nw, h))
    nh = round(w / ratio); y = (h - nh) // 2
    return im.crop((0, y, w, y + nh))

def make(src, name, ratio, width, q=82):
    im = crop(Image.open(os.path.join(SRC, src)).convert("RGB"), ratio)
    width = min(width, im.width)  # never upscale the source
    im = grade(im.resize((width, round(width / ratio)), Image.LANCZOS))
    im.save(os.path.join(OUT, name), "JPEG", quality=q, optimize=True, progressive=True)
    print(f"{name} {im.width}x{im.height}")

FOCUS = {
    "sustainment": "01-aircraft-maintenance-hangar.jpg",
    "commercialization": "01-engineering-prototype-laboratory.jpg",
    "emerging-technology": "01-smart-factory-automation.jpg",
    "workforce": "02-welding-workshop-training.jpg",
    "microelectronics": "01-semiconductor-silicon-wafer.jpg",
    "kinetic-weapons": "05-modern-industrial-production-line.jpg",
    "critical-chemicals": "05-industrial-chemical-processing-factory.jpg",
    "casting-forging": "02-steel-forging-hydraulic-press.jpg",
    "space-systems": "04-spacecraft-engineering-testing.jpg",
    "industrial-base-readiness": "04-robotic-factory-assembly-line.jpg",
}

if __name__ == "__main__":
    os.makedirs(OUT, exist_ok=True)
    for f in os.listdir(OUT):
        os.remove(os.path.join(OUT, f))
    for key, src in FOCUS.items():
        make(src, f"focus-{key}.jpg", 4 / 3, 640)
    make("04-manufacturing-quality-control.jpg", "industry-eligibility.jpg", 4 / 5, 1000)
    make("02-factory-engineers-teamwork.jpg", "government-band.jpg", 21 / 8, 1800)
    make("05-aerospace-component-inspection.jpg", "tile-air.jpg", 1, 640)
    make("03-electronics-prototype-testing.jpg", "tile-cyber.jpg", 1, 640)
    make("01-satellite-cleanroom-assembly.jpg", "tile-space.jpg", 1, 640)
    make("05-radio-telescope-ground-station.jpg", "tile-c4isr.jpg", 1, 640)
    make("01-aerospace-precision-machining.jpg", "poster-marketplace.jpg", 16 / 9, 1000)
