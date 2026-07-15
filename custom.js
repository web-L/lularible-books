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
      '<span class="fa-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">' +
      '<path d="M10.226 17.284c-2.965-.36-5.054-2.493-5.054-5.256 0-1.123.404-2.336 1.078-3.144-.292-.741-.247-2.314.09-2.965.898-.112 2.111.36 2.83 1.01.853-.269 1.752-.404 2.853-.404 1.1 0 1.999.135 2.807.382.696-.629 1.932-1.1 2.83-.988.315.606.36 2.179.067 2.942.72.854 1.101 2 1.101 3.167 0 2.763-2.089 4.852-5.098 5.234.763.494 1.28 1.572 1.28 2.807v2.336c0 .674.561 1.056 1.235.786 4.066-1.55 7.255-5.615 7.255-10.646C23.5 6.188 18.334 1 11.978 1 5.62 1 .5 6.188.5 12.545c0 4.986 3.167 9.12 7.435 10.669.606.225 1.19-.18 1.19-.786V20.63a2.9 2.9 0 0 1-1.078.224c-1.483 0-2.359-.808-2.987-2.313-.247-.607-.517-.966-1.034-1.033-.27-.023-.359-.135-.359-.27 0-.27.45-.471.898-.471.652 0 1.213.404 1.797 1.235.45.651.921.943 1.483.943.561 0 .92-.202 1.437-.719.382-.381.674-.718.944-.943"/>' +
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
