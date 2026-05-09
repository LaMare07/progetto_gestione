# Cartelle delle immagini

Trascina qui i file. Il sito li carichera in automatico se i nomi corrispondono all'`id` della serie in `js/data.js`.

```
frontend/assets/
|-- posters/      <- locandine verticali (consigliato 600x900 px, .jpg)
|-- backdrops/    <- immagini orizzontali per hero (1920x1080 .jpg)
|-- avatars/      <- avatar utenti (opzionale)
```

## Convenzione nomi

Per ogni serie, usa il campo `id` di `js/data.js`:

| `id` (in data.js)     | File da mettere                                   |
|-----------------------|---------------------------------------------------|
| `stranger-things`     | `posters/stranger-things.jpg` + `backdrops/stranger-things.jpg` |
| `the-bear`            | `posters/the-bear.jpg` + `backdrops/the-bear.jpg` |
| `severance`           | `posters/severance.jpg` + `backdrops/severance.jpg` |
| ...                   | ...                                               |

Estensioni accettate: `.jpg`, `.jpeg`, `.png`, `.webp`. Default: `.jpg`.

## Esempio

```
posters/stranger-things.jpg
posters/the-bear.jpg
backdrops/stranger-things.jpg
```

Se un file manca, viene mostrato il gradiente di fallback (gia configurato in `data.js`).

## Personalizzazione path

Se vuoi un nome diverso dall'`id`, apri `js/data.js` e aggiungi i campi:

```js
{
  id: "stranger-things",
  posterUrl: "assets/posters/mia-locandina.jpg",
  backdropUrl: "assets/backdrops/mio-backdrop.jpg",
  ...
}
```

## Logo / favicon

Per il logo del sito o la favicon, mettili direttamente in `frontend/`:
- `frontend/logo.png`
- `frontend/favicon.ico`

E aggiungi nel `<head>` delle pagine:
```html
<link rel="icon" href="favicon.ico">
```

## Diritti

Le locandine ufficiali sono coperte da copyright. Per uso pubblico:
- Usa l'API di TMDB (gratuita, attribuzione richiesta)
- Vedi `../../docs/LEGAL.md`
