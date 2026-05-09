"""
Import settimanale: Netflix Top 10 -> arricchimento via TMDB -> upsert in DB.

NOTA: questo e uno scaffold di esempio. Prima di andare in produzione:
- verifica i ToS di Netflix Tudum e TMDB
- aggiungi gestione errori robusta, retry con backoff, logging strutturato
- esegui in un job schedulato (cron / Railway / GitHub Actions)
"""

from __future__ import annotations

import os
import time
from dataclasses import dataclass

import httpx
from bs4 import BeautifulSoup

TUDUM_TOP10_URL = "https://www.netflix.com/tudum/top10"
TMDB_API = "https://api.themoviedb.org/3"
TMDB_KEY = os.environ["TMDB_API_KEY"]
DATABASE_URL = os.environ["DATABASE_URL"]

USER_AGENT = "SeriesHubBot/0.1 (+https://serieshub.example/contact)"


@dataclass
class Top10Entry:
    rank: int
    title: str
    country: str  # es. "IT" per Italia
    week_of: str  # ISO date


def fetch_netflix_top10(country: str = "IT") -> list[Top10Entry]:
    """Scarica e parsa la pagina Netflix Tudum per il paese richiesto."""
    headers = {"User-Agent": USER_AGENT, "Accept-Language": "it-IT,it;q=0.9"}
    with httpx.Client(headers=headers, timeout=30) as client:
        resp = client.get(f"{TUDUM_TOP10_URL}?country={country}")
        resp.raise_for_status()

    soup = BeautifulSoup(resp.text, "html.parser")
    entries: list[Top10Entry] = []
    # Selettore da adattare quando Netflix cambia il markup.
    for row in soup.select("[data-testid='top10-row']")[:10]:
        rank = int(row.select_one("[data-testid='rank']").text.strip())
        title = row.select_one("[data-testid='title']").text.strip()
        entries.append(
            Top10Entry(rank=rank, title=title, country=country, week_of="auto")
        )
    return entries


def tmdb_search(title: str) -> dict | None:
    """Cerca la serie su TMDB e ritorna il primo match."""
    with httpx.Client(timeout=30) as client:
        resp = client.get(
            f"{TMDB_API}/search/tv",
            params={"api_key": TMDB_KEY, "query": title, "language": "it-IT"},
        )
        resp.raise_for_status()
        results = resp.json().get("results") or []
        return results[0] if results else None


def tmdb_details(tv_id: int) -> dict:
    with httpx.Client(timeout=30) as client:
        resp = client.get(
            f"{TMDB_API}/tv/{tv_id}",
            params={
                "api_key": TMDB_KEY,
                "language": "it-IT",
                "append_to_response": "credits,external_ids",
            },
        )
        resp.raise_for_status()
        return resp.json()


def upsert_series(details: dict, top10_rank: int | None) -> None:
    """Upsert su Postgres. Sostituisci con il tuo client (psycopg, SQLAlchemy)."""
    # Pseudocodice — adattalo al tuo ORM.
    # session.execute(
    #     """INSERT INTO series (tmdb_id, title, slug, synopsis, poster_url,
    #                            first_air_date, seasons_count, status, netflix_top10)
    #        VALUES (:tmdb_id, :title, :slug, :synopsis, :poster_url,
    #                :first_air_date, :seasons_count, :status, :netflix_top10)
    #        ON CONFLICT (tmdb_id) DO UPDATE
    #        SET title = EXCLUDED.title, synopsis = EXCLUDED.synopsis, ...""",
    #     {...},
    # )
    print(
        f"[upsert] {details['name']} (tmdb={details['id']}) "
        f"top10_rank={top10_rank}"
    )


def run() -> None:
    top10 = fetch_netflix_top10(country="IT")
    print(f"Top10 trovate: {len(top10)}")

    for entry in top10:
        match = tmdb_search(entry.title)
        if not match:
            print(f"[skip] nessun match TMDB per: {entry.title}")
            continue
        details = tmdb_details(match["id"])
        upsert_series(details, top10_rank=entry.rank)
        time.sleep(0.5)  # rispetta rate-limit TMDB (40 req/10s)


if __name__ == "__main__":
    run()
