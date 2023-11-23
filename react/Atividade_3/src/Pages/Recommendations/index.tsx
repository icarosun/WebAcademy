import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { GetRecommendationsMovies, TheMovieDB } from "../../services/movie.service";
import { Container } from "react-bootstrap";
import ListCategoryMovie from "../../componentes/ListCategoryMovie";
import { RootState } from "../../redux/store";
import { Favorite } from "../../redux/slices/favorite.slice";

export default function Recommendations() {
  const { favoriteMovies } = useSelector((state: RootState) => state.favorite);
  const [recommendations, SetRecommendations] = useState<TheMovieDB[]>();

  function handleVerifyReommendations(recommendationsList?: TheMovieDB[], key?: number) {
    const value: TheMovieDB = { page: 0, results: []};
    if (key !== undefined) {
      if (recommendationsList !== undefined) {
       return recommendationsList[key];
      }
    }

    return value;
  }

  useEffect(() => {
    const fetchRecommendations = async (favorites: Favorite[]) => {
      const requests = favorites.map(async (movie: Favorite) => {
        return GetRecommendationsMovies(movie.idMovie)
          .then(movies => {
            return movies;
          }) 
      });

      return Promise.all(requests);
    }
  
    if (favoriteMovies.length > 0) {
      fetchRecommendations(favoriteMovies)
      .then(movies => {
        SetRecommendations(movies);
      });
    }
  }, [favoriteMovies])
  
  return (
    <Container>
      {favoriteMovies.length != 0 ? (
        favoriteMovies?.map((favoriteMovie: Favorite, index) => {
          return (
            <ListCategoryMovie 
              key = {index}
              category= {`Já que você adicionou ${favoriteMovie.titleMovie}, veja também: `}
              movies = {handleVerifyReommendations(recommendations ?? [], index)}
            />
          );
        })
      )
      : (
        <p>Adicione algum filme aos favoritos</p>
      )
      }
    </Container>
  );
}
