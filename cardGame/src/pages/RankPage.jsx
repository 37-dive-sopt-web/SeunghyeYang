export default function RankPage() {
  return (
    <section className="w-full max-w-7xl mx-auto bg-[#FFEFB4] rounded-2xl p-6">
      <div className="flex items-center justify-between">
        <p className="text-2xl text-[#FFB200] font-bold">랭킹보드</p>
        <button
          className="h-8 bg-[#FF5900] py-1 px-3 rounded-[20px] text-white"
          type="button"
        >
          기록 초기화
        </button>
      </div>
      <div>
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
            <tr>
              <td className="py-2">안녕</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
