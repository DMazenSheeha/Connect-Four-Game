import React, { useEffect, useState } from "react";
import bigBlackBoard from "../../../assets/images/board-layer-black-large.svg";
import smallBlackBoard from "../../../assets/images/board-layer-black-small.svg";
import redMark from "../../../assets/images/marker-red.svg";
import yellowMark from "../../../assets/images/marker-yellow.svg";
import redBigBall from "../../../assets/images/counter-red-large.svg";
import yellowBigBall from "../../../assets/images/counter-yellow-large.svg";
import redSmallBall from "../../../assets/images/counter-red-small.svg";
import yellowSmallBall from "../../../assets/images/counter-yellow-small.svg";
import { useDispatch, useSelector } from "react-redux";
import { makeItInitial } from "../../../rtk/restartSlice";
import Players from "./gameComponents/players";
import Turn from "./gameComponents/turn";
import waysToWin from "./gameComponents/waystoWinFunction";

export default function Game() {
  const emptyArr = Array.from({ length: 7 }, () =>
    Array.from({ length: 6 }, () => "")
  );

  const restart = useSelector((state) => state.restart);
  const dispatch = useDispatch();

  const [width, setWidth] = useState("");
  const [none, setNone] = useState("none");
  const [whoWin, setWhoWin] = useState("");
  const [playerOneWins, setPlayerOneWins] = useState(0);
  const [playerTwoWins, setPlayerTwoWins] = useState(0);
  const [turn, setTurn] = useState("red");
  const [time] = useState(30);
  const [abilityToPlay, setAbilityToPlay] = useState(true);
  const [markVisibility, setMarkVisibility] = useState(
    Array.from({ length: 7 }, () => "none")
  );
  const [cols, setCols] = useState(emptyArr);
  const [color, setColor] = useState("#5c2dd5");
  const [trueAndFalse2, setTrueAndFalse2] = useState(
    Array.from({ length: 7 }, () => true)
  );
  const [marked] = useState("");
  const [trueAndFalse, setTrueAndFalse] = useState(false);

  // ! GAME FUNCTIONS

  let c = 0;

  const mouseEnter = (colIndex) => {
    if (abilityToPlay) {
      let newMarkVisibilities = markVisibility;
      newMarkVisibilities = newMarkVisibilities.map((mark, i) => {
        if (i === colIndex) {
          return "no-none";
        } else {
          return "none";
        }
      });
      setMarkVisibility(newMarkVisibilities);
    }
  };

  const handleOnlClick = (index) => {
    c = 0;
    if (abilityToPlay) {
      let newCols = cols;

      for (let i = 0; i < cols[index].length; i++) {
        c = i + 1;
        if (cols[index][i] === "") {
          newCols[index][i] = {
            turn: turn,
            bigBall:
              turn === "red" ? (
                <img src={redBigBall} alt="1" className="ball big" />
              ) : (
                <img src={yellowBigBall} alt="1" className="ball big" />
              ),
            smallBall:
              turn === "red" ? (
                <img src={redSmallBall} alt="1" className="ball small" />
              ) : (
                <img src={yellowSmallBall} alt="1" className="ball small" />
              ),
          };
          break;
        }
      }
      setCols(newCols);

      if (c <= 6) {
        if (trueAndFalse2[index]) {
          if (turn === "red") {
            setTurn("yellow");
          } else {
            setTurn("red");
          }
          if (c === 6) {
            let newArr = trueAndFalse2;
            newArr[index] = false;
            setTrueAndFalse2(newArr);
          }
        }
      }

      //////////////  !  * Win WAYS *    !/////////////////////
      a: for (let i = 0; i < cols.length; i++) {
        for (let j = 0; j < cols[i].length; j++) {
          if (cols[i][j] === "") {
            break a;
          }
          if (j === cols[i].length - 1 && i === cols.length - 1) {
            setWhoWin("DRAW");
            setAbilityToPlay(false);
            setWidth("width");
            setNone("no-none");
          }
        }
      }
      waysToWin(cols, handleWin, turn, index, c);
    }
    c = 0;
  };

  const handleWin = (turn, arr, index) => {
    console.log(arr);
    setAbilityToPlay(false);
    setWidth("width");
    setWhoWin(turn === "red" ? "PLAYER 1" : "PLAYER 2");
    setNone("no-none");
    if (turn === "red") {
      setPlayerOneWins(playerOneWins + 1);
      setColor("#fd6687");
    } else if (turn === "yellow") {
      setPlayerTwoWins(playerTwoWins + 1);
      setColor("#ffce67");
    }
    let newArray = cols;
    for (let i = 0; i < 4; i++) {
      newArray[arr[i].col][arr[i].row] = {
        turn: cols[index][arr[i].row].turn,
        bigBall:
          cols[arr[i].col][arr[i].row].turn === "red" ? (
            <img src={redBigBall} alt="1" className="ball big marked" />
          ) : (
            <img src={yellowBigBall} alt="1" className="ball big marked" />
          ),
        smallBall:
          cols[arr[i].col][arr[i].row].turn === "red" ? (
            <img src={redSmallBall} alt="1" className="ball small marked" />
          ) : (
            <img src={yellowSmallBall} alt="1" className="ball small marked" />
          ),
      };
    }
  };

  const handlePlayAgain = () => {
    c = 0;
    setAbilityToPlay(true);
    setNone("none");
    setWidth("");
    setCols(emptyArr);
    setColor("#5c2dd5");
  };

  // ! EFFECTS

  useEffect(() => {
    setTrueAndFalse(false);
  }, [trueAndFalse]);

  useEffect(() => {
    if (restart) {
      setPlayerOneWins(0);
      setPlayerTwoWins(0);
      setAbilityToPlay(true);
      setCols(emptyArr);
      dispatch(makeItInitial());
      setColor("#5c2dd5");
      setTurn(turn === "red" ? "yellow" : "red");
      setNone("none");
      setWidth("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [restart]);

  return (
    <>
      <div className="game">
        <Players playerOneWins={playerOneWins} playerTwoWins={playerTwoWins} />
        <div className="board">
          <div className="images-of-board">
            <img src={bigBlackBoard} alt="" className="big-board" />
            <img src={smallBlackBoard} alt="" className="small-board" />
            <div className="cols">
              {cols.map((col, colIndex) => {
                return (
                  <div
                    className="col"
                    key={"col" + colIndex}
                    onClick={() => {
                      handleOnlClick(colIndex);
                    }}
                    onMouseEnter={() => {
                      mouseEnter(colIndex);
                    }}
                  >
                    <img
                      src={turn === "red" ? redMark : yellowMark}
                      alt=""
                      className={"mark " + markVisibility[colIndex]}
                    />
                    {cols[colIndex].map((cell, i) => {
                      return (
                        <div className={"cell " + marked} key={"key" + i}>
                          {cols[colIndex][i] === "" ? null : (
                            <>
                              {cols[colIndex][i].bigBall}
                              {cols[colIndex][i].smallBall}
                            </>
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
              <Turn
                className={"turn " + width}
                width={width}
                none={none}
                turn={turn}
                time={time}
                handlePlayAgain={handlePlayAgain}
                whoWin={whoWin}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="foot" style={{ backgroundColor: `${color}` }}></div>
    </>
  );
}
