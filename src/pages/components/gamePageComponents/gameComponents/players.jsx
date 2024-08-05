import playerOne from "../../../../assets/images/player-one.svg";
import playerTwo from "../../../../assets/images/player-two.svg";

function Players({ playerOneWins, playerTwoWins }) {
  return (
    <div className="players">
      <div className="player player-one">
        <img src={playerOne} alt="" />
        <span className="player-1">PLAYER 1</span>
        <span className="player-one-wins">{playerOneWins}</span>
      </div>
      <div className="player">
        <img src={playerTwo} alt="" />
        <span className="player-2">PLAYER 2</span>
        <span className="player-two-wins">{playerTwoWins}</span>
      </div>
    </div>
  );
}

export default Players;
