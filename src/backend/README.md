# Series Hub - Backend

Scegli tra Node/Express o Python/FastAPI. Endpoint elencati in [../docs/API.md](../docs/API.md).

## Opzione A - Node + Express + Prisma

```bash
npm init -y
npm install express prisma @prisma/client zod jsonwebtoken bcrypt
npm install -D typescript ts-node @types/node @types/express
npx prisma init
```

## Opzione B - Python + FastAPI + SQLAlchemy

```bash
python -m venv .venv && source .venv/bin/activate
pip install fastapi uvicorn sqlalchemy psycopg[binary] alembic pydantic[email] passlib[bcrypt] python-jose
```

## Variabili d'ambiente
```
DATABASE_URL=postgres://...
REDIS_URL=redis://...
JWT_SECRET=...
GOOGLE_CLIENT_ID=...
TMDB_API_KEY=...
```

## Cron / job
Lo scheduler in `../scripts/` gira come container separato o GitHub Action.
