import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as faBookmarkRegular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Favorite } from "../../redux/slices/favorite.slice";

interface CustomIconSaveOrRemoveMovieProps {
  savedMovie: boolean;
  favoriteMovie: Favorite;
  onSavedMovie?: (movieFavorite: Favorite) => void;
  onRemoveMovie?: (movieFavorite: Favorite) => void;
}

export default function CustomIconSaveOrRemoveMovie(props: CustomIconSaveOrRemoveMovieProps) {
  function changeListFavorite() {
    if (props.savedMovie) {
      props.onRemoveMovie!(props.favoriteMovie);
    } else {
      props.onSavedMovie!(props.favoriteMovie);
    }
  }

  return (
    <FontAwesomeIcon 
      title = {props.savedMovie ? "Remover dos favoritos" : "Adicionar aos favoritos"} 
      onClick={() => changeListFavorite()} 
      className = "m-3 p-2" 
      icon= {props.savedMovie ? (faBookmark) : (faBookmarkRegular)} 
      size = "lg"
      style={props.savedMovie ? {color: "#f8e45c", cursor: "pointer"} : {cursor: "pointer"}} 
    />
  );
}
