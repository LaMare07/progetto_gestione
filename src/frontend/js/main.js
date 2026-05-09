// Logica condivisa: navbar, ricerca, theme toggle, helpers.

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

function getQuery(name) {
  return new URLSearchParams(location.search).get(name);
}

function escapeHtml(s) {
  return String(s ?? "").replace(/[&<>"']/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
  );
}

function findSeries(id) {
  return (window.SERIES || []).find(s => s.id === id);
}

function posterStyle(s) {
  return `background: linear-gradient(135deg, ${s.color1}, ${s.color2});`;
}

// Risolve il path immagine: prima il campo esplicito, poi assets/<tipo>/<id>.jpg
function posterUrl(s)   { return s.posterUrl   || `assets/posters/${s.id}.jpg`; }
function backdropUrl(s) { return s.backdropUrl || `assets/backdrops/${s.id}.jpg`; }

function posterImg(s) {
  // <img> con onerror -> rimuove se il file non esiste, lasciando il gradiente
  return `<img src="${posterUrl(s)}" alt="" loading="lazy"
            onerror="this.remove()" />`;
}

function seriesCard(s, opts = {}) {
  const rating = s.avgRating ? `<span class="star">*</span> ${s.avgRating.toFixed(1)}` : "";
  const badge = s.netflixTop10 ? `<span class="badge">TOP ${s.top10Rank || ""}</span>` : "";
  const rankNum = opts.showRank && s.top10Rank ? `<span class="card-rank">${s.top10Rank}</span>` : "";
  return `
    <a class="card" href="series-detail.html?id=${encodeURIComponent(s.id)}">
      <div class="card-poster" style="${posterStyle(s)}">
        ${posterImg(s)}
        ${badge}
        ${rankNum}
        <span class="poster-fallback" aria-hidden="true">${s.title.charAt(0)}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${escapeHtml(s.title)}</h3>
        <div class="card-meta">
          <span>${s.year}</span>
          <span>-</span>
          <span>${s.seasons} stag.</span>
          <span class="spacer"></span>
          ${rating}
        </div>
      </div>
    </a>`;
}

function renderNavbar() {
  const user = Storage_.getUser();
  const userBtn = user
    ? `<a class="btn btn-sm" href="profile.html?u=${encodeURIComponent(user.username)}">@${escapeHtml(user.username)}</a>
       <button class="btn btn-sm btn-ghost" id="logout-btn">Esci</button>`
    : `<a class="btn btn-sm btn-ghost" href="login.html">Accedi</a>
       <a class="btn btn-sm btn-primary" href="register.html">Registrati</a>`;

  const html = `
    <div class="container">
      <a class="logo" href="index.html">Series<span>Hub</span></a>
      <nav class="nav-links">
        <a href="index.html" data-route="index">Home</a>
        <a href="series.html" data-route="series">Catalogo</a>
        <a href="top.html" data-route="top">Top 10</a>
        <a href="watchlist.html" data-route="watchlist">Watchlist</a>
      </nav>
      <form class="nav-search" id="search-form" role="search">
        <input type="search" name="q" placeholder="Cerca una serie..." autocomplete="off" />
      </form>
      <div class="nav-actions">
        <button class="btn btn-sm btn-ghost" id="theme-btn" title="Cambia tema">Tema</button>
        ${userBtn}
      </div>
    </div>`;

  const navbar = $("#navbar");
  if (navbar) {
    navbar.innerHTML = html;
    const route = document.body.dataset.route;
    $$(`[data-route]`, navbar).forEach(a => {
      if (a.dataset.route === route) a.classList.add("active");
    });
    $("#search-form").addEventListener("submit", e => {
      e.preventDefault();
      const q = new FormData(e.target).get("q")?.toString().trim();
      if (q) location.href = `series.html?q=${encodeURIComponent(q)}`;
    });
    const themeBtn = $("#theme-btn");
    themeBtn?.addEventListener("click", () => {
      const next = Storage_.getTheme() === "dark" ? "light" : "dark";
      Storage_.setTheme(next);
    });
    $("#logout-btn")?.addEventListener("click", () => {
      Storage_.setUser(null);
      toast("Disconnesso");
      setTimeout(() => location.reload(), 300);
    });
  }
}

function renderFooter() {
  const f = $("#footer");
  if (!f) return;
  f.innerHTML = `
    <div class="container">
      <div>(c) ${new Date().getFullYear()} Series Hub - non affiliato a Netflix.</div>
      <div class="row">
        <a href="#">Privacy</a>
        <a href="#">Termini</a>
        <a href="#">Contatti</a>
      </div>
    </div>`;
}

let toastTimer = null;
function toast(msg) {
  let t = $("#toast");
  if (!t) {
    t = document.createElement("div");
    t.id = "toast";
    t.className = "toast";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 1800);
}

function applyTheme() {
  document.documentElement.setAttribute("data-theme", Storage_.getTheme());
}

document.addEventListener("DOMContentLoaded", () => {
  applyTheme();
  renderNavbar();
  renderFooter();
});

window.SH = { $, $$, getQuery, escapeHtml, findSeries, seriesCard, posterStyle, posterUrl, backdropUrl, posterImg, toast };
