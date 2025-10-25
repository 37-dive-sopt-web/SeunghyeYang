// 로컬스토리지에서 데이터 가져오기
function getMembers() {
  try {
    const data = localStorage.getItem("membersData");
    return data ? JSON.parse(data) : [];
  } catch (e) {
    window.alert("데이터를 불러오지 못했습니다.");
    return [];
  }
}

// 멤버 데이터
function setMembers(arr) {
  localStorage.setItem("membersData", JSON.stringify(arr));
}

//필터를 적용해보자

// 필터 설정값들
function setFilters() {
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
function applyFilters(data, f) {
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
function resetFilters() {
  document
    .querySelectorAll("#search-filter input, #search-filter select")
    .forEach((el) => {
      el.value = "";
    });
}

// 테이블을 만들어보자

// td
function makeCell(text) {
  const td = document.createElement("td");
  td.textContent = text ?? "";
  return td;
}

// 깃허브 링크
function githubCell(id) {
  const td = document.createElement("td");
  const a = document.createElement("a");
  a.href = `https://github.com/${id}`;
  a.target = "_blank";
  a.textContent = id;
  a.rel = "noopener noreferrer";
  td.appendChild(a);
  return td;
}

// table
function makeTable(data) {
  const tbody = document.querySelector("#web-list table tbody");
  tbody.innerHTML = "";

  const fragment = document.createDocumentFragment();

  data.forEach((m) => {
    const tr = document.createElement("tr");
    tr.dataset.id = m.id; // 삭제 id

    const tdCheckbox = document.createElement("td");
    const check = document.createElement("input");
    check.type = "checkbox";
    check.className = "row-check"; // 개별
    tdCheckbox.appendChild(check);
    tr.appendChild(tdCheckbox);
    tr.appendChild(makeCell(m.name));
    tr.appendChild(makeCell(m.englishName));
    tr.appendChild(githubCell(m.github));
    tr.appendChild(makeCell(m.gender === "female" ? "여자" : "남자"));
    tr.appendChild(makeCell(m.role));
    tr.appendChild(makeCell(m.codeReviewGroup));
    tr.appendChild(makeCell(m.age));

    fragment.appendChild(tr);
  });

  tbody.appendChild(fragment); // 한번에 데이터 쫙
  const master = document.getElementById("all-check");
  if (master) master.checked = false;
}

// 체크박스
function bindCheckbox() {
  const master = document.getElementById("all-check");
  const tbody = document.querySelector("#web-list tbody");

  // 전체 선택
  master.addEventListener("change", () => {
    tbody
      .querySelectorAll(".row-check")
      .forEach((c) => (c.checked = master.checked));
  });
  //개별
  tbody.addEventListener("change", (e) => {
    if (!(e.target instanceof HTMLInputElement)) return;
    if (!e.target.classList.contains("row-check")) return;

    const boxes = [...tbody.querySelectorAll(".row-check")];
    const allChecked = boxes.length > 0 && boxes.every((b) => b.checked);
    master.checked = allChecked;
  });
}

// 이벤트 모음 (버튼)
document.addEventListener("DOMContentLoaded", () => {
  let members = getMembers();
  makeTable(members);
  bindCheckbox();

  // 필터 적용 버튼
  document.getElementById("btn-apply").addEventListener("click", () => {
    const filters = setFilters();
    const filtered = applyFilters(members, filters);
    makeTable(filtered);
  });

  // 초기화 버튼
  document.getElementById("btn-reset").addEventListener("click", () => {
    resetFilters();
    makeTable(members); // 전체 다시 렌더
  });

  // 선택 삭제 버튼
  document
    .getElementById("btn-delete")
    .addEventListener("click", deleteSelected);
  // 추가 버튼
  document.getElementById("btn-add").addEventListener("click", openModal);
  // 모달에서 x 누르면 닫힘
  document.getElementById("modal-close").addEventListener("click", closeModal);
  // 백드롭 클릭시 모달 닫힘
  document
    .getElementById("modal-backdrop")
    .addEventListener("click", closeModal);
  // 모달 정보 제출
  document.querySelector(".modal-form").addEventListener("submit", addMember);
});

// 모달을 띄워보자

// 오픈모달
function openModal() {
  const modal = document.getElementById("modal");
  modal.hidden = false;
}

// 모달 닫기
function closeModal() {
  const modal = document.getElementById("modal");
  modal.hidden = true;
}

// 멤버를 추가해보자
function addMember(e) {
  e.preventDefault();

  const name = document.getElementById("add-name").value.trim();
  const englishName = document.getElementById("add-ename").value.trim();
  const github = document.getElementById("add-github").value.trim();
  const gender = document.getElementById("add-gender").value;
  const role = document.getElementById("add-role").value;
  const codeReviewGroup = document.getElementById("add-group").value.trim();
  const age = document.getElementById("add-age").value.trim();

  // 1개라도 비어있는 상태로 추가 시, alert 창 띄워주기
  if (
    !name ||
    !englishName ||
    !github ||
    !gender ||
    !role ||
    !codeReviewGroup ||
    !age
  ) {
    window.alert("모든 정보를 입력해주세요.");
    return;
  }

  const all = getMembers();

  // 새롭게 부여하는 id
  const newId = (Math.max(0, ...all.map((m) => m.id)) || 0) + 1;

  const newMember = {
    id: newId,
    name,
    englishName,
    github,
    gender,
    role,
    codeReviewGroup: Number(codeReviewGroup),
    age: Number(age),
  };

  const saved = [...all, newMember];
  setMembers(saved);

  // 테이블 재생성
  const filters = setFilters();
  const filtered = applyFilters(getMembers(), filters);
  makeTable(filtered);

  closeModal();
  document.querySelector(".modal-form").reset();
}

// 체크된 아이디
function getCheckedId() {
  const rows = document.querySelectorAll("#web-list tbody tr");
  return [...rows]
    .filter((tr) => tr.querySelector(".row-check")?.checked)
    .map((tr) => Number(tr.dataset.id));
}

// 삭제를 해보자
function deleteSelected() {
  const ids = getCheckedId();

  // 선택된 애들 제외하고 저장
  const all = getMembers();
  const rest = all.filter((m) => !ids.includes(m.id));
  setMembers(rest);

  const filters = setFilters();
  const filtered = applyFilters(rest, filters);
  makeTable(filtered);
}
