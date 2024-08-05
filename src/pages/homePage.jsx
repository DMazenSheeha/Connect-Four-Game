import React, { useState } from "react";

import GameRules from "./components/homePageComponents/GameRules";
import Menu from "./components/homePageComponents/Menu";

export default function HomePage() {
  const [gameRulesShow, setGameRulesShow] = useState("none");
  const [menuShow, setMenuShow] = useState("");
  return (
    <div className="home">
      <Menu
        className={`menu ${menuShow}`}
        menuShow={menuShow}
        setMenuShow={setMenuShow}
        setGameRulesShow={setGameRulesShow}
      />

      <GameRules
        gameRulesShow={gameRulesShow}
        setGameRulesShow={setGameRulesShow}
        menuShow={menuShow}
        setMenuShow={setMenuShow}
      />
    </div>
  );
}
