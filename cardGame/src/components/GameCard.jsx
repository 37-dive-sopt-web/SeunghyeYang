import React from "react";

export default function GameCard({ card, flipped, matched, onFlip }) {
  return (
    <button
      type="button"
      onClick={() => onFlip(card)}
      disabled={flipped || matched}
      className={[
        "w-35 h-35 rounded-xl grid place-items-center text-2xl font-bold transition-transform",
        matched
          ? "bg-[#ffcc15] text-black"
          : flipped
          ? "bg-white text-[#FFDA2C] border border-[#FFDA2C]"
          : "bg-[#FFDD3C] text-white",
        "disabled:opacity-80",
      ].join(" ")}
      title={card.id}
    >
      {flipped || matched ? card.value : "?"}
    </button>
  );
}
