import { Row, Col, Modal, Card, Stack, Badge, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import { useDispatch, useSelector } from "react-redux";
import { Favorite, addFavoriteMovie, isMovieInTheFavoriteList, removeFavoriteMovie } from "../../redux/slices/favorite.slice";
import CustomIconSaveOrRemoveMovie from "../CustomIconSaveOrRemoveMovie";
import { RootState } from "../../redux/store";
import { closeModal } from "../../redux/slices/modalcontroll.slice";

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

function handleValueId(id: number | undefined): number {
  return id !== undefined ? id : 0; 
}

export default function ModalInfoMovie() {
  const modalInfo = useSelector((state: RootState) => state.modal);
  const isMoviePresentInTheFavoriteList = useSelector(isMovieInTheFavoriteList(handleValueId(modalInfo.movieDetails?.id)));
  const dispatch = useDispatch();

  const favoriteMovie: Favorite = {
    idMovie: handleValueId(modalInfo.movieDetails?.id), 
    titleMovie: modalInfo.movieDetails?.title ?? "",
  }

  const handleAddListFavorite = (favoriteMovie: Favorite) => {
    dispatch(addFavoriteMovie(favoriteMovie));
  }

  const handleRemoveMovieListFavorite = (movieToRemove: Favorite) => {
    dispatch(removeFavoriteMovie(movieToRemove));
  }

  const handleCloseModal = () => dispatch(closeModal());

  return (
    <Modal show={modalInfo.isShow} onHide={handleCloseModal} size="xl" centered>
      <Modal.Header closeButton>
        <Modal.Title>{modalInfo.movieDetails?.title} </Modal.Title>
        <CustomIconSaveOrRemoveMovie 
          favoriteMovie={favoriteMovie}
          savedMovie = {isMoviePresentInTheFavoriteList} 
          onSavedMovie={handleAddListFavorite}
          onRemoveMovie={handleRemoveMovieListFavorite}
        />
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs="auto">
            <img
              style={{ width: 200, borderRadius: 7 }}
              src={`${import.meta.env.VITE_APP_BASE_URL_IMAGEM}/${modalInfo
                .movieDetails?.poster_path}`}
            />
            <p>
              {changeStringToFormatInBrasil(modalInfo.movieDetails?.release_date)}
              <FontAwesomeIcon
                className="pt-2 px-2"
                icon={faCircle}
                size="2xs"
              />
              {changeMinutesToHour(modalInfo.movieDetails?.runtime)}
            </p>
            <h6>Orçamento</h6>
            <p><span>$</span> {modalInfo.movieDetails?.revenue}</p>

            <Badge bg="warning" text="dark">
              <Alert.Link
                target="_blank"
                href={`https://www.imdb.com/title/${modalInfo.movieDetails?.imdb_id}`}
              >
                <span className="fw-bold">IMDb</span> |{" "}
                {modalInfo.movieDetails?.imdb_id}
              </Alert.Link>
            </Badge>
          </Col>
          <Col>
            <Row xs="auto" className="justify-content-around">
              <Card border="success" className="text-center">
                <Card.Body>
                  <Card.Title>Média de avaliação</Card.Title>
                  <Card.Text>{modalInfo.movieDetails?.vote_average}</Card.Text>
                </Card.Body>
              </Card>
              <Card border="primary" className="text-center">
                <Card.Body>
                  <Card.Title>Número de avaliações</Card.Title>
                  <Card.Text>{modalInfo.movieDetails?.vote_count}</Card.Text>
                </Card.Body>
              </Card>
              <Card
                border="primary border-success-subtle"
                className="text-center"
              >
                <Card.Body>
                  <Card.Title>Popularidade</Card.Title>
                  <Card.Text>{modalInfo.movieDetails?.popularity}</Card.Text>
                </Card.Body>
              </Card>
            </Row>
            <Stack direction="horizontal" gap={3} className="my-3">
              {modalInfo.movieDetails?.genres.map((genre) => {
                return <Badge key={genre.id} bg="dark">{genre.name}</Badge>;
              })}
            </Stack>
            <p className="fst-italic">{modalInfo.movieDetails?.tagline}</p>
            <h5>Sinopse</h5>
            <p>{modalInfo.movieDetails?.overview}</p>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}
