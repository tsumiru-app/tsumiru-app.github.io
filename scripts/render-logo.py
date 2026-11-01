# /// script
# dependencies = ["pillow"]
# ///

import io
from pathlib import Path
import shutil
import subprocess
import xml.etree.ElementTree as ET

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
BRAND = ROOT / "src/.vitepress/brand"
NS = "{http://www.w3.org/2000/svg}"

ASSETS = [
    ("src/public/favicon.ico", "icon", 48),
    ("src/public/favicon-16x16.png", "icon", 16),
    ("src/public/favicon-32x32.png", "icon", 32),
    ("src/public/apple-touch-icon.png", "icon-fullbleed", 180),
    ("src/public/android-chrome-192x192.png", "icon", 192),
    ("src/public/android-chrome-512x512.png", "icon", 512),
    ("src/public/mstile-150x150.png", "mark", 150),
    ("src/public/img/logo.png", "icon", 512),
    ("src/public/img/logo.webp", "icon", 512),
    ("src/public/img/logo-128px.png", "mark", 1024),
    ("src/public/img/logo-128px-on-light.png", "mark-on-light", 1024),
    ("src/public/img/tsumiru-64px.png", "icon", 1024),
    ("src/public/img/tsumiru-icon.png", "icon-fullbleed", 1024),
    ("src/.vitepress/og-assets/logo.png", "mark", 300),
]


def raster(svg, size):
    result = subprocess.run(
        ["rsvg-convert", "--width", str(size), "--height", str(size)],
        input=ET.tostring(svg), capture_output=True, check=True,
    )
    return Image.open(io.BytesIO(result.stdout)).convert("RGBA")


def render(variant, size):
    svg = ET.parse(BRAND / f"tsumiru-{variant}.svg").getroot()
    if variant.startswith("mark"):
        left, top, right, bottom = raster(svg, 1024).getchannel("A").getbbox()
        scale = min(694 / (right - left), 638 / (bottom - top))
        x = 192 + (694 - (right - left) * scale) / 2 - left * scale
        y = 216 + (638 - (bottom - top) * scale) / 2 - top * scale
        group = ET.Element(NS + "g", {"transform": f"translate({x} {y}) scale({scale})"})
        for child in list(svg):
            if child.tag != NS + "defs":
                svg.remove(child)
                group.append(child)
        svg.append(group)
    return raster(svg, size)


def main():
    if shutil.which("rsvg-convert") is None:
        raise SystemExit("rsvg-convert is required; install librsvg.")
    for name, variant, size in ASSETS:
        path = ROOT / name
        image = render(variant, size)
        if name == "src/public/mstile-150x150.png":
            background = Image.new("RGBA", image.size, "#02061d")
            background.alpha_composite(image)
            image = background.convert("RGB")
        output = io.BytesIO()
        if path.suffix == ".ico":
            image.save(output, format="ICO", sizes=[(16, 16), (32, 32), (48, 48)],
                       append_images=[render(variant, 16), render(variant, 32)])
        elif path.suffix == ".webp":
            image.save(output, format="WEBP", lossless=True, method=6)
        else:
            image.save(output, format="PNG", compress_level=9)
        data = output.getvalue()
        changed = not path.exists() or path.read_bytes() != data
        if changed:
            path.write_bytes(data)
        print(f"{'updated' if changed else 'unchanged'} {name} {size}x{size}")


if __name__ == "__main__":
    main()
