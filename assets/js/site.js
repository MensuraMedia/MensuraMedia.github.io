// Progressive enhancement only: every page works without JavaScript.
(function () {
  "use strict";

  // Hub filter buttons: show cards whose data-family matches.
  var filters = document.querySelector("[data-filters]");
  if (filters) {
    filters.hidden = false;
    var cards = document.querySelectorAll("[data-family]");
    filters.addEventListener("click", function (e) {
      var btn = e.target.closest("button[data-filter]");
      if (!btn) return;
      var want = btn.getAttribute("data-filter");
      filters.querySelectorAll("button").forEach(function (b) {
        b.setAttribute("aria-pressed", b === btn ? "true" : "false");
      });
      cards.forEach(function (c) {
        c.hidden = want !== "all" && c.getAttribute("data-family") !== want;
      });
    });
  }

  // Copy buttons on terminal blocks.
  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    btn.hidden = false;
    btn.addEventListener("click", function () {
      var pre = document.getElementById(btn.getAttribute("data-copy"));
      if (!pre || !navigator.clipboard) return;
      navigator.clipboard.writeText(pre.innerText.replace(/^\$ /gm, "")).then(function () {
        var label = btn.textContent;
        btn.textContent = "Copied";
        setTimeout(function () { btn.textContent = label; }, 1600);
      });
    });
  });
})();
