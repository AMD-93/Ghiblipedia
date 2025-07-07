// export interface Film {
//   id: number
//   title: string
//   originalTitle: string
//   year: string
//   img: string
//   trailer: string
//   summary: string
//   plot: string
//   director: string
//   genres: string[]
//   tags: string
//   runningTime: number
// } old interface, substitute these for the FilmDB interface

export interface FilmDB {
  movieId: number
  englishTitle: string
  japaneseTitle: string
  releaseDate: string
  imageUrl: string
  trailerUrl: string
  summary: string
  plot: string
  director: string
  genre: string[]
  runningTime: number
  tags: string[]
}

export interface Article {
  id: number
  title: string
  description: string
  pubDate: string
}
