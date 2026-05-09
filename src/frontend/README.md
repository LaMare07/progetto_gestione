# Series Hub - Frontend (HTML/CSS/JS puri)

Sito statico, **zero framework, zero dipendenze**. Apri qualsiasi `.html` in un browser e funziona.

## Pagine

| File | Descrizione |
|------|-------------|
| `index.html` | Homepage con hero, Top 10, trending, recensioni recenti |
| `series.html` | Catalogo con filtri (testo, genere) e ordinamento |
| `series-detail.html` | Dettaglio serie + tabs (overview/recensioni/discussioni/cast) + form recensione |
| `top.html` | Classifiche (Netflix Top 10, voto, piu recensite) |
| `watchlist.html` | La tua watchlist con filtro per stato |
| `profile.html` | Profilo utente con recensioni e statistiche |
| `login.html` / `register.html` | Auth simulata via localStorage |

## Come avviarlo

```bash
# Doppio click su index.html, oppure server statico:
cd frontend
python -m http.server 8080
# poi apri http://localhost:8080
```

## Persistenza

Tutto in `localStorage`:
- `sh_user` - utente loggato
- `sh_users` - elenco account creati
- `sh_watchlist` - watchlist con stato
- `sh_reviews` - recensioni dell'utente
- `sh_theme` - dark/light

Per resettare: apri DevTools -> Application -> Local Storage -> Clear.

## Struttura

```
frontend/
|-- *.html             # 8 pagine
|-- css/styles.css     # un solo file CSS, dark mode by default
|-- js/
|   |-- data.js        # mock catalogo serie + recensioni seed
|   |-- storage.js     # wrapper localStorage
|   |-- main.js        # navbar, footer, theme, helpers SH.*
|-- assets/            # (vuoto, riservato a immagini)
```

## Sostituire i mock con il backend reale

In `js/data.js` rimpiazza `window.SERIES` con un fetch:

```js
fetch("/api/v1/series").then(r => r.json()).then(data => {
  window.SERIES = data;
});
```

Stessa cosa per `Storage_.saveUserReview` -> `POST /reviews`,
`Storage_.setWatchStatus` -> `PUT /me/watchlist/:id`, ecc.
Vedi `../docs/API.md` per la lista completa degli endpoint.
