-- Series Hub - Schema iniziale (PostgreSQL 15+)

CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE EXTENSION IF NOT EXISTS pg_trgm;

CREATE TABLE users (
    id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    email           text NOT NULL UNIQUE,
    username        text NOT NULL UNIQUE,
    password_hash   text,
    oauth_provider  text,
    avatar_url      text,
    bio             text,
    created_at      timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE series (
    id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    tmdb_id         int UNIQUE,
    title           text NOT NULL,
    original_title  text,
    slug            text NOT NULL UNIQUE,
    synopsis        text,
    poster_url      text,
    backdrop_url    text,
    first_air_date  date,
    seasons_count   int,
    status          text,
    netflix_top10   boolean NOT NULL DEFAULT false,
    created_at      timestamptz NOT NULL DEFAULT now(),
    updated_at      timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX series_title_trgm ON series USING gin (title gin_trgm_ops);

CREATE TABLE genres (
    id    serial PRIMARY KEY,
    name  text NOT NULL UNIQUE
);

CREATE TABLE series_genres (
    series_id  uuid REFERENCES series(id) ON DELETE CASCADE,
    genre_id   int  REFERENCES genres(id) ON DELETE CASCADE,
    PRIMARY KEY (series_id, genre_id)
);

CREATE TABLE cast_members (
    id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    tmdb_id    int UNIQUE,
    name       text NOT NULL,
    photo_url  text
);

CREATE TABLE series_cast (
    series_id  uuid REFERENCES series(id) ON DELETE CASCADE,
    cast_id    uuid REFERENCES cast_members(id) ON DELETE CASCADE,
    character  text,
    sort_order int,
    PRIMARY KEY (series_id, cast_id)
);

CREATE TABLE reviews (
    id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id      uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    series_id    uuid NOT NULL REFERENCES series(id) ON DELETE CASCADE,
    rating       int  NOT NULL CHECK (rating BETWEEN 1 AND 10),
    body         text,
    has_spoiler  boolean NOT NULL DEFAULT false,
    created_at   timestamptz NOT NULL DEFAULT now(),
    UNIQUE (user_id, series_id)
);
CREATE INDEX reviews_series_idx ON reviews (series_id, created_at DESC);
CREATE INDEX reviews_user_idx   ON reviews (user_id, created_at DESC);

CREATE TABLE review_votes (
    review_id  uuid REFERENCES reviews(id) ON DELETE CASCADE,
    user_id    uuid REFERENCES users(id)   ON DELETE CASCADE,
    value      smallint NOT NULL CHECK (value IN (-1, 1)),
    PRIMARY KEY (review_id, user_id)
);

CREATE TABLE threads (
    id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    series_id   uuid NOT NULL REFERENCES series(id) ON DELETE CASCADE,
    user_id     uuid NOT NULL REFERENCES users(id),
    title       text NOT NULL,
    body        text,
    has_spoiler boolean NOT NULL DEFAULT false,
    created_at  timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE comments (
    id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id     uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    review_id   uuid REFERENCES reviews(id) ON DELETE CASCADE,
    thread_id   uuid REFERENCES threads(id) ON DELETE CASCADE,
    parent_id   uuid REFERENCES comments(id) ON DELETE CASCADE,
    body        text NOT NULL,
    created_at  timestamptz NOT NULL DEFAULT now(),
    CHECK ((review_id IS NOT NULL)::int + (thread_id IS NOT NULL)::int = 1)
);

CREATE TABLE watchlist_entries (
    user_id     uuid REFERENCES users(id)   ON DELETE CASCADE,
    series_id   uuid REFERENCES series(id)  ON DELETE CASCADE,
    status      text NOT NULL CHECK (status IN ('watching','completed','planned','dropped')),
    updated_at  timestamptz NOT NULL DEFAULT now(),
    PRIMARY KEY (user_id, series_id)
);

CREATE TABLE follows (
    follower_id  uuid REFERENCES users(id) ON DELETE CASCADE,
    followed_id  uuid REFERENCES users(id) ON DELETE CASCADE,
    created_at   timestamptz NOT NULL DEFAULT now(),
    PRIMARY KEY (follower_id, followed_id),
    CHECK (follower_id <> followed_id)
);

CREATE TABLE notifications (
    id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id    uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    type       text NOT NULL,
    payload    jsonb NOT NULL DEFAULT '{}'::jsonb,
    read_at    timestamptz,
    created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX notifications_user_idx ON notifications (user_id, read_at);

-- Vista materializzata per rating medio
CREATE MATERIALIZED VIEW series_rating_avg AS
SELECT series_id,
       ROUND(AVG(rating)::numeric, 2) AS avg_rating,
       COUNT(*)                       AS reviews_count
FROM reviews
GROUP BY series_id;

CREATE UNIQUE INDEX series_rating_avg_pk ON series_rating_avg (series_id);
