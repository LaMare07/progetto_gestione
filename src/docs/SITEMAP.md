# Sitemap frontend

```
/                         Homepage (top 10, trending, feed se loggato)
/login
/register
/series                   Catalogo con filtri
/series/[slug]            Dettaglio serie
   |- tab: Overview / Recensioni / Discussioni / Cast
/genres/[slug]            Tutte le serie di un genere
/top                      Classifiche (globale / mensile / per genere)
/search?q=...

/u/[username]             Profilo pubblico
   |- tab: Recensioni / Watchlist / Following
/me                       Dashboard personale
/me/watchlist
/me/notifications
/me/settings

/threads/[id]             Thread di discussione
/reviews/[id]             Pagina dedicata a una recensione (per condivisione)

/legal/terms
/legal/privacy
/about
```

## Componenti chiave (frontend)

- `<SeriesCard />` poster + titolo + rating + watchlist toggle
- `<RatingStars />` 1-10 (mezzo punto)
- `<ReviewItem />` con spoiler blur, vote buttons, thread di commenti
- `<SpoilerGuard />` wrapper "click per mostrare"
- `<TopList />` lista classifica con anti-aliasing posizioni
- `<FollowButton />`
- `<NotificationBell />`

## Stato globale
- React Query / TanStack Query per data fetching
- Zustand o Context per UI state (modali, theme)
- next-auth per sessione

## SEO
- ISR su `/series/[slug]` con revalidate 1h
- JSON-LD `TVSeries` schema.org su pagina serie
- Sitemap XML generato da catalogo
- Open Graph dinamici per condivisione recensioni
