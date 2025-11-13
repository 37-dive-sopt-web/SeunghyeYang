import React from "react";

const Header = ({ tab = "game", onChangeTab = () => {} }) => {
  return (
    <div className="w-full max-w-7xl h-20 bg-[#FFEFB4] px-8 py-4 flex justify-between items-center rounded-2xl">
      <p className="text-3xl text-[#FFB200]">
        <b>숫자 카드 맞추기</b>
      </p>
      <div className="flex gap-3">
        <button
          className="bg-[#FFCD19] py-1 px-3 rounded-[20px] cursor-pointer"
          type="button"
          onClick={() => onChangeTab("game")}
        >
          <p className="text-white">게임</p>
        </button>
        <button
          className="bg-[#FFFDE1] py-1 px-3 rounded-[20px] cursor-pointer"
          type="button"
          onClick={() => onChangeTab("rank")}
        >
          <p className="text-[#FFCD19]">랭킹</p>
        </button>
      </div>
    </div>
  );
};

export default Header;
