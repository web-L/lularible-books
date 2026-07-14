# 汽车电子七部曲 · 聚合阅读站点

「汽车电子七部曲」系列的聚合阅读站点，基于 [mdBook](https://rust-lang.github.io/mdBook/) 构建，将原作者散落在多个仓库中的技术书籍统一整理为一个可在线阅读的站点。

> 📚 内容作者：[Lularible](https://github.com/Lularible) ｜ 本仓库仅提供阅读站点构建，不拥有、不创作任何书籍正文内容

[![在线阅读](https://img.shields.io/badge/在线阅读-web--l.github.io-blue?style=flat-square&logo=readthedocs)](https://web-l.github.io/lularible-books/)
[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/内容许可证-CC%20BY--NC--ND%204.0-lightgrey?style=flat-square)](https://creativecommons.org/licenses/by-nc-nd/4.0/)
[![Built with mdBook](https://img.shields.io/badge/Built%20with-mdBook-000000?style=flat-square&logo=rust)](https://rust-lang.github.io/mdBook/)
[![GitHub Pages](https://img.shields.io/badge/deploy-GitHub%20Pages-222222?style=flat-square&logo=github)](https://pages.github.com/)

---

## 📖 在线阅读

👉 **https://web-l.github.io/lularible-books/**

站点由 `gh-pages` 分支托管，通过 GitHub Pages 自动提供服务，包含下方全部 5 本书的完整正文与统一的侧边目录，方便连续、跨书阅读。

---

## 📚 系列分册

「汽车电子七部曲」目前包含以下 5 本独立成册的技术书籍，均为原作者 Lularible 在各自 GitHub 仓库中独立维护、独立更新：

| 书名 | 简介 | 篇幅 | 仓库 |
| --- | --- | --- | --- |
| 从沙子到车辙——一个工程师的理解 | 技术总纲 | 7 部分 · 33 节 | [Lularible/from-sand-to-ruts](https://github.com/Lularible/from-sand-to-ruts) |
| PTP 技术书——从思想实验到协议实现 | 时间同步协议 | 4 章 · 41 节 | [Lularible/ptp-book](https://github.com/Lularible/ptp-book) |
| HSM 技术书——从思想实验到安全基石 | 硬件安全模块 | 6 章 · 57 节 | [Lularible/hsm-book](https://github.com/Lularible/hsm-book) |
| 存储技术书——在不可靠的硬件上构建可靠的数据家园 | 文件系统 | 5 章 · 39 节 | [Lularible/storage-book](https://github.com/Lularible/storage-book) |
| UDS 技术书——从望闻问切到 UDS 协议实现 | 诊断协议 | 5 章 · 48 节 | [Lularible/uds-book](https://github.com/Lularible/uds-book) |

> 以上仓库均为原作者独立维护，本站点内容与结构随其更新同步刷新，具体章节以各自仓库最新内容为准。

---

## 🧩 本仓库的作用

本仓库（`main` 分支）**不包含任何书籍正文**，只承担"聚合构建"的角色，具体包括：

- **站点配置**：`book.toml`、`src/SUMMARY.md`、`src/index.md`，用于定义 mdBook 站点的元信息与目录结构；
- **`generate_summary.py`**：按各分册的章节编号自动生成聚合站点的 `SUMMARY.md` 目录；
- **`setup_symlinks.py`**：为每本书的 `chapters` 目录建立"清洗过特殊字符"的软链接，避免原仓库文件名中的空格、`#` 等字符导致链接失效。

书籍正文始终以上表 5 个仓库为唯一来源，本仓库通过软链接引用原始文件，**不重复存储、不复制内容**。构建产物发布在 `gh-pages` 分支，由 GitHub Pages 提供在线访问。

```
lularible-books/            (父目录)
├── from-sand-to-ruts/      (原作者仓库，克隆)
├── ptp-book/                (原作者仓库，克隆)
├── hsm-book/                (原作者仓库，克隆)
├── storage-book/             (原作者仓库，克隆)
├── uds-book/                  (原作者仓库，克隆)
└── site/                      (本仓库 main 分支)
    ├── book.toml
    ├── generate_summary.py
    ├── setup_symlinks.py
    └── src/
        ├── index.md
        ├── SUMMARY.md
        └── <各分册软链接目录>
```

---

## 🔧 本地重新构建

```bash
# 1. 把 5 个分册仓库和本仓库平级克隆到同一个父目录下
mkdir lularible-books && cd lularible-books
git clone https://github.com/Lularible/from-sand-to-ruts.git
git clone https://github.com/Lularible/ptp-book.git
git clone https://github.com/Lularible/hsm-book.git
git clone https://github.com/Lularible/storage-book.git
git clone https://github.com/Lularible/uds-book.git
git clone git@github.com:web-L/lularible-books.git site

# 2. 安装 mdBook
brew install mdbook   # 或 cargo install mdbook

# 3. 生成软链接与目录并构建
cd site
python3 setup_symlinks.py
python3 generate_summary.py
mdbook build

# 4. 本地预览
mdbook serve
```

若某个分册新增/重命名了章节文件，重新运行第 3 步的两个脚本即可同步目录，无需改动本仓库任何书籍相关的代码。

---

## 📄 许可证

本仓库涉及两类不同的版权 / 许可对象，请注意区分：

- **书籍正文内容**：采用 [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh)（署名-非商业性使用-禁止演绎）协议，版权归原作者 **Lularible** 所有。未经原作者许可，不得将正文用于商业用途，也不得基于其创作衍生作品。
- **本仓库的构建脚本与配置**（`book.toml`、`generate_summary.py`、`setup_symlinks.py` 等）：仅为生成聚合阅读站点所用的构建工具，与书籍内容的许可证无关，不代表对书籍正文享有任何权利。

---

## 🙏 鸣谢 / 版权声明

「汽车电子七部曲」系列的全部书籍正文内容，均由原作者 **[Lularible](https://github.com/Lularible)** 独立创作和维护，版权归原作者所有。

本仓库（`web-L/lularible-books`）只是基于 [mdBook](https://rust-lang.github.io/mdBook/) 搭建的一个**聚合阅读站点**，通过软链接引用原作者各仓库的内容并统一构建、发布，**不拥有、不创作、不修改**任何书籍正文，也不主张任何与书籍内容相关的权利。

如果这些书籍对你有帮助，请前往原作者的仓库点亮 ⭐，支持原创内容的持续更新：

- https://github.com/Lularible/from-sand-to-ruts
- https://github.com/Lularible/ptp-book
- https://github.com/Lularible/hsm-book
- https://github.com/Lularible/storage-book
- https://github.com/Lularible/uds-book
