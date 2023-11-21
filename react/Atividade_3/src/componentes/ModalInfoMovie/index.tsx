import { Row, Col, Modal, Button, Card, Stack, Badge, Alert, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faCircle } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as faBookmarkRegular } from "@fortawesome/free-regular-svg-icons";

import { MovieDetails } from "../../services/movie.details.service";
import { useDispatch, useSelector } from "react-redux";
import { Favorite, addFavoriteMovie, isMovieInTheFavoriteList, removeFavoriteMovie } from "../../redux/slices/favorite.slice";
import CustomIconSaveOrRemoveMovie from "../CustomIconSaveOrRemoveMovie";

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

function handleValueId(id: number | undefined): number {
  return id !== undefined ? id : 0; 
}

interface AddIconSaveOrRemoveFavoriteMovieProps {
  savedMovie: boolean;
  onAddMovie?: () => void;
  onRemoveMovie?: () => void;
}

export default function ModalInfoMovie(props: ModalInfoMovieProps) {
  const isMoviePresentInTheFavoriteList = useSelector(isMovieInTheFavoriteList(handleValueId(props.movieDetails?.id)));
  const dispatch = useDispatch();

  const handleAddListFavorite = (id: number) => {
    const movieFavorite: Favorite = {
      idMovie: id,
    }
    console.log("Add", movieFavorite);
    dispatch(addFavoriteMovie(movieFavorite));
  }

  const handleRemoveMovieListFavorite = (id: number) => {
    const movieToRemove: Favorite = {
      idMovie: id,
    }
    console.log("Remove", movieToRemove);
    dispatch(removeFavoriteMovie(movieToRemove));
  }

  const AddIconSaveOrRemoveFavoriteMovie = (props: AddIconSaveOrRemoveFavoriteMovieProps) => (
    <FontAwesomeIcon title = {props.savedMovie ? "Remover dos favoritos" : "Salvar nos favoritos"} onClick={props.onClick} className = "m-3 p-2" icon= {props.savedMovie ? (faBookmark) : (faBookmarkRegular)} size = "lg"/>
  );
    
  return (
    <Modal show={props.isShow} onHide={props.onClose} size="xl" centered>
      <Modal.Header closeButton>
        <Modal.Title>{props.movieDetails?.title} </Modal.Title>
        <CustomIconSaveOrRemoveMovie savedMovie = {isMoviePresentInTheFavoriteList} 
          idMovie = {props.movieDetails?.id ?? 0} 
          onSavedMovie={handleAddListFavorite}
          onRemoveMovie={handleRemoveMovieListFavorite}
        />
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
                return <Badge key={genre.id} bg="dark">{genre.name}</Badge>;
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
