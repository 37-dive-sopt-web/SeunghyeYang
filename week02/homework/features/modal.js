// 모달 열기, 닫기, 제출

import { getMembers, setMembers } from "./storage.js";
import { setFilters, applyFilters } from "./filter.js";
import { makeTable } from "./tableView.js";

export function openModal() {
  document.getElementById("modal").hidden = false;
}

export function closeModal() {
  document.getElementById("modal").hidden = true;
}

export function addMember(e) {
  e.preventDefault();

  const name = document.getElementById("add-name").value.trim();
  const englishName = document.getElementById("add-ename").value.trim();
  const github = document.getElementById("add-github").value.trim();
  const gender = document.getElementById("add-gender").value;
  const role = document.getElementById("add-role").value;
  const codeReviewGroup = document.getElementById("add-group").value.trim();
  const age = document.getElementById("add-age").value.trim();

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

  setMembers([...all, newMember]);

  const filters = setFilters();
  const filtered = applyFilters(getMembers(), filters);
  makeTable(filtered);

  document.querySelector(".modal-form").reset();
  closeModal();
}
