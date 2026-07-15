#!/usr/bin/env python3
"""重新生成 src/SUMMARY.md。

各分册的章节文件都以 "N.M-标题.md" 命名，脚本按 N 分组，
分组标题来自各仓库 README 中"这本书讲了什么"一节的描述（手工摘录，
因为原文用的中文数字与部/章措辞并不统一）。

用法：cd site && python3 generate_summary.py
"""
import re
from pathlib import Path

SITE_DIR = Path(__file__).resolve().parent
SRC_DIR = SITE_DIR / "src"

NUM_RE = re.compile(r"^(\d+)\.(\d+)-(.+)\.md$")


def natural_key(name: str):
    m = NUM_RE.match(name)
    if m:
        return (0, int(m.group(1)), int(m.group(2)))
    # 扉页/序言等非编号文件排在最前
    order = {"扉页.md": -2, "序言.md": -1}
    return (-1, order.get(name, 0), name)


def list_chapters(book: str):
    """返回 (链接用的安全文件名, 用于展示标题的原始文件名) 列表。

    setup_symlinks.py 已经把 site/src/<book>/chapters/ 里的软链接
    命名做了清洗（去掉空格和 #），这里读软链接目标拿回原始文件名用于生成标题。
    """
    d = SRC_DIR / book / "chapters"
    entries = []
    for f in d.iterdir():
        if f.suffix != ".md":
            continue
        real_name = f.resolve().name if f.is_symlink() else f.name
        entries.append((f.name, real_name))
    entries.sort(key=lambda e: natural_key(e[1]))
    return entries


def link(book: str, safe_filename: str) -> str:
    return f"{book}/chapters/{safe_filename}"


def title_of(real_filename: str) -> str:
    m = NUM_RE.match(real_filename)
    if m:
        # 保留分册自己的章节号（如 2.17），代替 mdBook 的多级自动编号
        return f"{m.group(1)}.{m.group(2)} {m.group(3).replace('-', ' · ')}"
    return real_filename[:-3]


# book -> (显示名, [(分组标题, [起始节, 结束节] 用于按 N 分组), ...])
BOOKS = {
    "from-sand-to-ruts": {
        "title": "从沙子到车辙 · 一个工程师的理解",
        "groups": [
            ("第一部分 · 计算的本质", 1),
            ("第二部分 · 计算的物质基础", 2),
            ("第三部分 · 计算的骨架", 3),
            ("第四部分 · 计算的连接", 4),
            ("第五部分 · 计算的灵魂", 5),
            ("第六部分 · 诊断、安全与存储", 6),
            ("第七部分 · 全书总结", 7),
        ],
        "preface": ["扉页.md", "序言.md"],
    },
    "ptp-book": {
        "title": "PTP 技术书 · 从思想实验到协议实现",
        "groups": [
            ("第一章 · 时间的本质与同步的意义", 1),
            ("第二章 · PTP 协议逐机制拆解", 2),
            ("第三章 · LinuxPTP 源码解析", 3),
            ("第四章 · 亲手实现 ptp-lite", 4),
        ],
        "preface": [],
    },
    "hsm-book": {
        "title": "HSM 技术书 · 从思想实验到安全基石",
        "groups": [
            ("第一章 · 安全通信的起源", 1),
            ("第二章 · 认识 HSM", 2),
            ("第三章 · PKCS#11 v3.1 规范深度解析", 3),
            ("第四章 · SoftHSM2 源码解析", 4),
            ("第五章 · 亲手实现 hsm-lite", 5),
            ("第六章 · 真实 SDK 集成经验", 6),
        ],
        "preface": [],
    },
    "storage-book": {
        "title": "存储技术书 · 在不可靠的硬件上构建可靠的数据家园",
        "groups": [
            ("第一章 · 存储的本质", 1),
            ("第二章 · Flash 物理世界", 2),
            ("第三章 · 文件系统理论", 3),
            ("第四章 · LittleFS 源码解析", 4),
            ("第五章 · 从零构建 KnotFS", 5),
        ],
        "preface": [],
    },
    "uds-book": {
        "title": "UDS 技术书 · 从望闻问切到 UDS 协议实现",
        "groups": [
            ("第一章 · 诊断的本质", 1),
            ("第二章 · UDS 协议逐服务拆解", 2),
            ("第三章 · 传输层", 3),
            ("第四章 · AUTOSAR DCM 源码解析", 4),
            ("第五章 · 亲手实现 uds-lite", 5),
        ],
        "preface": [],
    },
    "safety-book-iso26262": {
        "title": "功能安全技术书 · ISO 26262 分析与代码实现",
        "groups": [
            ("第一章 · 哲学地基", 1),
            ("第二章 · ISO 26262 标准深度解析", 2),
            ("第三章 · 安全机制逐个拆解", 3),
            ("第四章 · 量产源码走读", 4),
            ("第五章 · 动手构建 safe-lite", 5),
        ],
        "preface": [],
    },
}


def build_book_section(book: str, cfg: dict) -> str:
    lines = []
    entries = list_chapters(book)  # [(safe_name, real_name), ...]
    lines.append(f"- [{cfg['title']}]({book}/README.md)")

    real_names = {real for _, real in entries}
    for pre in cfg["preface"]:
        if pre in real_names:
            safe = next(safe for safe, real in entries if real == pre)
            lines.append(f"    - [{pre[:-3]}]({link(book, safe)})")

    by_group = {n: [] for _, n in cfg["groups"]}
    for safe, real in entries:
        m = NUM_RE.match(real)
        if not m:
            continue
        n = int(m.group(1))
        by_group.setdefault(n, []).append((safe, real))

    for label, n in cfg["groups"]:
        lines.append(f"    - [{label}]()")
        for safe, real in by_group.get(n, []):
            lines.append(f"        - [{title_of(real)}]({link(book, safe)})")
    return "\n".join(lines)


def main():
    parts = [
        "# 汽车电子七部曲\n",
        "- [关于本系列](index.md)\n",
        "# 分册\n",
    ]
    for book, cfg in BOOKS.items():
        parts.append(build_book_section(book, cfg))
        parts.append("")

    out = "\n".join(parts).rstrip() + "\n"
    (SRC_DIR / "SUMMARY.md").write_text(out, encoding="utf-8")
    print(f"wrote {SRC_DIR / 'SUMMARY.md'} ({len(out.splitlines())} lines)")


if __name__ == "__main__":
    main()
