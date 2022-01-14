export type Movie = {
  id: number;
  title: string;
  score: number;
  count: number;
  image: string;
}

export type MoviePage = {
  content: Movie[];
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

export const moviePageDefault = (): MoviePage => {
  return {
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 12,
    number: 0,
    first: false,
    numberOfElements: 0,
    empty: true
  }
}