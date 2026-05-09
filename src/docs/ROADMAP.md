# Roadmap di sviluppo

## Fase 0 - Setup (1 settimana)
- Repo Git, CI/CD, linting, env di staging
- Scelta stack definitivo (Node vs Python)
- Account TMDB e chiavi API
- Design system base in Figma (palette dark, tipografia)

## Fase 1 - MVP (4-6 settimane)
- Auth email + Google OAuth
- Catalogo serie importato da TMDB (top trending)
- Pagina serie con sinossi, locandina, cast
- Rating 1-10 e recensione testuale
- Profilo utente base con watchlist
- Homepage con top 10 globale

## Fase 2 - Social (3-4 settimane)
- Follow tra utenti, feed attivita
- Commenti annidati su recensioni
- Upvote/downvote
- Thread di discussione per serie con flag spoiler
- Notifiche in-app

## Fase 3 - Discovery (3 settimane)
- Classifiche per genere, anno, mensili
- Algoritmo raccomandazioni (collaborative filtering semplice)
- Ricerca full-text con filtri avanzati
- Pagina "Tendenze"

## Fase 4 - Automazione catalogo (2 settimane)
- Job settimanale di import Netflix Top 10 (Tudum)
- Sync incrementale con TMDB (nuovi episodi, nuove stagioni)
- Notifiche utenti per nuovi episodi delle serie in watchlist

## Fase 5 - Polish & lancio (3 settimane)
- SEO (sitemap, JSON-LD, meta OG)
- Performance (caching Redis, ISR Next.js)
- PWA + mobile UX review
- Beta privata -> lancio pubblico

## Future ideas
- App mobile React Native
- Liste curate dalla community
- Integrazione "dove guardarlo" via JustWatch
- Gamification (badge, streak settimanali)
- Monetizzazione: abbonamento premium, affiliate JustWatch
