import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";
import { GetPopularMovies, TheMovieDB } from "./services/movie.service";
import { GetMovieDetails, MovieDetails } from "./services/movie.details.service";
import { Container, Row, Col, Modal, Card, Stack, Badge, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";


function App() {
  const [popularMovies, SetPopularMovies] = useState<TheMovieDB>();
  const [isShowModal, SetIsShowModal] = useState<boolean>(false);
  const [movieDetail, SetMovieDetail] = useState<MovieDetails>();

  const handleClose = () => SetIsShowModal(false);

  useEffect(() => {
    async function fetchData() {
      const popularMovies = await GetPopularMovies();
      SetPopularMovies(popularMovies);
    }

    fetchData();
  }, []);

  async function MovieDetails(idMovie: number) {
    const movieDetail = await GetMovieDetails(idMovie);
    SetMovieDetail(movieDetail);
    SetIsShowModal(true);
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
      <Modal show = {isShowModal} onHide = {handleClose} size = "xl" centered>
        <Modal.Header closeButton>
          <Modal.Title>{movieDetail?.title} </Modal.Title>  
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs = "auto">
              <img
                  style={{ width: 200, borderRadius: 7,}}
                  src={`${import.meta.env.VITE_APP_BASE_URL_IMAGEM}/${
                    movieDetail?.poster_path}`}
              />
              <p>{movieDetail?.release_date}<FontAwesomeIcon className="pt-2 px-2" icon={faCircle} size = "2xs"/>
                  {movieDetail?.runtime}h
              </p>
              <h6>Orçamento</h6>
              <p>{movieDetail?.revenue}</p>
              
              <Badge bg="warning" text="dark">
                  <Alert.Link target = "_blank" href={`https://www.imdb.com/title/${movieDetail?.imdb_id}`}><span className="fw-bold" >IMDb</span> | {movieDetail?.imdb_id}</Alert.Link>
              </Badge>

            </Col>
            <Col>
              <Row xs = "auto" className = "justify-content-around">
                 
                  <Card border = "success" className = "text-center">
                    <Card.Body>
                      <Card.Title>Média de avaliação</Card.Title>
                      <Card.Text >{movieDetail?.vote_average}</Card.Text>
                    </Card.Body>
                  </Card>
                  <Card border = "primary" className = "text-center">
                    <Card.Body>
                      <Card.Title>Número de avaliações</Card.Title>
                      <Card.Text>{movieDetail?.vote_count}</Card.Text>
                    </Card.Body>
                  </Card>
                  <Card border = "primary border-success-subtle" className = "text-center">
                    <Card.Body>
                      <Card.Title>Popularidade</Card.Title>
                      <Card.Text  >{movieDetail?.popularity}</Card.Text>
                    </Card.Body>
                  </Card>
              </Row>
              <Stack direction = "horizontal" gap={3} className="my-3">
                {movieDetail?.genres.map((genre) => {
                  return (<Badge bg = "dark">{genre.name}</Badge>);
                })}
              </Stack>
              <p className="fst-italic">{movieDetail?.tagline}</p>
              <h5>Sinopse</h5>
              <p>{movieDetail?.overview}</p>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </Container>

  );
}

export default App;
