import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { GetRecommendationsMovies, Movie, TheMovieDB } from "../../services/movie.service";
import { Container } from "react-bootstrap";
import ListCategoryMovie from "../../componentes/ListCategoryMovie";
import { GetMovieDetails, MovieDetails } from "../../services/movie.details.service";
import ModalInfoMovie from "../../componentes/ModalInfoMovie";

export default function Recommendations() {
  const { favoriteMovies } = useSelector((state: any) => state.favorite);
  const [recommendations, SetRecommendations] = useState<TheMovieDB[]>();
  
  const [isShowModal, SetIsShowModal] = useState<boolean>(false);
  const [movieDetail, SetMovieDetail] = useState<MovieDetails>();
  
  const handleMovieDetails = (obj: Movie) => {
    MovieDetails(obj.id);
  }

  async function MovieDetails(idMovie: number) {
    const movieDetail = await GetMovieDetails(idMovie);
    SetMovieDetail(movieDetail);
    SetIsShowModal(true);
  }

  const handleClose = () => SetIsShowModal(false);

  function handleVerifyReommendations(recommendationsList: TheMovieDB[] | undefined, key: number | any | undefined) {
    const value: TheMovieDB = { page: 0, results: []};
    if (key !== undefined) {
      if (recommendationsList !== undefined) {
       return recommendationsList[key];
      }
    }

    return value;
  }

  useEffect(() => {
    const fetchRecommendations = async (favorites) => {
      const requests = favorites.map((movie: any) => {
        return GetRecommendationsMovies(movie.idMovie)
          .then(movies => {
            return movies;
          }) 
      });

      return Promise.all(requests);
    }

    fetchRecommendations(favoriteMovies)
    .then(movies => {
      SetRecommendations(movies);
    });
  }, [favoriteMovies])
  
  return (
    <Container>
      {favoriteMovies?.map((favoriteMovie: any, index: any) => {
        return (
          <ListCategoryMovie 
            key = {index}
            category= {`Já que você adicionou ${favoriteMovie.titleMovie}, veja também: `}
            movies = {handleVerifyReommendations(recommendations ?? [], index)}
            onMoreInfoMovie = {handleMovieDetails}
          />
        );
      })}

      <ModalInfoMovie isShow={isShowModal} onClose={handleClose} movieDetails={movieDetail} />
    </Container>
  );
}
