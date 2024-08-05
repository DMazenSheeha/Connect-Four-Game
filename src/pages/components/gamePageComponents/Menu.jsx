import { Link } from "react-router-dom";
import { doRestart } from "../../../rtk/restartSlice";
import { useDispatch } from "react-redux";

export default function Menu({ menuShow, setMenuShow, setRestart }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className={"menu menu-2 " + menuShow}>
        <div className="image pause">PAUSE</div>
        <div className="options options-2">
          <div
            className="card-one one"
            style={{ backgroundColor: "#fff" }}
            onClick={() => {
              setMenuShow("none");
            }}
          >
            <span>CONTINUE GAME</span>
          </div>
          <div
            className="card-two two"
            onClick={() => {
              setMenuShow("none");
              dispatch(doRestart());
            }}
          >
            <span>RESTART</span>
          </div>
          <Link className="card-two three" to={"/"}>
            <span>QUIT GAME</span>
          </Link>
        </div>
      </div>
      <div className={"menu-container game-menu " + menuShow}></div>
    </>
  );
}
