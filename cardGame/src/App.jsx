import React, { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import GamePage from "./pages/GamePage";
import RankPage from "./pages/RankPage";

const App = () => {
  const [tab, setTab] = useState("game");

  return (
    <div className="min-h-dvh  bg-[#FFFDE1] py-6 flex items-center flex-col gap-9">
      <Header tab={tab} onChangeTab={setTab} />
      <main className="flex-1 w-full flex justify-center items-stretch">
        {tab === "game" ? <GamePage /> : <RankPage />}
      </main>
    </div>
  );
};

export default App;
