import React, { useContext } from "react";
import PropsContext from "../PropsContext";

const ScoreBoard = () => {
  const props = useContext(PropsContext);
  const xPlaying = props.xPlaying;
  const { xScore, oScore } = props.scores;

  console.log(xScore, oScore);

  return (
    <div className="">
      <span>Player ${props.xPlaying} wins!</span>
      <span className={`score x-score ${!xPlaying && "inactive"}`}>
        X - {xScore}
      </span>
      <span className={`score o-score ${!xPlaying && "inactive"}`}>
        O - {oScore}
      </span>
    </div>
  );
};

export default ScoreBoard;
