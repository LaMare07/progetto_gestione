# PROMPT: Sviluppo Sito Web "Series Hub"

Sei uno sviluppatore full-stack esperto. Devi aiutarmi a progettare e sviluppare un sito web chiamato **Series Hub**, una piattaforma social dedicata alle serie TV dove gli utenti possono valutare, recensire e discutere le serie che hanno visto.

## Obiettivo del progetto

Creare una community online in cui gli appassionati di serie TV possano:

- Assegnare un rating (es. da 1 a 10 o sistema a stelle) alle serie viste
- Scrivere recensioni e commenti
- Discutere con altri utenti tramite forum o thread dedicati a ciascuna serie
- Scoprire nuove serie grazie a classifiche, raccomandazioni e tendenze

## Funzionalità principali richieste

### 1. Catalogo serie automatico

- Importazione automatica delle serie più viste dal catalogo Netflix
- Aggiornamento periodico del catalogo (es. settimanale)
- Possibile integrazione con API esterne come TMDB (The Movie Database), JustWatch, o web scraping di classifiche pubbliche di Netflix (Top 10 settimanali da netflix.com/tudum)
- Ogni serie deve avere: titolo, locandina, sinossi, anno, numero di stagioni, generi, cast principale

### 2. Sistema utenti

- Registrazione e login (email, OAuth Google/Apple)
- Profilo utente con: lista serie viste, in corso, da vedere (watchlist), rating dati, recensioni scritte
- Sistema di follow tra utenti

### 3. Interazione sociale

- Sezione recensioni con upvote/downvote
- Thread di discussione per ogni serie (con avviso spoiler)
- Sistema di commenti annidati
- Notifiche per risposte e nuovi episodi

### 4. Sistema di rating e classifiche

- Rating medio della community per ogni serie
- Top 10 globale, per genere, mensile
- Algoritmo di raccomandazione basato sui gusti dell'utente

### 5. Stack tecnologico suggerito

- **Frontend:** React / Next.js + Tailwind CSS
- **Backend:** Node.js (Express) o Python (FastAPI/Django)
- **Database:** PostgreSQL per dati relazionali, Redis per cache
- **Hosting:** Vercel/Netlify (frontend), Railway/AWS (backend)
- **Scheduler:** cron job per aggiornamento automatico catalogo Netflix

## Cosa ti chiedo di produrre

1. Architettura generale del progetto (diagramma logico)
2. Schema database con tabelle e relazioni
3. Lista degli endpoint API principali
4. Struttura delle pagine frontend (sitemap)
5. Strategia per importare automaticamente le serie più viste di Netflix (con codice di esempio in Python o Node.js)
6. Mockup testuale delle schermate principali (homepage, pagina serie, profilo utente)
7. Roadmap di sviluppo divisa in fasi (MVP -> versione completa)

## Vincoli e preferenze

- Design moderno, dark mode di default, ispirato a Letterboxd e IMDb
- Mobile-first
- SEO-friendly per attirare traffico organico
- Considera aspetti legali (uso di immagini/locandine, copyright Netflix)

Procedi con ordine, partendo dal punto 1. Aspetta una mia conferma prima di passare al punto successivo.
