/* 阅读体验增强：
   1. 顶部阅读进度条
   2. 字号调节（A- / A+，localStorage 持久化）
   3. 衬线 / 无衬线字体切换
*/
(function () {
  "use strict";

  var FONT_SIZE_KEY = "reading-font-size";
  var FONT_FAMILY_KEY = "reading-font-family";
  var MIN_SIZE = 1.4; // rem
  var MAX_SIZE = 2.6;
  var STEP = 0.1;

  /* 各分册对应的原作者 GitHub 仓库地址，用于顶栏跳转按钮 */
  var BOOK_REPOS = {
    "from-sand-to-ruts": "https://github.com/Lularible/from-sand-to-ruts",
    "ptp-book": "https://github.com/Lularible/ptp-book",
    "hsm-book": "https://github.com/Lularible/hsm-book",
    "storage-book": "https://github.com/Lularible/storage-book",
    "uds-book": "https://github.com/Lularible/uds-book",
    "safety-book-iso26262":
      "https://github.com/Lularible/safety-book-iso26262",
  };

  function currentBookRepo() {
    var path = window.location.pathname;
    for (var key in BOOK_REPOS) {
      if (path.indexOf("/" + key + "/") !== -1) {
        return BOOK_REPOS[key];
      }
    }
    return null;
  }

  /* ---------- 恢复用户偏好 ---------- */
  var savedSize = parseFloat(localStorage.getItem(FONT_SIZE_KEY));
  if (savedSize >= MIN_SIZE && savedSize <= MAX_SIZE) {
    document.documentElement.style.setProperty(
      "--reading-font-size",
      savedSize + "rem"
    );
  }
  if (localStorage.getItem(FONT_FAMILY_KEY) === "sans") {
    document.body.classList.add("sans-reading");
  }

  function currentSize() {
    var v = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--reading-font-size"
      )
    );
    return isNaN(v) ? 1.9 : v;
  }

  function setSize(rem) {
    rem = Math.min(MAX_SIZE, Math.max(MIN_SIZE, Math.round(rem * 10) / 10));
    document.documentElement.style.setProperty(
      "--reading-font-size",
      rem + "rem"
    );
    localStorage.setItem(FONT_SIZE_KEY, rem);
  }

  /* ---------- 顶栏按钮 ---------- */
  function makeButton(title, text, onClick) {
    var btn = document.createElement("button");
    btn.className = "icon-button reading-ctrl";
    btn.type = "button";
    btn.title = title;
    btn.setAttribute("aria-label", title);
    btn.textContent = text;
    btn.addEventListener("click", onClick);
    return btn;
  }

  function injectControls() {
    var rightButtons = document.querySelector(
      "#mdbook-menu-bar .right-buttons, #menu-bar .right-buttons"
    );
    if (!rightButtons) return;

    rightButtons.insertBefore(
      makeButton("减小字号", "A−", function () {
        setSize(currentSize() - STEP);
      }),
      rightButtons.firstChild
    );

    rightButtons.insertBefore(
      makeButton("增大字号", "A+", function () {
        setSize(currentSize() + STEP);
      }),
      rightButtons.firstChild
    );

    rightButtons.insertBefore(
      makeButton("切换衬线/无衬线字体", "字", function () {
        var useSans = document.body.classList.toggle("sans-reading");
        localStorage.setItem(FONT_FAMILY_KEY, useSans ? "sans" : "serif");
      }),
      rightButtons.firstChild
    );

    injectRepoLink(rightButtons);
  }

  /* ---------- 分册 GitHub 原仓库跳转 ---------- */
  function injectRepoLink(rightButtons) {
    var repoUrl = currentBookRepo();
    if (!repoUrl) return;
    if (rightButtons.querySelector(".repo-link-btn")) return;

    var link = document.createElement("a");
    link.className = "repo-link-btn";
    link.href = repoUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.title = "在 GitHub 查看本书原仓库";
    link.setAttribute("aria-label", "在 GitHub 查看本书原仓库");
    link.innerHTML =
      '<span class="fa-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">' +
      '<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-31.1-38.5 0 0-33.1 22.3-24.7-3.2 0-16.4 41.9-9.7 41.9-9.7 21.9-.3 15.1-27.4 41.5-49.1-8.9-2-63.2-7.3-77.8-15.1-.1-.6-.2-1.1 0 0-19.4-25.1-25.7-83.5 8.6-115.4 33.9-31.4 88.4-8.6 105.3-9.7 15.1-13.8 44.3-31.4 76.5-31.4 32.6 0 61.5 17.5 76.6 31.6 15.7 1.2 71.4-21.5 105.5 9.6 34.4 32 28.1 90.4 8.8 115.4-14.6 7.8-68.9 13.1-77.8 15.1 26.3 21.5 19.6 48.9 41.5 49.1 0 0 41.9-6.7 41.9 9.7 8.4 25.4-24.7 3.2-24.7 3.2-19.7 9.4-31.1 38.5-31.1 38.5-14.7 44.7-84.7 29.8-84.7 29.8 0 21 .3 55.2.3 61.4 0 6.5 4.5 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"/>' +
      "</svg></span>";

    var printLink = rightButtons.querySelector('a[href$="print.html"]');
    if (printLink) {
      rightButtons.insertBefore(link, printLink);
    } else {
      rightButtons.appendChild(link);
    }
  }

  /* ---------- 阅读进度条 ---------- */
  function injectProgressBar() {
    var bar = document.createElement("div");
    bar.id = "reading-progress";
    document.body.appendChild(bar);

    var ticking = false;
    function update() {
      var doc = document.documentElement;
      var max = doc.scrollHeight - doc.clientHeight;
      var pct = max > 0 ? (doc.scrollTop / max) * 100 : 0;
      bar.style.width = pct + "%";
      ticking = false;
    }

    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(update);
        }
      },
      { passive: true }
    );
    update();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      injectControls();
      injectProgressBar();
    });
  } else {
    injectControls();
    injectProgressBar();
  }
})();
