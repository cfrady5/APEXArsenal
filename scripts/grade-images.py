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

def make(src, name, ratio, width, q=80):
    im = Image.open(os.path.join(SRC, src)).convert("RGB")
    im = grade(crop(im, ratio).resize((width, round(width / ratio)), Image.LANCZOS))
    im.save(os.path.join(OUT, name), "JPEG", quality=q, optimize=True, progressive=True)

FOCUS = {
    "sustainment": "01-aircraft-maintenance-hangar.jpg",
    "commercialization": "01-engineering-prototype-laboratory.jpg",
    "emerging-technology": "02-collaborative-robot-manufacturing.jpg",
    "workforce": "02-welding-workshop-training.jpg",
    "microelectronics": "02-silicon-wafer-close-up.jpg",
    "kinetic-weapons": "02-aerospace-wind-tunnel.jpg",
    "critical-chemicals": "04-rare-earth-mineral-samples.jpg",
    "casting-forging": "02-steel-forging-hydraulic-press.jpg",
    "space-systems": "03-satellite-communications-technology.jpg",
    "industrial-base-readiness": "05-modern-industrial-production-line.jpg",
}

if __name__ == "__main__":
    os.makedirs(OUT, exist_ok=True)
    for key, src in FOCUS.items():
        make(src, f"focus-{key}.jpg", 4 / 3, 640)
    make("05-aerospace-component-inspection.jpg", "industry-eligibility.jpg", 4 / 5, 900)
    make("01-large-industrial-manufacturing-factory-panoramic.jpg", "government-band.jpg", 21 / 8, 1800, 78)
    make("04-autonomous-drone-manufacturing.jpg", "tile-air.jpg", 1, 640)
    make("04-electronics-engineer-circuit-board.jpg", "tile-cyber.jpg", 1, 640)
    make("03-satellite-communications-technology.jpg", "tile-space.jpg", 1, 640)
    make("05-radio-telescope-ground-station.jpg", "tile-c4isr.jpg", 1, 640)
    make("01-aerospace-precision-machining.jpg", "poster-marketplace.jpg", 16 / 9, 960)
