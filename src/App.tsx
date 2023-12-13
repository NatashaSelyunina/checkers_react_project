import { useEffect, useState } from "react";
import "./App.css";
import BoardComponent from "./components/BoardComponent";
import { Board } from "./logic/Board";
import { Player } from "./logic/Player";
import { Colors } from "./logic/Colors";
import EatenCheckers from "./components/EatenCheckers";

const App = () => {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  useEffect(() => {
    restart();
    setCurrentPlayer(whitePlayer);
  }, [])

  function restart() {
    const newBoard = new Board();
    newBoard.createCells();
    newBoard.addFigures();
    setBoard(newBoard);
  }

  function changePlayer() {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer);
  }

  return (
    <div className="app">
     <BoardComponent
     board={board}
     setBoard={setBoard}
     currentPlayer={currentPlayer}
     changePlayer={changePlayer}
     />
     <div>
      <EatenCheckers 
      title="Черные шашки" 
      figures={board.eatenBlackCheckers}/>
      <EatenCheckers 
      title="Белые шашки" 
      figures={board.eatenWhiteCheckers}/>
     </div>
    </div>
  );
};

export default App;
