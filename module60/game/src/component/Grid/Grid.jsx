import { useState, useCallback } from "react";
import Card from "../Card/Card";
import { ToastContainer, toast } from 'react-toastify';
import isWinner from "../../helper/checkWinner";

import './Grid.css';
import 'react-toastify/dist/ReactToastify.css';

function Grid({ numberOfCards}) {
     const [turn, setTurn] = useState(true); // flase -> X || true -> O
     const [board, setBoard] = useState(Array(numberOfCards).fill(""));
     const [winner, setWinner] = useState(null);

     const play = useCallback(function playCallback(index) {
          console.log("Move played", index);
          if(turn == true) {
               board[index] = "O";
          } else {
               board[index] = 'X';
          };
          const win = isWinner(board, turn ? "O" : "X");
          if(win) {
               setWinner(win);
               toast(`Congratulations ${win} win the game`);
          };

          setBoard([... board]);
          setTurn(!turn);
     }, [turn]);

     function reset() {
          setBoard(Array(numberOfCards).fill(""));
          setWinner(null);
          setTurn(true);
     };

     return (
          <>
          <div className="flex">
               {winner &&
               <>               
                    <h1 className="turnHighlight"> Winner is {winner} </h1>
                    <button onClick={reset}>ReStart</button>
               </>
                }
               <h1 className="turnHighlight">Current Turn: {(turn) ? 'O' : 'X'} </h1>
               <div className="grid">

                    {board.map((value, idx) => 
                    <Card key={idx} index={idx} onPlay={play} player={value} gameEnd = {winner ? true : false } />)}

               </div>
          </div>

          <ToastContainer position="top-center" />
          </>
     );
};

export default Grid;