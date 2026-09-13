/* ---------------------------------------------------------------
   Behaviour. Content lives in data.js.
   --------------------------------------------------------------- */
(function () {
  "use strict";

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------- timeline ---------- */

  function tagList(tags) {
    if (!tags || !tags.length) return "";
    return '<div class="tags">' + tags.map(function (t) {
      return '<span class="tag">' + t + "</span>";
    }).join("") + "</div>";
  }

  function renderTimeline(era) {
    var host = $("#timeline");
    if (!host) return;
    var rows = TIMELINE.filter(function (e) { return era === "all" || e.era === era; });

    host.innerHTML = rows.map(function (e, i) {
      var cls = "entry" + (e.flag === "now" ? " is-now" : e.flag === "odoo" ? " is-odoo" : "");
      var id = "e" + i;
      return '<article class="' + cls + '">' +
        '<p class="yr">' + e.years + "</p>" +
        "<h3>" + e.role + "</h3>" +
        '<p class="org">' + e.org + (e.note ? ' — <em>' + e.note + "</em>" : "") + "</p>" +
        "<ul>" + e.points.map(function (p) { return "<li>" + p + "</li>"; }).join("") + "</ul>" +
        (e.more
          ? '<details class="disc"><summary id="' + id + '">More on this</summary>' +
            '<div class="body"><p>' + e.more + "</p></div></details>"
          : "") +
        tagList(e.tags) +
        "</article>";
    }).join("");
  }

  $$(".era").forEach(function (btn) {
    btn.addEventListener("click", function () {
      $$(".era").forEach(function (b) { b.setAttribute("aria-selected", String(b === btn)); });
      renderTimeline(btn.dataset.era);
    });
  });

  renderTimeline("all");

  /* ---------- employment chain: employer -> placement -> their customers ---------- */

  (function renderChain() {
    var host = document.querySelector("#chain");
    if (!host || typeof CHAIN === "undefined") return;
    var c = CHAIN;

    function companyCard(co) {
      var dims = co.logoW && co.logoH ? ' width="' + co.logoW + '" height="' + co.logoH + '"' : "";
      return '<div class="host">' +
        '<div class="logo' + (co.dark ? " on-dark" : "") + '"><img alt="' + co.name + ' logo" src="' + co.logo + '"' + dims + ' loading="lazy"></div>' +
        "<b>" + co.name + "</b>" +
        '<span class="when">' + (co.years || "") + "</span>" +
        '<span class="why">' + co.note + "</span>" +
      "</div>";
    }

    function placement(p, i) {
      return '<section class="place">' +
        '<header class="place-head">' +
          '<span class="ord">Placement ' + (i + 1) + "</span>" +
          "<h4>" + p.years + "</h4>" +
          "<p>" + p.label + " · " + p.mode + "</p>" +
        "</header>" +
        '<div class="hosts">' + p.companies.map(companyCard).join("") + "</div>" +
        '<p class="flow small"><span>whose customers I build for</span></p>' +
        '<div class="clients">' + p.clients.map(function (cl) {
          return '<div class="client"><b>' + cl.name + "</b><span>" + cl.what + "</span></div>";
        }).join("") + "</div>" +
      "</section>";
    }

    var empDims = c.employer.logoW && c.employer.logoH ? ' width="' + c.employer.logoW + '" height="' + c.employer.logoH + '"' : "";
    host.innerHTML =
      '<div class="layer">' +
        "<h3>My main contractor, throughout</h3>" +
        '<div class="employer">' +
          (c.employer.logo ? '<div class="emp-logo"><img alt="' + c.employer.name + ' logo" src="' + c.employer.logo + '"' + empDims + ' loading="lazy"></div>' : "") +
          "<h4>" + c.employer.name + " — " + c.employer.where + "</h4>" +
          '<span class="years">' + c.employer.years + "</span>" +
          "<p>" + c.employer.note + "</p>" +
        "</div>" +
      "</div>" +
      '<p class="flow"><span>has placed me with two different groups</span></p>' +
      '<div class="places">' + c.placements.map(placement).join("") + "</div>";

    // If a logo file isn't there yet, show a quiet slot instead of a broken image.
    Array.prototype.slice.call(host.querySelectorAll("img")).forEach(function (img) {
      img.addEventListener("error", function () {
        var slot = document.createElement("span");
        slot.className = "ph";
        slot.textContent = "LOGO";
        if (img.parentNode) img.parentNode.replaceChild(slot, img);
      });
    });
  })();

  /* ---------- work: filter by technology ---------- */

  (function work() {
    var host = $("#projects");
    var bar = $("#filters");
    var count = $("#projcount");
    if (!host || !bar) return;

    var active = [];

    host.innerHTML = PROJECTS.map(function (p, i) {
      return '<article class="proj" data-i="' + i + '">' +
        '<p class="kind">' + p.kind + "</p>" +
        "<h3>" + p.name + "</h3>" +
        '<p class="who">' + p.who + "</p>" +
        "<p>" + p.text + "</p>" +
        tagList(p.tags) +
        "</article>";
    }).join("");

    FILTER_TAGS.forEach(function (t) {
      var b = document.createElement("button");
      b.className = "chip";
      b.type = "button";
      b.textContent = t;
      b.setAttribute("aria-pressed", "false");
      b.addEventListener("click", function () {
        var on = b.getAttribute("aria-pressed") === "true";
        b.setAttribute("aria-pressed", String(!on));
        active = on ? active.filter(function (x) { return x !== t; }) : active.concat(t);
        apply();
      });
      bar.appendChild(b);
    });

    var clear = document.createElement("button");
    clear.className = "chip";
    clear.type = "button";
    clear.textContent = "Clear";
    clear.addEventListener("click", function () {
      active = [];
      $$("#filters .chip").forEach(function (c) {
        if (c !== clear) c.setAttribute("aria-pressed", "false");
      });
      apply();
    });
    bar.appendChild(clear);

    function oxfordJoin(items) {
      if (items.length === 0) return "";
      if (items.length === 1) return items[0];
      if (items.length === 2) return items[0] + " and " + items[1];
      var allButLast = items.slice(0, -1).join(", ");
      return allButLast + ", and " + items[items.length - 1];
    }

    function apply() {
      var shown = 0;
      $$(".proj", host).forEach(function (card) {
        var p = PROJECTS[Number(card.dataset.i)];
        var ok = !active.length || active.every(function (t) { return p.tags.indexOf(t) > -1; });
        card.classList.toggle("is-hidden", !ok);
        if (ok) shown++;
      });
      count.textContent = active.length
        ? shown + (shown === 1 ? " project uses " : " projects use ") + oxfordJoin(active) + "."
        : PROJECTS.length + " projects.";
    }

    apply();
  })();

  /* ---------- skills search ---------- */

  (function skills() {
    var host = $("#skills-out");
    var input = $("#q");
    var hint = $("#qhint");
    if (!host || !input) return;

    host.innerHTML = SKILLS.map(function (g) {
      return '<div class="skillgroup">' +
        "<h3>" + g.group + "</h3>" +
        '<div class="tags">' + g.items.map(function (it) {
          return '<span class="tag" data-t="' + it.toLowerCase() + '">' + it + "</span>";
        }).join("") + "</div></div>";
    }).join("");

    input.addEventListener("input", function () {
      var q = input.value.trim().toLowerCase();
      var hits = 0;

      $$(".skillgroup", host).forEach(function (g) {
        var found = 0;
        $$(".tag", g).forEach(function (t) {
          var hit = q && t.dataset.t.indexOf(q) > -1;
          t.classList.toggle("hit", !!hit);
          t.classList.toggle("dim", !!q && !hit);
          if (hit) found++;
        });
        g.classList.toggle("is-hidden", !!q && found === 0);
        hits += found;
      });

      if (!q) hint.textContent = "Everything shown.";
      else if (hits) hint.textContent = hits + (hits === 1 ? " match." : " matches.");
      else hint.textContent = "No match — ask me about it directly.";
    });
  })();

  /* ---------- nav highlighting ---------- */

  (function spy() {
    var links = $$("#nav a");
    var map = {};
    links.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
    var targets = Object.keys(map).map(function (id) { return document.getElementById(id); }).filter(Boolean);
    if (!("IntersectionObserver" in window) || !targets.length) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) { a.removeAttribute("aria-current"); });
        var a = map[en.target.id];
        if (a) a.setAttribute("aria-current", "true");
      });
    }, { rootMargin: "-45% 0px -50% 0px" });

    targets.forEach(function (t) { io.observe(t); });
  })();
})();
