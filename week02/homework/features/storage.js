// 로컬스토리지에서 데이터 가져오기
export function getMembers() {
  try {
    const data = localStorage.getItem("membersData");
    return data ? JSON.parse(data) : [];
  } catch (e) {
    window.alert("데이터를 불러오지 못했습니다.");
    return [];
  }
}

// 멤버 데이터
export function setMembers(arr) {
  localStorage.setItem("membersData", JSON.stringify(arr));
}
