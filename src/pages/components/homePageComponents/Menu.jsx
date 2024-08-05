import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.svg";
import players from "../../../assets/images/player-vs-player.svg";

export default function Menu({ menuShow, setMenuShow, setGameRulesShow }) {
  return (
    <div className={"menu " + menuShow}>
      <div className="image">
        <img src={logo} alt="" />
      </div>
      <div className="options">
        <Link className="card-one" to={"/game"}>
          <span>PLAY VS PLAYER</span>
          <img src={players} alt="" />
        </Link>
        <div
          className="card-two"
          onClick={() => {
            setMenuShow("none");
            setGameRulesShow("");
          }}
        >
          <span>GAME RULES</span>
        </div>
      </div>
    </div>
  );
}
