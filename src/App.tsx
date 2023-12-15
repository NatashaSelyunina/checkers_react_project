import { useEffect, useState } from "react";
import "./App.css";
import BoardComponent from "./components/boardcomponent/BoardComponent";
import { Board } from "./logic/Board";
import { Player } from "./logic/Player";
import { Colors } from "./logic/Colors";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Home from "./components/home/Home";

const App = () => {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  useEffect(() => {
    restart();
    setCurrentPlayer(whitePlayer);
  }, []);

  function restart() {
    const newBoard = new Board();
    newBoard.createCells();
    newBoard.addFigures();
    setBoard(newBoard);
    setCurrentPlayer(whitePlayer);
  }

  function changePlayer() {
    setCurrentPlayer(
      currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="boardcomponent"
          element={
            <BoardComponent
              board={board}
              setBoard={setBoard}
              currentPlayer={currentPlayer}
              changePlayer={changePlayer}
            />
          }
        ></Route>
      </Route>
    </Routes>
  );
};

export default App;
