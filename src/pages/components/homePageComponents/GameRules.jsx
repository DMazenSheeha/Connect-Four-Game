import React from "react";

export default function GameRules({
  gameRulesShow,
  setGameRulesShow,
  setMenuShow,
}) {
  return (
    <div className={"game-rules-container " + gameRulesShow}>
      <div className="game-rules">
        <h1>RULES</h1>
        <span className="head">OBJECTIVE</span>
        <p className="paragraph">
          Be the first player to connect 4 of the same colored discs in a row
          (either vertically, horizontally, or diagonally).
        </p>
        <span className="head">HOW TO PLAY</span>
        <div className="rule">
          <span>1</span>
          <p>Red goes first in the first game.</p>
        </div>
        <div className="rule">
          <span>2</span>
          <p>
            Players must alternate turns, and only one disc can be dropped in
            each turn.
          </p>
        </div>
        <div className="rule">
          <span>3</span>
          <p>The game ends when there is a 4-in-a-row or a stalemate.</p>
        </div>
        <div className="rule">
          <span>4</span>
          <p>The starter of the previous game goes second on the next game.</p>
        </div>
        <div
          className="after"
          onClick={() => {
            setGameRulesShow("none");
            setMenuShow("");
          }}
        >
          ✓
        </div>
      </div>
    </div>
  );
}
