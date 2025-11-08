import React, { useEffect, useState } from "react";
import { buildDeck } from "../lib/Deck";
import useTimer from "../hooks/useTimer";
import SideBar from "../components/SideBar";
import GameBoard from "../components/GameBoard";

const LIMIT = 45;
const LEVEL_TO_GRID = { 1: [4, 4], 2: [4, 6], 3: [6, 6] };

export default function GamePage() {
  const [deckInfo, setDeckInfo] = useState({
    status: "ready",
    data: buildDeck(1),
    level: 1,
  });
  const [flippedIds, setFlippedIds] = useState([]);
  const [matchedIds, setMatchedIds] = useState(new Set());
  const [message, setMessage] = useState("카드를 눌러 게임을 시작");
  const [history, setHistory] = useState([]);

  const { left, start, stop, reset } = useTimer(LIMIT);

  const generateDeck = (level = deckInfo.level) => {
    const data = buildDeck(level);
    setDeckInfo({ status: "ready", data, level });
    setFlippedIds([]);
    setMatchedIds(new Set());
    setMessage("카드를 눌러 게임을 시작");
    setHistory([]);
    reset(LIMIT);
  };

  useEffect(() => {
    if (deckInfo.status !== "ready") return;
    if (flippedIds.length === 1 && left === LIMIT && history.length === 0) {
      start();
    }
  }, [flippedIds.length, deckInfo.status]); // eslint-disable-line

  useEffect(() => {
    if (left > 0 || deckInfo.status !== "ready") return;
    stop();
    setMessage("실패");
    setTimeout(() => generateDeck(deckInfo.level), 3000);
  }, [left]); // eslint-disable-line

  useEffect(() => {
    if (deckInfo.status !== "ready" || !deckInfo.data) return;
    if (matchedIds.size === deckInfo.data.length && deckInfo.data.length > 0) {
      stop();
      setMessage("성공!!");
      setTimeout(() => generateDeck(deckInfo.level), 3000);
    }
  }, [matchedIds, deckInfo.status, deckInfo.data, deckInfo.level]); // eslint-disable-line

  const handleFlip = (card) => {
    if (deckInfo.status !== "ready") return;
    if (matchedIds.has(card.id)) return;
    if (flippedIds.includes(card.id)) return;
    if (flippedIds.length === 2) return;

    const next = [...flippedIds, card.id];
    setFlippedIds(next);

    if (next.length === 2) {
      const [id1, id2] = next;
      const c1 = deckInfo.data.find((c) => c.id === id1);
      const c2 = deckInfo.data.find((c) => c.id === id2);
      const ok = c1.value === c2.value;

      setHistory((h) => [{ a: c1.value, b: c2.value, ok }, ...h]);

      if (ok) {
        setMatchedIds((prev) => new Set([...prev, id1, id2]));
        setFlippedIds([]);
      } else {
        setTimeout(() => setFlippedIds([]), 700);
      }
    }
  };

  const cols = LEVEL_TO_GRID[deckInfo.level]?.[1] ?? 4;
  const totalPairs =
    deckInfo.status === "ready" && deckInfo.data
      ? deckInfo.data.length / 2
      : (LEVEL_TO_GRID[deckInfo.level]?.reduce((a, b) => a * b, 1) ?? 16) / 2;

  return (
    <section className="w-full max-w-7xl h-full mx-auto bg-[#FFEFB4] rounded-2xl p-6">
      <div className="grid grid-cols-[1fr_320px] gap-6 items-stretch">
        {/* 좌측 영역 */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <p className="text-xl text-[#FFB200] font-bold">게임 보드</p>
            <button
              className="h-8 bg-[#FF5900] py-1 px-3 rounded-[20px] text-white"
              onClick={() => generateDeck(deckInfo.level)}
              type="button"
            >
              게임 리셋
            </button>
          </div>
          <div className="flex justify-center mr-3">
            <GameBoard
              status={deckInfo.status}
              cards={deckInfo.data}
              cols={cols}
              flippedIds={flippedIds}
              matchedIds={matchedIds}
              onFlip={handleFlip}
              onGenerateDeck={generateDeck}
            />
          </div>
        </div>

        {/* 우측 사이드바 */}
        <aside className="sticky top-6 h-fit">
          <SideBar
            level={deckInfo.level}
            onPickLevel={(lv) => generateDeck(lv)}
            timeLeft={left}
            matchedPairs={matchedIds.size / 2}
            totalPairs={totalPairs}
            message={message}
            history={history}
          />
        </aside>
      </div>
    </section>
  );
}
