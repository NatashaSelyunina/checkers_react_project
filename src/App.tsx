import { useEffect, useState } from "react";
import "./App.css";
import BoardComponent from "./components/BoardComponent";
import { Board } from "./logic/Board";

const App = () => {
  const [board, setBoard] = useState(new Board());

  useEffect(() => {
    restart();
  }, [])

  function restart() {
    const newBoard = new Board();
    newBoard.createCells();
    newBoard.addFigures();
    setBoard(newBoard);
  }

  return (
    <div className="app">
     <BoardComponent
     board={board}
     setBoard={setBoard}
     />
    </div>
  );
};

export default App;
