export interface Film {
  id: number
  title: string
  originalTitle: string
  year: string
  img: string
  trailer: string
  summary: string
  plot: string
  director: string
  genres: string[]
  tags: string
  runningTime: number
}

export interface Article {
  id: number
  title: string
  description: string
  pubDate: string
}
