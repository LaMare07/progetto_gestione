// Wrapper su localStorage per autenticazione, watchlist, recensioni utente.
const Storage = {
  KEYS: {
    USER: "sh_user",
    WATCHLIST: "sh_watchlist",
    REVIEWS: "sh_reviews",
    THEME: "sh_theme",
    USERS: "sh_users"
  },

  getUser() {
    try { return JSON.parse(localStorage.getItem(this.KEYS.USER)); }
    catch { return null; }
  },
  setUser(user) {
    if (user) localStorage.setItem(this.KEYS.USER, JSON.stringify(user));
    else localStorage.removeItem(this.KEYS.USER);
  },

  getUsers() {
    try { return JSON.parse(localStorage.getItem(this.KEYS.USERS)) || []; }
    catch { return []; }
  },
  saveUsers(users) {
    localStorage.setItem(this.KEYS.USERS, JSON.stringify(users));
  },

  getWatchlist() {
    try { return JSON.parse(localStorage.getItem(this.KEYS.WATCHLIST)) || {}; }
    catch { return {}; }
  },
  setWatchStatus(seriesId, status) {
    const wl = this.getWatchlist();
    if (status === null) delete wl[seriesId];
    else wl[seriesId] = { status, updatedAt: new Date().toISOString() };
    localStorage.setItem(this.KEYS.WATCHLIST, JSON.stringify(wl));
  },

  getUserReviews() {
    try { return JSON.parse(localStorage.getItem(this.KEYS.REVIEWS)) || []; }
    catch { return []; }
  },
  saveUserReview(review) {
    const all = this.getUserReviews();
    const idx = all.findIndex(r => r.seriesId === review.seriesId && r.user === review.user);
    if (idx >= 0) all[idx] = review;
    else all.push(review);
    localStorage.setItem(this.KEYS.REVIEWS, JSON.stringify(all));
  },
  getReviewsForSeries(seriesId) {
    const seed = (window.SEED_REVIEWS || []).filter(r => r.seriesId === seriesId);
    const mine = this.getUserReviews().filter(r => r.seriesId === seriesId);
    return [...mine, ...seed].sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  },

  getTheme() {
    return localStorage.getItem(this.KEYS.THEME) || "dark";
  },
  setTheme(theme) {
    localStorage.setItem(this.KEYS.THEME, theme);
    document.documentElement.setAttribute("data-theme", theme);
  }
};

window.Storage_ = Storage;
