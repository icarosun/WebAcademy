import { Container } from "react-bootstrap";
import Slider from "react-slick";

import { TheMovieDB } from "../../services/movie.service";
import "../../slick.css"; 
import "../../slick-theme.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretLeft, faSquareCaretRight  } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { moreDetails } from "../../redux/slices/modalcontroll.slice";

interface ListCategoryMovieProps {
  category: string;
  movies: TheMovieDB | undefined;
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
  const dispatch = useDispatch<AppDispatch>();
  
  async function MovieDetails(idMovie: number) {
    try {
      await dispatch(moreDetails(idMovie));
    } catch(error) {
      alert("Verifique a conexão com a internet");
    }
  } 

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
        {props.movies?.results.map((movie, index) => {
          return (
            <img
              key = {index} 
              className = "p-1 cursor-pointer" 
              onClick={() => MovieDetails(movie.id)}
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
