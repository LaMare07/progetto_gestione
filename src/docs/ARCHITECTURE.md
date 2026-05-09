# Architettura logica

```
                 +------------------+
                 |   Browser / PWA  |
                 +--------+---------+
                          |
                  HTTPS / CDN
                          |
                 +--------v---------+
                 |  Next.js (SSR)   |
                 |  Vercel edge     |
                 +--------+---------+
                          |
                  REST / tRPC
                          |
                 +--------v---------+
                 |   API Backend    |
                 |  Node/Express    |
                 |   o FastAPI      |
                 +--+-----+-----+---+
                    |     |     |
            +-------+     |     +-------+
            |             |             |
     +------v-----+ +-----v----+ +------v------+
     | PostgreSQL | |  Redis   | |  Object     |
     |  (dati)    | |  (cache) | |  storage    |
     +------------+ +----------+ |  (poster)   |
                                 +-------------+

     +-------------------+         +----------------+
     |  Cron / Scheduler |  --->   |  TMDB API      |
     |  (settimanale)    |         |  Netflix Tudum |
     +-------------------+         +----------------+
```

## Componenti

- **Frontend Next.js**: SSR per SEO, ISR per pagine serie, client-side per feed social.
- **API**: stateless, JWT in cookie HttpOnly, rate limiting per IP+user.
- **Postgres**: dati relazionali (utenti, serie, recensioni, follow).
- **Redis**: cache classifiche, sessioni, rate limit, code per notifiche.
- **Object storage** (S3/Cloudflare R2): cache locandine importate (rispettando i ToS).
- **Scheduler**: job settimanale per Netflix Top 10 + sync TMDB incrementale.
- **CDN**: Vercel/Cloudflare per asset statici e immagini ottimizzate.

## Flussi principali

1. **Login**: OAuth -> backend genera JWT -> cookie sicuro.
2. **Visualizza serie**: Next.js richiede dati (cache Redis -> DB se miss) -> ISR.
3. **Recensione**: client POST /reviews -> validazione -> DB -> invalidazione cache rating.
4. **Import settimanale**: cron -> scraper Tudum + TMDB -> upsert in DB -> warm cache.
