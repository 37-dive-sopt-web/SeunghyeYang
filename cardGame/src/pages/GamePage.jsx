import React, { useEffect, useState } from "react";
import { buildDeck } from "../lib/Deck";
import useTimer from "../hooks/useTimer";
import SideBar from "../components/SideBar";
import GameBoard from "../components/GameBoard";
import { saveRank } from "../lib/rankStore";

const LEVEL_TO_LIMIT = { 1: 45, 2: 60, 3: 100 };
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

  const { left, start, stop, reset } = useTimer(LEVEL_TO_LIMIT[1]);

  const generateDeck = (level = deckInfo.level) => {
    const data = buildDeck(level);
    setDeckInfo({ status: "ready", data, level });
    setFlippedIds([]);
    setMatchedIds(new Set());
    setMessage("카드를 눌러 게임을 시작");
    setHistory([]);
    reset(LEVEL_TO_LIMIT[level]);
  };

  useEffect(() => {
    if (deckInfo.status !== "ready") return;
    if (
      flippedIds.length === 1 &&
      left === LEVEL_TO_LIMIT[deckInfo.level] &&
      history.length === 0
    ) {
      start();
    }
  }, [flippedIds.length, deckInfo.status]); // eslint-disable-line

  // 카드 게임 실패
  useEffect(() => {
    if (left > 0 || deckInfo.status !== "ready") return;
    stop();
    setMessage("실패");
    setTimeout(() => generateDeck(deckInfo.level), 3000);
  }, [left]); // eslint-disable-line

  // 카드 게임 성공
  useEffect(() => {
    if (deckInfo.status !== "ready" || !deckInfo.data) return;

    if (matchedIds.size === deckInfo.data.length && deckInfo.data.length > 0) {
      stop();

      // 성공한거 저장
      const clearTime = Number(
        (LEVEL_TO_LIMIT[deckInfo.level] - left).toFixed(2)
      );
      saveRank({ level: deckInfo.level, time: clearTime });

      setMessage("성공!!");
      setTimeout(() => generateDeck(deckInfo.level), 3000);
    }
  }, [matchedIds, deckInfo.status, deckInfo.data, deckInfo.level]); // eslint-disable-line

  const handleFlip = (card) => {
    // 조건
    if (deckInfo.status !== "ready") return; // ready 상태일 때만
    if (matchedIds.has(card.id)) return; // 이미 맞춘 카드
    if (flippedIds.includes(card.id)) return; // 뒤집힌거 노
    if (flippedIds.length === 2) return; // 2장까지

    const next = [...flippedIds, card.id];
    setFlippedIds(next);

    if (next.length === 1) {
      setMessage("잠시만 기다려주세요");
      return;
    }

    // 기록
    if (next.length === 2) {
      const [id1, id2] = next;
      const c1 = deckInfo.data.find((c) => c.id === id1);
      const c2 = deckInfo.data.find((c) => c.id === id2);
      const ok = c1.value === c2.value;

      // c = 카드, a = 첫번째 뒤집은거, b = 두번째 뒤집은거
      setHistory((h) => [{ a: c1.value, b: c2.value, ok }, ...h]);

      if (ok) {
        setMatchedIds((prev) => new Set([...prev, id1, id2]));
        setFlippedIds([]);
        setMessage("성공");
      } else {
        setTimeout(() => setFlippedIds([]), 700);
        setMessage("실패");
      }
    }
  };

  const cols = LEVEL_TO_GRID[deckInfo.level]?.[1] ?? 4;
  const totalPairs =
    deckInfo.status === "ready" && deckInfo.data
      ? deckInfo.data.length / 2
      : (LEVEL_TO_GRID[deckInfo.level]?.reduce((a, b) => a * b, 1) ?? 16) / 2;

  return (
    <section className="flex-1 h-full w-full max-w-7xl mx-auto bg-[#FFEFB4] rounded-2xl p-6 min-h-0">
      <div className="grid grid-cols-[1fr_320px] gap-6 items-stretch h-full">
        {/* 왼쪽 */}
        <div className="flex flex-col gap-6 h-full">
          <div className="flex items-center justify-between">
            <p className="text-2xl text-[#FFB200] font-bold">게임보드</p>
            <button
              className="h-8 bg-[#FF5900] py-1 px-3 rounded-[20px] text-white cursor-pointer"
              type="button"
              onClick={() => generateDeck(deckInfo.level)}
            >
              게임 리셋
            </button>
          </div>

          <div className="flex-1 min-h-0 justify-center mr-3 mb-10">
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
        <aside className="self-stretch top-6 h-full">
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
