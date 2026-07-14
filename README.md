# 汽车电子七部曲 · 阅读站点

这是「汽车电子七部曲」系列的聚合阅读站点，基于 [mdBook](https://rust-lang.github.io/mdBook/) 构建。

在线阅读：https://web-l.github.io/lularible-books/

## 系列分册（各自独立仓库）

- [从沙子到车辙——一个工程师的理解](https://github.com/Lularible/from-sand-to-ruts)
- [PTP 技术书](https://github.com/Lularible/ptp-book)
- [HSM 技术书](https://github.com/Lularible/hsm-book)
- [存储技术书](https://github.com/Lularible/storage-book)
- [UDS 技术书](https://github.com/Lularible/uds-book)

## 本仓库的作用

本仓库本身**不包含书籍正文**，只包含 mdBook 的站点配置（`book.toml`、`src/SUMMARY.md`、`src/index.md`）
和两个生成脚本。书籍正文始终以上面 5 个仓库为唯一来源，通过软链接引用，避免内容重复维护。

构建后的静态站点发布在 `gh-pages` 分支，由 GitHub Pages 提供服务。

## 本地重新构建

```bash
# 1. 把 5 个分册仓库和本仓库平级克隆到同一个父目录下
mkdir lularible-books && cd lularible-books
git clone https://github.com/Lularible/from-sand-to-ruts.git
git clone https://github.com/Lularible/ptp-book.git
git clone https://github.com/Lularible/hsm-book.git
git clone https://github.com/Lularible/storage-book.git
git clone https://github.com/Lularible/uds-book.git
git clone git@github.com:web-L/lularible-books.git site   # 本仓库

# 2. 安装 mdbook
brew install mdbook   # 或 cargo install mdbook

# 3. 重新生成软链接 + 目录并构建
cd site
python3 setup_symlinks.py
python3 generate_summary.py
mdbook build

# 4. 本地预览
mdbook serve
```

若某个分册新增/重命名了章节文件，重新运行第 3 步的两个脚本即可同步目录。
