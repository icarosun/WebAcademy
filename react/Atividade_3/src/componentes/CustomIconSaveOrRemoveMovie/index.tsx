import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as faBookmarkRegular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CustomIconSaveOrRemoveMovieProps {
  savedMovie: boolean;
  idMovie: number;
  onSavedMovie?: (id: number) => void;
  onRemoveMovie?: (id: number) => void;
}

export default function CustomIconSaveOrRemoveMovie(props: CustomIconSaveOrRemoveMovieProps) {
  function changeListFavorite() {
    if (props.savedMovie) {
      props.onRemoveMovie!(props.idMovie);
    } else {
      props.onSavedMovie!(props.idMovie);
    }
  }

  return (
    <FontAwesomeIcon 
      title = {props.savedMovie ? "Remover dos favoritos" : "Salvar nos favoritos"} 
      onClick={() => changeListFavorite()} 
      className = "m-3 p-2" 
      icon= {props.savedMovie ? (faBookmark) : (faBookmarkRegular)} 
      size = "lg"
      style={props.savedMovie ? {color: "#f8e45c"} : {}} 
    />
  );
}
