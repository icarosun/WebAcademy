import { instance } from "../utils/http";

export interface TheMovieDB {
  page: number;
  results: Movie[];
}

export interface Movie {
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const apiKey = import.meta.env.VITE_API_KEY;

export async function GetPopularMovies(): Promise<TheMovieDB> {
  const result = await instance.http.get(
    `/movie/popular?language=pt-BR&page=1&api_key=${apiKey}`
  );
  return result.data;
}

export async function GetMoreRateMovies(): Promise<TheMovieDB> {
  const result = await instance.http.get(
    `/movie/top_rated?language=en-US&page=1&api_key=${apiKey}`
  );

  return result.data;
}

// IMPLEMENTE AS DEMAIS FUNÇÕES PARA PEGAR AS DEMAIS CATEGORIAS DE FILMES
