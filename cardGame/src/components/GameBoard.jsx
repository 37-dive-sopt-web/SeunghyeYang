import React, { useMemo } from "react";
import GameCard from "./GameCard";

export default function GameBoard({
  cards,
  cols = 4,
  flippedIds,
  matchedIds,
  onFlip,
}) {
  const gridStyle = useMemo(
    () => ({
      display: "grid",
      gridTemplateColumns: `repeat(${cols}, 100px)`,
      gridAutoRows: "100px",
      gap: "50px",
      justifyContent: "center",
    }),
    [cols]
  );

  // 같은 그리드 사용할 때는 useMemo 사용으로 최적화

  return (
    <div style={gridStyle}>
      {cards.map((card) => {
        const flipped = flippedIds.includes(card.id);
        const matched = matchedIds.has(card.id);
        return (
          <GameCard
            key={card.id}
            card={card}
            flipped={flipped}
            matched={matched}
            onFlip={onFlip}
          />
        );
      })}
    </div>
  );
}
