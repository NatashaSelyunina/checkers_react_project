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
    setBoard(newBoard);
  }

  return (
    <div className="app">
     <BoardComponent/>
    </div>
  );
};

export default App;
