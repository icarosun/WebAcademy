import { Row, Col } from "react-bootstrap";
import { Movie, TheMovieDB } from "../../services/movie.service";

interface ListCategoryMovieProps {
  category: string;
  movies: TheMovieDB | undefined;
  onMoreInfoMovie: (obj: Movie) => void;
}

export default function ListCategoryMovie(props: ListCategoryMovieProps) {
  return (
    <div className="bg-body-tertiary rounded-3">
      <h2 style={{ textAlign: "left" }}>{props.category}</h2>

      <Row>
        {props.movies?.results.map((movie) => {
          return (
            <Col key={movie.id} onClick={() => props.onMoreInfoMovie(movie)}>
              <img
                style={{ width: 200, borderRadius: 7 }}
                src={`${import.meta.env.VITE_APP_BASE_URL_IMAGEM}/${
                  movie.poster_path
                }`}
              />
              <h5>{movie.original_title}</h5>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
