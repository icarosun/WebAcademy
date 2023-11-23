import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { Button, Container, ListGroup } from "react-bootstrap";
import { removeFavoriteMovie } from "../../redux/slices/favorite.slice";
import { moreDetails } from "../../redux/slices/modalcontroll.slice";

export default function ListFavoriteMovies() {
  const favoriteMovies = useSelector((state: RootState) => state.favorite); 
  const dispatch = useDispatch<AppDispatch>();

  async function MovieDetails(idMovie: number) {
    try {
      await dispatch(moreDetails(idMovie));
    } catch(error) {
      alert("Verifique a conexão com a internet");
    }
  } 

  return(     
    <Container>
      <h2 className="m-3">Lista de Filmes Favoritos</h2>
      <ListGroup>
        {favoriteMovies.favoriteMovies.length > 0 ? (
          favoriteMovies.favoriteMovies.map((favoriteMovie, index) => {
            return (
              <ListGroup.Item key = {index} as = "li" className="d-flex justify-content-between ">
                <div style = {{cursor: "pointer"}} onClick = {() => MovieDetails(favoriteMovie.idMovie)} className = "mt-2">{favoriteMovie.titleMovie}</div>  
                <Button variant = "danger"  onClick = {() => dispatch(removeFavoriteMovie(favoriteMovie))} >remover</Button>
              </ListGroup.Item>
            );
          })
        ) : (
          <p>Adicione algum Filme aos favoritos</p>
        )}   
      </ListGroup>
    </Container>
  );
}
