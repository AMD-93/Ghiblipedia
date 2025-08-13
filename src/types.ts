export interface FilmDB {
  id: number
  englishTitle: string
  japaneseTitle: string
  releaseDate: string
  imageUrl: string
  trailerUrl: string
  summary: string
  plot: string
  director: string
  genre: string
  runningTime: string
  tags: string[]
}

export interface Article {
  id: number
  title: string
  description: string
  pubDate: string
}

export interface YoutubeVideos {
  id: string
  snippet: {
    channelId: string
  }
  player: {
    embedHtml: string
  }
}
