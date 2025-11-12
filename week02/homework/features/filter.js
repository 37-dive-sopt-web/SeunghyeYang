// 필터 설정값들
export function setFilters() {
  const val = (id) => document.getElementById(id)?.value?.trim() ?? "";
  return {
    name: val("f-name"),
    englishName: val("f-ename"),
    github: val("f-github"),
    gender: val("f-gender"),
    role: val("f-role"),
    codeReviewGroup: val("f-group"),
    age: val("f-age"),
  };
}

// 필터 적용
export function applyFilters(data, f) {
  const like = (src, q) =>
    q === "" ||
    String(src ?? "")
      .toLowerCase()
      .includes(q.toLowerCase());

  const likeNum = (src, q) => q === "" || String(src ?? "").includes(String(q));

  return data.filter(
    (m) =>
      like(m.name, f.name) &&
      like(m.englishName, f.englishName) &&
      like(m.github, f.github) &&
      like(m.gender, f.gender) &&
      like(m.role, f.role) &&
      likeNum(m.codeReviewGroup, f.codeReviewGroup) &&
      likeNum(m.age, f.age)
  );
}

// 필터 초기화
export function resetFilters() {
  document
    .querySelectorAll("#search-filter input, #search-filter select")
    .forEach((el) => {
      el.value = "";
    });
}
