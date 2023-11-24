import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type valueplayer = "X" | "O";

interface Game {
  winner: boolean;
  nextPlayer: valueplayer;
  squares: string[];
  numOfRounds: number;
  statusGame: string;
}

interface GameState {
  game: Game;
  logs: Game[];
}

const gameInitialState: GameState = {
  game: {
    winner: false,
    nextPlayer: "X",
    numOfRounds: 0, 
    squares: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
    statusGame: "Vez de X",
  }, 
  logs: [
    {
      winner: false,
      nextPlayer: "X",
      numOfRounds: 0, 
      squares: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
      statusGame: "Vez de X",
    }
  ],
};

const calculateWinner = (squares: string[]) => {
  //verify dp 
  if (squares[0] !== " " && squares[0] === squares[4] && squares[4] === squares[8]) return true;
  //verify ds
  if (squares[2] !== " " && squares[2] === squares[4] && squares[4] === squares[6]) return true;

  for (let i = 0; i < 3; i ++) {
    let line = i * 3;
    //verify row
    if (squares[line] !== " " && squares[line] === squares[line+1] && squares[line+1] === squares[line+2]) return true;
    //verify column
    if (squares[i] !== " " && squares[i] === squares[i+3] && squares[i+3] === squares[i+6]) return true;
  }
  
  return false;
}

const gameTicTacToeSlice = createSlice({
  name: "tictactoe",
  initialState: gameInitialState,
  reducers: {
    clickSquare(state, action: PayloadAction<number>) {
      const { game } = state;

      if (game.squares[action.payload] !== " ") return;
      if (game.winner || game.numOfRounds > 8) return;
      
      game.squares.fill(game.nextPlayer, action.payload, action.payload + 1);

      game.winner = calculateWinner(game.squares); 

      game.numOfRounds += 1;
      
      if (game.numOfRounds < state.logs.length) {
        state.logs.splice(game.numOfRounds);
        state.logs.push(game);
      } else {
        state.logs.push(game);
      }

      if (game.winner) {
        game.statusGame = `O jogador ${game.nextPlayer} venceu!`; 
      } else {
        if (game.numOfRounds > 8) {
          game.statusGame = "Velhou!";
        } else {
          game.nextPlayer = game.nextPlayer === "X" ? "O" : "X";
          game.statusGame = `Vez de ${state.game.nextPlayer}`
        }
      }
    },
    restartTheGame(state) {
      state.game = gameInitialState.game;
    },
    goToLog(state, action: PayloadAction<Game>) {
      state.game = action.payload;
    }
  }
});

export const { clickSquare, restartTheGame, goToLog } = gameTicTacToeSlice.actions;
export default gameTicTacToeSlice.reducer;
