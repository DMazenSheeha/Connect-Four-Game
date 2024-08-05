import WinState from "./winState";

function Turn({ width, none, turn, time, whoWin, handlePlayAgain, color }) {
  return (
    <div className={"turn " + width}>
      <WinState none={none} whoWin={whoWin} handlePlayAgain={handlePlayAgain} />
    </div>
  );
}

export default Turn;
