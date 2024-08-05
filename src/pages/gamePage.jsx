import { useDispatch } from "react-redux";
import logo from "../assets/images/logo.svg";
import Game from "./components/gamePageComponents/Game";
import Menu from "./components/gamePageComponents/Menu";
import { useState } from "react";
import { doRestart } from "../rtk/restartSlice";

export default function GamePage() {
  const [menuShow, setMenuShow] = useState("none");
  const dispatch = useDispatch();
  return (
    <>
      <div className="game-page">
        <Menu menuShow={menuShow} setMenuShow={setMenuShow} />
        <div className="head2">
          <span
            onClick={() => {
              setMenuShow("");
            }}
          >
            MENU
          </span>
          <img src={logo} alt="" />
          <span
            onClick={() => {
              dispatch(doRestart());
            }}
          >
            RESTART
          </span>
        </div>
        <Game />
      </div>
    </>
  );
}
