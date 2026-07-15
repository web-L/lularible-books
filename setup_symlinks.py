#!/usr/bin/env python3
"""在 site/src/<book>/ 下为每本书的 chapters 建立软链接。

不直接对整个 chapters 目录建一个软链接，而是逐文件建链接，
并对文件名中的空格/# 做清洗（mdBook 不会对 SUMMARY.md 中的
URL 转义做解码，空格和 # 会导致链接解析失败或指向错误的文件），
这样 SUMMARY.md 里可以直接引用清洗后的安全文件名，无需任何转义。

用法：cd site && python3 setup_symlinks.py
"""
from pathlib import Path

SITE_DIR = Path(__file__).resolve().parent
SRC_DIR = SITE_DIR / "src"
REPOS_DIR = SITE_DIR.parent

BOOKS = [
    "from-sand-to-ruts",
    "hsm-book",
    "ptp-book",
    "storage-book",
    "uds-book",
    "safety-book-iso26262",
]


def sanitize(name: str) -> str:
    return name.replace("#", "").replace(" ", "-")


def main():
    for book in BOOKS:
        real_chapters = REPOS_DIR / book / "chapters"
        link_dir = SRC_DIR / book
        link_dir.mkdir(parents=True, exist_ok=True)

        chapters_link = link_dir / "chapters"
        if chapters_link.is_symlink():
            chapters_link.unlink()
        elif chapters_link.exists():
            raise SystemExit(f"{chapters_link} 已存在且不是软链接，请先手动处理")
        chapters_link.mkdir()

        seen = {}
        for f in sorted(real_chapters.iterdir()):
            if f.suffix != ".md":
                continue
            safe_name = sanitize(f.name)
            if safe_name in seen:
                raise SystemExit(f"清洗后文件名冲突：{f.name} vs {seen[safe_name]}")
            seen[safe_name] = f.name
            target = chapters_link / safe_name
            # 相对路径：site/src/<book>/chapters/<safe> -> ../../../../<book>/chapters/<real>
            rel_target = Path("../../../../") / book / "chapters" / f.name
            target.symlink_to(rel_target)

        readme_link = link_dir / "README.md"
        if readme_link.is_symlink() or readme_link.exists():
            readme_link.unlink()
        readme_link.symlink_to(Path("../../../") / book / "README.md")

        print(f"{book}: {len(seen)} chapters linked")


if __name__ == "__main__":
    main()
