import React from "react";

export default function SideBar({
  level,
  onPickLevel,
  timeLeft,
  matchedPairs,
  totalPairs,
  message,
  history,
}) {
  return (
    <aside className="bg-[#FFEC85] rounded-2xl p-5 h-full sticky top-6">
      <div className="mb-5">
        <select
          className="bg-[#FFFDE1] w-full rounded-2xl py-2 px-2 font-semibold opacity-70"
          value={level}
          onChange={(e) => onPickLevel?.(Number(e.target.value))}
        >
          <option value={1}>Level 1</option>
          <option value={2}>Level 2</option>
          <option value={3}>Level 3</option>
        </select>
      </div>

      <div className="grid grid-cols-3 gap-3 text-center mb-4">
        <Stat label="남은 시간" value={timeLeft.toFixed(2)} />
        <Stat label="성공한 짝" value={`${matchedPairs}/${totalPairs}`} />
        <Stat label="남은 짝" value={totalPairs - matchedPairs} />
      </div>

      <p className="text-[#FFB200] font-bold text-xl mb-2">안내 메시지</p>
      <div
        className="bg-[#FFFDE1] rounded-[10px] py-7 px-3 mb-4
       text-[#FFB200] text-center"
      >
        {message}
      </div>

      <p className="text-[#FFB200] font-bold text-xl mb-2">최근 히스토리</p>
      {history.length === 0 ? (
        <p className="text-[#FFB200] text-center text-sm opacity-80 mt-[30px]">
          아직 뒤집은 카드가 없어요
        </p>
      ) : (
        <ul className="max-h-[220px] overflow-hidden">
          {history.map((his, i) => (
            <li
              key={i}
              className="text-[15px] flex justify-between items-center px-4 py-2 rounded-2xl mb-2 bg-[#FFFDE1] font-semibold"
            >
              <span className={his.ok ? "text-[#FFDA2C]" : "text-[#E41A1D]"}>
                {his.a},{his.b}
              </span>
              <span className="text-[#444]">{his.ok ? "성공" : "실패"}</span>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}

function Stat({ label, value }) {
  return (
    <div className="bg-[#FFFDE1] rounded-[10px] py-2">
      <p className="text-[#898989] text-xs">{label}</p>
      <p className="text-[#FFB200] font-extrabold text-xl">{value}</p>
    </div>
  );
}
