import { useEffect, useState } from "react";

import {
  GetPopularMovies,
  GetMoreRateMovies,
  TheMovieDB,
  GetComedyMovies,
  GetActionMovies,
  GetAdventureMovies,
  GetRomanceMovies,
} from "../../services/movie.service";


import ListCategoryMovie from "../../componentes/ListCategoryMovie";

export default function ListMovies() {
  const [popularMovies, SetPopularMovies] = useState<TheMovieDB>();
  const [moreRateMovies, SetMoreRateMovies] = useState<TheMovieDB>();
  const [comedyMovies, SetComedyMovies] = useState<TheMovieDB>();
  const [actionMovies, SetActionMovies] = useState<TheMovieDB>();
  const [adventureMovies, SetAdventureMovies] = useState<TheMovieDB>();
  const [romanceMovies, SetRomanceMovies] = useState<TheMovieDB>();

  useEffect(() => {
    async function fetchData() {
      const [
        popularMovies,
        moreRateMovies,
        comedyMovies,
        actionMovies,
        adventureMovies,
        romanceMovies,
      ] = await Promise.all([
        GetPopularMovies(),
        GetMoreRateMovies(),
        GetComedyMovies(),
        GetActionMovies(),
        GetAdventureMovies(),
        GetRomanceMovies(),
      ]);

      SetPopularMovies(popularMovies);
      SetMoreRateMovies(moreRateMovies);
      SetComedyMovies(comedyMovies);
      SetActionMovies(actionMovies);
      SetAdventureMovies(adventureMovies);
      SetRomanceMovies(romanceMovies);
    }

    fetchData();
  }, []);

  return (
    <>
      <ListCategoryMovie
        category="Filmes Populares"
        movies={popularMovies}
      />

       <ListCategoryMovie
        category="Filmes mais Curtidos"
        movies={moreRateMovies}
     />

      <ListCategoryMovie
        category="Filmes de Comédia"
        movies={comedyMovies}
     />
     
      <ListCategoryMovie
        category="Filmes de Ação"
        movies={actionMovies}
     />
      
      <ListCategoryMovie
        category="Filmes de Aventura"
        movies={adventureMovies}
     />

      <ListCategoryMovie
        category="Filmes de Romance"
        movies={romanceMovies}
     />
    </> 
  );    
}
