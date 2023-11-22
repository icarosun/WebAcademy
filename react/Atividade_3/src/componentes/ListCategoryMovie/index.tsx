import { Card, Container } from "react-bootstrap";
import Slider from "react-slick";

import { Movie, TheMovieDB } from "../../services/movie.service";
import "../../slick.css"; 
import "../../slick-theme.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretLeft, faSquareCaretRight  } from "@fortawesome/free-solid-svg-icons";

interface ListCategoryMovieProps {
  category: string;
  movies: TheMovieDB | undefined;
  onMoreInfoMovie: (obj: Movie) => void;
}

function NextArrow(props: any) {
  const {className, style, onClick } = props;
  return (
    <FontAwesomeIcon className = {className}
      style = {{...style, display: "block"}} 
      onClick = {onClick}
      icon={faSquareCaretRight}
    />
  );
}

function PrevArrow(props: any) {
  const {className, style, onClick } = props;
  return (
    <FontAwesomeIcon className = {className}
      style = {{...style, display: "block"}} 
      onClick = {onClick}
      icon={faSquareCaretLeft}
    />
  );
}

export default function ListCategoryMovie(props: ListCategoryMovieProps) {
  const settings = {
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }

  return (
    <Container>
      <h4 className = "mt-2" style={{ textAlign: "left" }}>{props.category}</h4>
      
      <Slider {...settings}> 
        {props.movies?.results.map((movie) => {
          return (
              <img
                className = "p-1 cursor-pointer" 
                onClick={() => props.onMoreInfoMovie(movie)}
                style={{ width: 200, borderRadius: 7, cursor: "pointer", padding: "1px"}}
                src={`${import.meta.env.VITE_APP_BASE_URL_IMAGEM}/${movie.poster_path}`}
                alt = {movie.title}
              />
          );
        })}
      </Slider>
    </Container>
  );
}
