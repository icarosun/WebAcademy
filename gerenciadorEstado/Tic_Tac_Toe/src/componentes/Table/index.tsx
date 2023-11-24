import { useDispatch, useSelector } from "react-redux";
import "./Table.css";
import { AppDispatch, RootState } from "../../redux/store";
import { clickSquare } from "../../redux/slices/game.slice";

interface CelXorOProps {
  middle: boolean;
  index: number;
}

const CelXorO = (props: CelXorOProps) => {
  const { game } = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch<AppDispatch>();

  switch(game.squares[props.index]) {
    case "X": 
      return (
        <td className={props.middle ? "celMid" : ""}>
          <span className="spanXO">{game.squares[props.index]}</span>
        </td>
      );
    case "O":
      return (
        <td className={props.middle ? "celMid" : ""}>
          <span className="spanXO" style={{color: "white"}}>{game.squares[props.index]}</span>
        </td>
      );
    default:
      return (
        <td className={props.middle ? "celMid" : ""} onClick={() => dispatch(clickSquare(props.index))}>
          <span className="spanXO">{game.squares[props.index]}</span>
        </td>
      );
  }
}


export default function TableBoard() {
  return (
    <table className='tableGame'> 
      <tbody>
        <tr className = "lineTable">
          <CelXorO middle = {false} index={0}/>
          <CelXorO middle = {true} index={1}/>
          <CelXorO middle = {false} index={2}/>
        </tr>
        <tr className = "lineTable">
          <CelXorO middle = {false} index={3}/>
          <CelXorO middle = {true} index={4}/>
          <CelXorO middle = {false} index={5}/>
        </tr>
        <tr>
          <CelXorO middle = {false} index={6}/>
          <CelXorO middle = {true} index={7}/>
          <CelXorO middle = {false} index={8}/>
        </tr>
      </tbody>
    </table>
  );
}
