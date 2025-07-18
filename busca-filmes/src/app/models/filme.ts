export interface Filme {
  Title: string;
  Year?: string;
  imdbID?: string;
  Type?: string;
  Plot?: string;
  Poster: string;
  Response?: string;
}

export interface FilmesResponse {
  Search: Filme[];
  totalResults: string;
  Response: string;
}
