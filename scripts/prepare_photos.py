"""Copy and compress photos from photos/ to public/."""
import shutil
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
PHOTOS = ROOT / "photos"
PUBLIC = ROOT / "public"
MAX_BYTES = 200 * 1024

JOBS = [
    ("self.jpg", PUBLIC / "avatar.jpg", "JPEG", 85),
    ("hiking.jpg", PUBLIC / "interests" / "hiking.jpg", "JPEG", 85),
    ("museum.jpg", PUBLIC / "interests" / "museum.jpg", "JPEG", None),
    ("manga.png", PUBLIC / "interests" / "comic-translation.png", "PNG", None),
]


def save_jpeg(img: Image.Image, dest: Path, quality: int) -> None:
    rgb = img.convert("RGB")
    rgb.save(dest, "JPEG", optimize=True, quality=quality)


def save_png(img: Image.Image, dest: Path) -> None:
    if img.mode not in ("RGB", "RGBA"):
        img = img.convert("RGBA")
    img.save(dest, "PNG", optimize=True, compress_level=9)


def compress_png_to_limit(img: Image.Image, dest: Path) -> None:
    for scale in (1.0, 0.85, 0.7, 0.55, 0.45, 0.35, 0.28, 0.22, 0.18, 0.15):
        working = img
        if scale != 1.0:
            size = (
                max(1, int(img.width * scale)),
                max(1, int(img.height * scale)),
            )
            working = img.resize(size, Image.Resampling.LANCZOS)
        save_png(working, dest)
        if dest.stat().st_size <= MAX_BYTES:
            return


def compress_to_limit(img: Image.Image, dest: Path, fmt: str) -> None:
    if fmt == "JPEG":
        for quality in range(85, 40, -5):
            save_jpeg(img, dest, quality)
            if dest.stat().st_size <= MAX_BYTES:
                return
        scale = 0.85
        working = img
        while scale >= 0.3:
            size = (max(1, int(working.width * scale)), max(1, int(working.height * scale)))
            resized = working.resize(size, Image.Resampling.LANCZOS)
            for quality in range(80, 40, -5):
                save_jpeg(resized, dest, quality)
                if dest.stat().st_size <= MAX_BYTES:
                    return
            scale -= 0.1
    else:
        compress_png_to_limit(img, dest)


def main() -> None:
    PUBLIC.mkdir(exist_ok=True)
    (PUBLIC / "interests").mkdir(exist_ok=True)

    for src_name, dest, fmt, quality in JOBS:
        src = PHOTOS / src_name
        if not src.exists():
            raise FileNotFoundError(f"Missing source photo: {src}")

        if src.stat().st_size <= MAX_BYTES:
            shutil.copy2(src, dest)
        else:
            img = Image.open(src)
            compress_to_limit(img, dest, fmt)

        size_kb = dest.stat().st_size / 1024
        print(f"{dest.relative_to(ROOT)}: {size_kb:.1f} KB")
        if dest.stat().st_size > MAX_BYTES:
            raise RuntimeError(f"{dest.name} exceeds 200 KB limit")


if __name__ == "__main__":
    main()
