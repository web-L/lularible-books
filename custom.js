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
