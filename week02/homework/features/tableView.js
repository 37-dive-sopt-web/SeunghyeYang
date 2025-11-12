// 테이블 관련

function makeCell(text) {
  const td = document.createElement("td");
  td.textContent = text ?? "";
  return td;
}

function githubCell(id) {
  const td = document.createElement("td");
  const a = document.createElement("a");
  a.href = `https://github.com/${id}`;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.textContent = id;
  td.appendChild(a);
  return td;
}

export function makeTable(data) {
  const tbody = document.querySelector("#web-list table tbody");
  tbody.innerHTML = "";
  const fragment = document.createDocumentFragment();

  data.forEach((m) => {
    const tr = document.createElement("tr");
    tr.dataset.id = m.id;

    const tdCheckbox = document.createElement("td");
    const check = document.createElement("input");
    check.type = "checkbox";
    check.className = "row-check";
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

  tbody.appendChild(fragment);

  const master = document.getElementById("all-check");
  if (master) master.checked = false;
}

export function bindCheckbox() {
  const master = document.getElementById("all-check");
  const tbody = document.querySelector("#web-list tbody");

  // 전체 선택
  master.addEventListener("change", () => {
    tbody
      .querySelectorAll(".row-check")
      .forEach((c) => (c.checked = master.checked));
  });

  // 개별 체크 → 마스터 동기화 (이벤트 위임)
  tbody.addEventListener("change", (e) => {
    if (!(e.target instanceof HTMLInputElement)) return;
    if (!e.target.classList.contains("row-check")) return;

    const boxes = [...tbody.querySelectorAll(".row-check")];
    const allChecked = boxes.length > 0 && boxes.every((b) => b.checked);
    master.checked = allChecked;
  });
}

export function getCheckedId() {
  const rows = document.querySelectorAll("#web-list tbody tr");
  return [...rows]
    .filter((tr) => tr.querySelector(".row-check")?.checked)
    .map((tr) => Number(tr.dataset.id));
}
