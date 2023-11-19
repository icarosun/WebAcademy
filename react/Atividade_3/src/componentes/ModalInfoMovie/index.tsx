import { Row, Col, Modal, Card, Stack, Badge, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import { MovieDetails } from "../../services/movie.details.service";

interface ModalInfoMovieProps {
  isShow: boolean;
  onClose: () => void;
  movieDetails: MovieDetails | undefined;
}

function changeMinutesToHour(minutes: number | undefined): String {
  if (minutes !== undefined) {
    let filmDuration = "";

    const hour = Math.floor(minutes/60);
    const restMinutes = minutes % 60;

    filmDuration = `${hour}h ${restMinutes}m`;

    return filmDuration;
  }

  return "0";
}

function changeStringToFormatInBrasil(date: string | undefined): string { 
  if (date !== undefined) {
    const d = new Date(date);

    return d.toLocaleDateString("BR");
  }

  return "0/0/0000";
}

export default function ModalInfoMovie(props: ModalInfoMovieProps) {
  return (
    <Modal show={props.isShow} onHide={props.onClose} size="xl" centered>
      <Modal.Header closeButton>
        <Modal.Title>{props.movieDetails?.title} </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs="auto">
            <img
              style={{ width: 200, borderRadius: 7 }}
              src={`${import.meta.env.VITE_APP_BASE_URL_IMAGEM}/${props
                .movieDetails?.poster_path}`}
            />
            <p>
              {changeStringToFormatInBrasil(props.movieDetails?.release_date)}
              <FontAwesomeIcon
                className="pt-2 px-2"
                icon={faCircle}
                size="2xs"
              />
              {changeMinutesToHour(props.movieDetails?.runtime)}
            </p>
            <h6>Orçamento</h6>
            <p><span>$</span> {props.movieDetails?.revenue}</p>

            <Badge bg="warning" text="dark">
              <Alert.Link
                target="_blank"
                href={`https://www.imdb.com/title/${props.movieDetails?.imdb_id}`}
              >
                <span className="fw-bold">IMDb</span> |{" "}
                {props.movieDetails?.imdb_id}
              </Alert.Link>
            </Badge>
          </Col>
          <Col>
            <Row xs="auto" className="justify-content-around">
              <Card border="success" className="text-center">
                <Card.Body>
                  <Card.Title>Média de avaliação</Card.Title>
                  <Card.Text>{props.movieDetails?.vote_average}</Card.Text>
                </Card.Body>
              </Card>
              <Card border="primary" className="text-center">
                <Card.Body>
                  <Card.Title>Número de avaliações</Card.Title>
                  <Card.Text>{props.movieDetails?.vote_count}</Card.Text>
                </Card.Body>
              </Card>
              <Card
                border="primary border-success-subtle"
                className="text-center"
              >
                <Card.Body>
                  <Card.Title>Popularidade</Card.Title>
                  <Card.Text>{props.movieDetails?.popularity}</Card.Text>
                </Card.Body>
              </Card>
            </Row>
            <Stack direction="horizontal" gap={3} className="my-3">
              {props.movieDetails?.genres.map((genre) => {
                return <Badge bg="dark">{genre.name}</Badge>;
              })}
            </Stack>
            <p className="fst-italic">{props.movieDetails?.tagline}</p>
            <h5>Sinopse</h5>
            <p>{props.movieDetails?.overview}</p>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}
