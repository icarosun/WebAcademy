import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";
import { GetPopularMovies, TheMovieDB } from "./services/movie.service";
import { GetMovieDetails } from "./services/movie.details.service";
import { Container, Row, Col } from "react-bootstrap";


function App() {
  const [popularMovies, SetPopularMovies] = useState<TheMovieDB>();

  useEffect(() => {
    async function fetchData() {
      const popularMovies = await GetPopularMovies();
      SetPopularMovies(popularMovies);
    }

    fetchData();
  }, []);

  async function MovieDetails(idMovie: number) {
    const movieDetail = await GetMovieDetails(idMovie);
    console.log(movieDetail);
  }

  return (
    <Container fluid>
      <h2 style = {{textAlign: "left"}}>Filme Populares</h2>

      <Row>
        {popularMovies?.results.map((movie) => {
          return (
            <Col key={movie.id} onClick={() => MovieDetails(movie.id)}>
              <img
                style={{ width: 200, borderRadius: 7,}}
                src={`${import.meta.env.VITE_APP_BASE_URL_IMAGEM}/${
                  movie.poster_path
                }`}
              />
              <h5>
              {movie.original_title}
              </h5>
  
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default App;
