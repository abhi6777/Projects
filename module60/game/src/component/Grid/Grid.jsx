import { useState } from "react";
import Card from "../Card/Card";
import './Grid.css';

function Grid({ numberOfCards}) {
     const [turn, setTurn] = useState(true); // flase -> X || true -> O
     return (
          <>
          <div className="flex">
               <h1 className="turnHighlight">Current Turn: {(turn) ? 'O' : 'X'} </h1>
               <div className="grid">

                    {Array(numberOfCards).fill(0).map((element, idx) => 
                    <Card key={idx} onClick={() => setTurn(!turn)} />)};

               </div>
          </div>
          </>
     );
};

export default Grid;