# Endpoint API principali

Base URL: `/api/v1`

## Auth
- `POST /auth/register` { email, username, password }
- `POST /auth/login` { email, password }
- `POST /auth/oauth/google` { id_token }
- `POST /auth/logout`
- `GET  /auth/me`

## Utenti
- `GET    /users/:username` profilo pubblico
- `PATCH  /users/me` aggiorna profilo
- `POST   /users/:id/follow`
- `DELETE /users/:id/follow`
- `GET    /users/:id/followers`
- `GET    /users/:id/following`

## Serie
- `GET /series` lista paginata, filtri: q, genre, year, sort
- `GET /series/trending`
- `GET /series/top10` ?scope=global|genre&genre=drama
- `GET /series/:slug` dettaglio
- `GET /series/:slug/reviews`
- `GET /series/:slug/threads`

## Recensioni
- `POST   /reviews` { series_id, rating, body, has_spoiler }
- `PATCH  /reviews/:id`
- `DELETE /reviews/:id`
- `POST   /reviews/:id/vote` { value: 1 | -1 }
- `GET    /reviews/:id/comments`
- `POST   /reviews/:id/comments` { body, parent_id? }

## Thread di discussione
- `POST   /series/:slug/threads` { title, body, has_spoiler }
- `GET    /threads/:id`
- `POST   /threads/:id/comments`

## Watchlist
- `GET    /me/watchlist` ?status=watching
- `PUT    /me/watchlist/:series_id` { status }
- `DELETE /me/watchlist/:series_id`

## Raccomandazioni
- `GET /me/recommendations`
- `GET /me/feed` attivita degli utenti seguiti

## Notifiche
- `GET   /me/notifications`
- `POST  /me/notifications/:id/read`

## Admin / interne
- `POST /internal/import/netflix-top10` (job, auth con secret)
- `POST /internal/import/tmdb-sync`

## Convenzioni
- Risposte JSON `{ data, meta }`; errori `{ error: { code, message } }`
- Paginazione cursor-based per liste lunghe
- Rate limit: 60 req/min anonimi, 600 req/min autenticati
- Auth: JWT in cookie HttpOnly + CSRF token per mutation
