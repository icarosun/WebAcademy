import { Card } from "react-bootstrap";
import Slider from "react-slick";

import { Movie, TheMovieDB } from "../../services/movie.service";
import "../../slick.css"; 
import "../../slick-theme.css"



interface ListCategoryMovieProps {
  category: string;
  movies: TheMovieDB | undefined;
  onMoreInfoMovie: (obj: Movie) => void;
}

export default function ListCategoryMovie(props: ListCategoryMovieProps) {
  const settings = {
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  }

  return (
    <>
      <h4 style={{ textAlign: "left" }}>{props.category}</h4>
      
      <Slider {...settings}> 
        {props.movies?.results.map((movie) => {
          return (
            <Card className = "justify-content-center" key={movie.id} onClick={() => props.onMoreInfoMovie(movie)}>
              <Card.Img variant = "top"
                src={`${import.meta.env.VITE_APP_BASE_URL_IMAGEM}/${
                  movie.poster_path
                }`}
              />
              <h5>{movie.original_title}</h5>
            </Card>
          );
        })}
      </Slider>
    </>
  );
}
