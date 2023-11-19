import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { Container } from "react-bootstrap";

import {
  GetPopularMovies,
  GetMoreRateMovies,
  TheMovieDB,
  GetComedyMovies,
  GetActionMovies,
  GetAdventureMovies,
  GetRomanceMovies,
} from "./services/movie.service";

import {
  GetMovieDetails,
  MovieDetails,
} from "./services/movie.details.service";

import ModalInfoMovie from "./componentes/ModalInfoMovie";
import ListCategoryMovie from "./componentes/ListCategoryMovie";

function App() {
  const [popularMovies, SetPopularMovies] = useState<TheMovieDB>();
  const [moreRateMovies, SetMoreRateMovies] = useState<TheMovieDB>();
  const [comedyMovies, SetComedyMovies] = useState<TheMovieDB>();
  const [actionMovies, SetActionMovies] = useState<TheMovieDB>();
  const [adventureMovies, SetAdventureMovies] = useState<TheMovieDB>();
  const [romanceMovies, SetRomanceMovies] = useState<TheMovieDB>();

  const [isShowModal, SetIsShowModal] = useState<boolean>(false);
  const [movieDetail, SetMovieDetail] = useState<MovieDetails>();

  const handleClose = () => SetIsShowModal(false);

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
  
  async function MovieDetails(idMovie: number) {
    const movieDetail = await GetMovieDetails(idMovie);
    SetMovieDetail(movieDetail);
    SetIsShowModal(true);
  }

  return (
    <Container>
      <h1>Filmes</h1>
      <hr/> 

      <ListCategoryMovie
        category="Filmes populares"
        movies={popularMovies}
        onMoreInfoMovie={(obj) => {
          MovieDetails(obj.id);
        }}
      />

       <ListCategoryMovie
        category="Filmes mais curtidos"
        movies={moreRateMovies}
        onMoreInfoMovie={(obj) => {
          MovieDetails(obj.id);
        }}
      />

      <ListCategoryMovie
        category="Filmes de Comédia"
        movies={comedyMovies}
        onMoreInfoMovie={(obj) => {
          MovieDetails(obj.id);
        }}
      />
     
      <ListCategoryMovie
        category="Filmes de Ação"
        movies={actionMovies}
        onMoreInfoMovie={(obj) => {
          MovieDetails(obj.id);
        }}
      />
      
      <ListCategoryMovie
        category="Filmes de Aventura"
        movies={adventureMovies}
        onMoreInfoMovie={(obj) => {
          MovieDetails(obj.id);
        }}
      />

      <ListCategoryMovie
        category="Filmes de Romance"
        movies={romanceMovies}
        onMoreInfoMovie={(obj) => {
          MovieDetails(obj.id);
        }}
      />


      <ModalInfoMovie isShow={isShowModal} onClose={handleClose} movieDetails={movieDetail} />
    </Container> 
  );    
}

export default App;
