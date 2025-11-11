import React, { useEffect, useMemo, useState } from "react";
import { loadRanks, clearRanks } from "../lib/rankStore";

export default function RankPage() {
  const [rows, setRows] = useState([]);

  const reload = () => setRows(loadRanks());
  useEffect(() => {
    reload();
  }, []);

  const handleClear = () => {
    clearRanks();
    reload();
  };

  const formatted = useMemo(
    () =>
      rows.map((r, idx) => ({
        rank: idx + 1,
        level: r.level,
        time: r.time.toFixed(2), // 소수점 둘째 자리
        when: new Date(r.at).toLocaleString(), // 기록 시각
      })),
    [rows]
  );

  return (
    <section className="w-full max-w-7xl mx-auto bg-[#FFEFB4] rounded-2xl p-6">
      <div className="min-h-[80%]">
        <div className="flex items-center justify-between">
          <p className="text-2xl text-[#FFB200] font-bold">랭킹보드</p>
          <button
            className="h-8 bg-[#FF5900] py-1 px-3 rounded-[20px] text-white cursor-pointer"
            type="button"
            onClick={handleClear}
          >
            기록 초기화
          </button>
        </div>
        <div className="overflow-auto h-[calc(100%-60px)]">
          <table className="w-full mt-6">
            <thead className="bg-[#FFEC85] text-[#FFB200] ">
              <tr>
                <th scope="col" className="py-1 ">
                  순위
                </th>
                <th scope="col" className="py-1 ">
                  레벨
                </th>
                <th scope="col" className="py-1">
                  클리어 시간(초)
                </th>
                <th scope="col" className="py-1">
                  기록 시각
                </th>
              </tr>
            </thead>

            <tbody className="text-[#FFB200]">
              {formatted.length === 0 ? (
                <tr>
                  <td className="py-6 px-3 text-center opacity-60" colSpan={4}>
                    아직 기록이 없어요.
                  </td>
                </tr>
              ) : (
                formatted.map((r) => (
                  <tr
                    key={`${r.rank}-${r.when}`}
                    className="odd:bg-[#FFFDE1] text-center"
                  >
                    <td className="py-2 px-3">{r.rank}</td>
                    <td className="py-2 px-3">Level {r.level}</td>
                    <td className="py-2 px-3">{r.time}</td>
                    <td className="py-2 px-3">{r.when}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
