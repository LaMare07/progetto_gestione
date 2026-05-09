// Mock catalogo serie. Sostituire con fetch verso il backend.
window.SERIES = [
  {
    id: "stranger-things",
    title: "Stranger Things",
    year: 2016,
    seasons: 4,
    status: "in produzione",
    genres: ["Sci-Fi", "Drama", "Horror"],
    synopsis: "Nel 1983, a Hawkins, Indiana, un ragazzo scompare. Sua madre, un capo della polizia e i suoi amici devono affrontare forze terrificanti per riportarlo a casa.",
    cast: ["Millie Bobby Brown", "Finn Wolfhard", "Winona Ryder", "David Harbour"],
    color1: "#1a0a3d", color2: "#5e1c3d",
    netflixTop10: true, top10Rank: 1,
    avgRating: 8.7, reviewsCount: 12430
  },
  {
    id: "the-bear",
    title: "The Bear",
    year: 2022,
    seasons: 3,
    status: "in produzione",
    genres: ["Drama", "Comedy"],
    synopsis: "Carmy, chef stellato, eredita la paninoteca di famiglia a Chicago e cerca di trasformarla mentre combatte contro debiti, lutti e una brigata caotica.",
    cast: ["Jeremy Allen White", "Ayo Edebiri", "Ebon Moss-Bachrach"],
    color1: "#2a1a0a", color2: "#5e3c1c",
    netflixTop10: false,
    avgRating: 9.0, reviewsCount: 8910
  },
  {
    id: "severance",
    title: "Severance",
    year: 2022,
    seasons: 2,
    status: "in produzione",
    genres: ["Sci-Fi", "Thriller", "Drama"],
    synopsis: "Lavoratori della Lumon Industries si sottopongono a una procedura che separa i ricordi del lavoro dalla vita privata. Qualcosa, pero, non torna.",
    cast: ["Adam Scott", "Britt Lower", "Patricia Arquette"],
    color1: "#0a1a2a", color2: "#1c3c5e",
    netflixTop10: false,
    avgRating: 8.9, reviewsCount: 7420
  },
  {
    id: "house-of-the-dragon",
    title: "House of the Dragon",
    year: 2022,
    seasons: 2,
    status: "in produzione",
    genres: ["Fantasy", "Drama"],
    synopsis: "Duecento anni prima degli eventi di Game of Thrones, la casata Targaryen e al culmine del potere e una guerra civile sta per scoppiare.",
    cast: ["Matt Smith", "Emma D'Arcy", "Olivia Cooke"],
    color1: "#2a0a0a", color2: "#5e1c1c",
    netflixTop10: false,
    avgRating: 8.3, reviewsCount: 9870
  },
  {
    id: "the-night-agent",
    title: "The Night Agent",
    year: 2023,
    seasons: 2,
    status: "in produzione",
    genres: ["Thriller", "Action"],
    synopsis: "Un agente dell'FBI di basso livello che lavora nel seminterrato della Casa Bianca rispondendo a un telefono che non squilla mai - finche non lo fa.",
    cast: ["Gabriel Basso", "Luciane Buchanan"],
    color1: "#0a2a1a", color2: "#1c5e3c",
    netflixTop10: true, top10Rank: 2,
    avgRating: 7.5, reviewsCount: 5210
  },
  {
    id: "wednesday",
    title: "Wednesday",
    year: 2022,
    seasons: 1,
    status: "in produzione",
    genres: ["Comedy", "Mystery", "Fantasy"],
    synopsis: "Wednesday Addams indaga su una serie di omicidi alla Nevermore Academy mentre cerca di gestire i suoi nascenti poteri psichici.",
    cast: ["Jenna Ortega", "Catherine Zeta-Jones"],
    color1: "#1a0a2a", color2: "#3c1c5e",
    netflixTop10: true, top10Rank: 3,
    avgRating: 8.1, reviewsCount: 14200
  },
  {
    id: "succession",
    title: "Succession",
    year: 2018,
    seasons: 4,
    status: "concluso",
    genres: ["Drama"],
    synopsis: "La famiglia Roy, proprietaria di un impero mediatico, lotta per la successione mentre il patriarca Logan rifiuta di farsi da parte.",
    cast: ["Brian Cox", "Jeremy Strong", "Sarah Snook"],
    color1: "#0a0a1a", color2: "#2c2c3c",
    netflixTop10: false,
    avgRating: 9.1, reviewsCount: 11320
  },
  {
    id: "the-mandalorian",
    title: "The Mandalorian",
    year: 2019,
    seasons: 3,
    status: "in produzione",
    genres: ["Sci-Fi", "Action", "Adventure"],
    synopsis: "Un cacciatore di taglie mandaloriano vaga per la galassia ai margini della Nuova Repubblica, portando con se un misterioso bambino.",
    cast: ["Pedro Pascal", "Carl Weathers"],
    color1: "#2a1a0a", color2: "#5e2c1c",
    netflixTop10: false,
    avgRating: 8.4, reviewsCount: 9840
  },
  {
    id: "breaking-bad",
    title: "Breaking Bad",
    year: 2008,
    seasons: 5,
    status: "concluso",
    genres: ["Crime", "Drama", "Thriller"],
    synopsis: "Un professore di chimica del liceo, scoperto di avere un cancro terminale, si dedica alla produzione di metanfetamina per garantire un futuro alla sua famiglia.",
    cast: ["Bryan Cranston", "Aaron Paul"],
    color1: "#1a2a0a", color2: "#3c5e1c",
    netflixTop10: false,
    avgRating: 9.5, reviewsCount: 28430
  },
  {
    id: "bridgerton",
    title: "Bridgerton",
    year: 2020,
    seasons: 3,
    status: "in produzione",
    genres: ["Romance", "Drama"],
    synopsis: "L'alta societa londinese di inizio Ottocento e scossa dai pettegolezzi di Lady Whistledown mentre la famiglia Bridgerton cerca l'amore.",
    cast: ["Nicola Coughlan", "Luke Newton"],
    color1: "#2a0a2a", color2: "#5e1c4c",
    netflixTop10: true, top10Rank: 4,
    avgRating: 7.4, reviewsCount: 9210
  },
  {
    id: "dark",
    title: "Dark",
    year: 2017,
    seasons: 3,
    status: "concluso",
    genres: ["Sci-Fi", "Mystery", "Thriller"],
    synopsis: "Quattro famiglie cercano risposte mentre indagano sulla scomparsa di alcuni bambini in una piccola citta tedesca, scoprendo un mistero che attraversa tre generazioni.",
    cast: ["Louis Hofmann", "Lisa Vicari"],
    color1: "#0a0a0a", color2: "#2c2c4c",
    netflixTop10: false,
    avgRating: 8.8, reviewsCount: 7610
  },
  {
    id: "the-crown",
    title: "The Crown",
    year: 2016,
    seasons: 6,
    status: "concluso",
    genres: ["Drama", "History"],
    synopsis: "La storia della Regina Elisabetta II e degli eventi politici e personali che hanno plasmato il suo regno.",
    cast: ["Claire Foy", "Olivia Colman", "Imelda Staunton"],
    color1: "#0a1a2a", color2: "#2c3c5e",
    netflixTop10: false,
    avgRating: 8.6, reviewsCount: 6480
  }
];

// Mock recensioni precaricate per popolare le pagine
window.SEED_REVIEWS = [
  {
    seriesId: "the-bear",
    user: "giulia",
    rating: 9,
    body: "Episodio 7 della seconda stagione e cinema puro. La regia di Christopher Storer e impeccabile.",
    date: "2026-04-22",
    spoiler: false,
    votes: 124
  },
  {
    seriesId: "the-bear",
    user: "marco",
    rating: 8,
    body: "Stagione 3 piu lenta ma ancora ottima. Ayo Edebiri merita ogni premio.",
    date: "2026-04-18",
    spoiler: false,
    votes: 67
  },
  {
    seriesId: "stranger-things",
    user: "luna",
    rating: 8,
    body: "Le prime stagioni restano migliori, ma l'attesa per la finale vale ogni episodio.",
    date: "2026-05-01",
    spoiler: false,
    votes: 89
  },
  {
    seriesId: "severance",
    user: "marco",
    rating: 10,
    body: "La seconda stagione alza ancora l'asticella. Atmosfera, recitazione, scrittura: tutto sublime.",
    date: "2026-03-15",
    spoiler: false,
    votes: 142
  },
  {
    seriesId: "wednesday",
    user: "giulia",
    rating: 7,
    body: "Jenna Ortega e l'unica vera ragione per guardarla, ma e abbastanza.",
    date: "2026-02-10",
    spoiler: false,
    votes: 34
  },
  {
    seriesId: "house-of-the-dragon",
    user: "luna",
    rating: 6,
    body: "La seconda stagione e troppo lenta. Speriamo nella terza.",
    date: "2026-04-30",
    spoiler: true,
    votes: 22
  },
  {
    seriesId: "breaking-bad",
    user: "marco",
    rating: 10,
    body: "Inutile dire altro. Il punto di riferimento per tutte le serie venute dopo.",
    date: "2026-01-08",
    spoiler: false,
    votes: 311
  },
  {
    seriesId: "succession",
    user: "giulia",
    rating: 10,
    body: "Il finale e tra i migliori della storia della tv. Jeremy Strong e Kieran Culkin in stato di grazia.",
    date: "2026-03-02",
    spoiler: false,
    votes: 198
  }
];
