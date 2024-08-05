/* eslint-disable no-sequences */
function WinState({ none, whoWin, handlePlayAgain }) {
  return (
    <div className={none + " wins"}>
      {whoWin === "DRAW" ? (
        <span
          style={{ top: "0 !important", fontSize: "4.4rem", fontWeight: "500" }}
        >
          DRAW
        </span>
      ) : (
        <span>{whoWin}</span>
      )}
      {whoWin !== "DRAW" && <span className="not-draw">WINS</span>}
      <button onClick={handlePlayAgain}>PLAY AGAIN</button>
    </div>
  );
}

export default WinState;
