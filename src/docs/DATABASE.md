# Schema database (PostgreSQL)

## Tabelle principali

### users
| campo         | tipo         | note                          |
|---------------|--------------|-------------------------------|
| id            | uuid PK      |                               |
| email         | text UNIQUE  |                               |
| username      | text UNIQUE  |                               |
| password_hash | text         | nullable se OAuth             |
| oauth_provider| text         | google/apple/null             |
| avatar_url    | text         |                               |
| bio           | text         |                               |
| created_at    | timestamptz  | default now()                 |

### series
| campo         | tipo         | note                          |
|---------------|--------------|-------------------------------|
| id            | uuid PK      |                               |
| tmdb_id       | int UNIQUE   | id esterno TMDB               |
| title         | text         |                               |
| original_title| text         |                               |
| slug          | text UNIQUE  |                               |
| synopsis      | text         |                               |
| poster_url    | text         |                               |
| backdrop_url  | text         |                               |
| first_air_date| date         |                               |
| seasons_count | int          |                               |
| status        | text         | running/ended/cancelled       |
| netflix_top10 | bool         | flag se in classifica Netflix |
| created_at    | timestamptz  |                               |
| updated_at    | timestamptz  |                               |

### genres / series_genres
- `genres(id, name)`
- `series_genres(series_id, genre_id)` PK composta

### cast_members / series_cast
- `cast_members(id, name, photo_url, tmdb_id)`
- `series_cast(series_id, cast_id, character, order)`

### reviews
| campo         | tipo         | note                          |
|---------------|--------------|-------------------------------|
| id            | uuid PK      |                               |
| user_id       | uuid FK      |                               |
| series_id     | uuid FK      |                               |
| rating        | int          | 1-10                          |
| body          | text         |                               |
| has_spoiler   | bool         |                               |
| created_at    | timestamptz  |                               |

UNIQUE (user_id, series_id) -- una recensione per utente per serie

### review_votes
`(review_id, user_id, value)` con value in {-1, +1}

### comments
- annidati con `parent_id`, riferimento a `review_id` o `thread_id`

### threads
- discussione per serie: `(id, series_id, user_id, title, has_spoiler, created_at)`

### watchlist_entries
| campo      | tipo  | note                                |
|------------|-------|-------------------------------------|
| user_id    | uuid  |                                     |
| series_id  | uuid  |                                     |
| status     | text  | watching / completed / planned / dropped |
| updated_at | ts    |                                     |

PK (user_id, series_id)

### follows
- `(follower_id, followed_id, created_at)` PK composta

### notifications
- `(id, user_id, type, payload jsonb, read_at, created_at)`

## Indici chiave
- `reviews(series_id, created_at desc)` per feed serie
- `reviews(user_id, created_at desc)` per profilo
- GIN su `series.title` (pg_trgm) per ricerca
- `notifications(user_id, read_at)` per inbox

## Viste materializzate
- `series_rating_avg`: avg(rating), count(reviews) per serie. Refresh ogni N minuti.
- `top10_global`, `top10_by_genre`: ricalcolate da job.
