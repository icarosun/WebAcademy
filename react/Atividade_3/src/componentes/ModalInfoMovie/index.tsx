import { Row, Col, Modal, Card, Stack, Badge, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import { MovieDetails } from "../../services/movie.details.service";

interface ModalInfoMovieProps {
  isShow: boolean;
  onClose: () => void;
  movieDetail: MovieDetails | undefined;
}

export default function ModalInfoMovie(props: ModalInfoMovieProps) {
  return(
    <Modal show = {props.isShow} onHide = {props.onClose} size = "xl" centered>
      <Modal.Header closeButton>
        <Modal.Title>{props.movieDetail?.title} </Modal.Title>  
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs = "auto">
            <img
              style={{ width: 200, borderRadius: 7,}}
              src={`${import.meta.env.VITE_APP_BASE_URL_IMAGEM}/${
              props.movieDetail?.poster_path}`}
            />
            <p>{props.movieDetail?.release_date}<FontAwesomeIcon className="pt-2 px-2" icon={faCircle} size = "2xs"/>
              {props.movieDetail?.runtime}m
            </p>
            <h6>Orçamento</h6>
            <p>{props.movieDetail?.revenue}</p>
              
            <Badge bg="warning" text="dark">
              <Alert.Link target = "_blank" href={`https://www.imdb.com/title/${props.movieDetail?.imdb_id}`}><span className="fw-bold" >IMDb</span> | {props.movieDetail?.imdb_id}</Alert.Link>
            </Badge>
          </Col>
          <Col>
            <Row xs = "auto" className = "justify-content-around">
              <Card border = "success" className = "text-center">
                <Card.Body>
                  <Card.Title>Média de avaliação</Card.Title>
                  <Card.Text >{props.movieDetail?.vote_average}</Card.Text>
                </Card.Body>
              </Card>
              <Card border = "primary" className = "text-center">
                <Card.Body>
                  <Card.Title>Número de avaliações</Card.Title>
                  <Card.Text>{props.movieDetail?.vote_count}</Card.Text>
                </Card.Body>
              </Card>
              <Card border = "primary border-success-subtle" className = "text-center">
                <Card.Body>
                  <Card.Title>Popularidade</Card.Title>
                  <Card.Text  >{props.movieDetail?.popularity}</Card.Text>
                </Card.Body>
              </Card>
            </Row>
            <Stack direction = "horizontal" gap={3} className="my-3">
              {props.movieDetail?.genres.map((genre) => {
                return (<Badge bg = "dark">{genre.name}</Badge>);
              })}
            </Stack>
            <p className="fst-italic">{props.movieDetail?.tagline}</p>
            <h5>Sinopse</h5>
            <p>{props.movieDetail?.overview}</p>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}
