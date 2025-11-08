import React, { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import GamePage from "./pages/GamePage";
import RankPage from "./pages/RankPage";

const App = () => {
  const [tab, setTab] = useState("game");

  return (
    <div className="min-h-screen bg-[#FFFDE1] py-6 flex items-center flex-col gap-9">
      <Header tab={tab} onChangeTab={setTab} />
      <main className="w-full flex justify-center">
        {tab === "game" ? <GamePage /> : <RankPage />}
      </main>
    </div>
  );
};

export default App;
