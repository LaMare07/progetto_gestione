# Series Hub

Piattaforma social dedicata alle serie TV: vota, recensisci e discuti le serie che ami.

## Struttura del progetto

```
Series-Hub/
|-- docs/           # Documentazione, prompt, specifiche
|   |-- PROMPT.md           # Prompt originale del progetto
|   |-- ARCHITECTURE.md     # Architettura logica
|   |-- DATABASE.md         # Schema database
|   |-- API.md              # Endpoint API
|   |-- SITEMAP.md          # Struttura frontend
|   |-- ROADMAP.md          # Fasi di sviluppo
|   |-- LEGAL.md            # Note legali su copyright
|-- frontend/       # Applicazione Next.js + Tailwind
|-- backend/        # API server (Node/Express o FastAPI)
|-- database/       # Migrazioni e seed PostgreSQL
|-- scripts/        # Job di importazione catalogo Netflix/TMDB
```

## Stack tecnologico

- **Frontend:** Next.js + React + Tailwind CSS (dark mode default, mobile-first)
- **Backend:** Node.js + Express *oppure* Python + FastAPI
- **Database:** PostgreSQL (dati relazionali) + Redis (cache)
- **Auth:** NextAuth / OAuth Google + Apple
- **Hosting:** Vercel (frontend), Railway o AWS (backend)
- **Scheduler:** cron job settimanale per refresh catalogo

## Quick start (placeholder)

```bash
# Frontend
cd frontend && npm install && npm run dev

# Backend
cd backend && npm install && npm run dev

# Importazione catalogo
cd scripts && python netflix_import.py
```

## Roadmap

Vedi [docs/ROADMAP.md](docs/ROADMAP.md) per le fasi di sviluppo (MVP -> v1 completa).

## Licenza

Da definire. Le locandine e i metadati delle serie sono di proprieta dei rispettivi detentori.
Consultare [docs/LEGAL.md](docs/LEGAL.md) prima del go-live.
