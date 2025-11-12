// 이벤트 관련, 초기 렌더

import { getMembers } from "./features/storage.js";
import { setFilters, applyFilters, resetFilters } from "./features/filter.js";
import { makeTable, bindCheckbox } from "./features/tableView.js";
import { openModal, closeModal, addMember } from "./features/modal.js";
import { deleteSelected } from "./features/action.js";

document.addEventListener("DOMContentLoaded", () => {
  const members = getMembers();
  makeTable(members);
  bindCheckbox();

  // 필터 적용
  document.getElementById("btn-apply").addEventListener("click", () => {
    const filters = setFilters();
    const filtered = applyFilters(getMembers(), filters);
    makeTable(filtered);
  });

  // 초기화
  document.getElementById("btn-reset").addEventListener("click", () => {
    resetFilters();
    makeTable(getMembers());
  });

  // 선택 삭제
  document
    .getElementById("btn-delete")
    .addEventListener("click", deleteSelected);

  // 모달 열고/닫고/제출
  document.getElementById("btn-add").addEventListener("click", openModal);
  document.getElementById("modal-close").addEventListener("click", closeModal);
  document
    .getElementById("modal-backdrop")
    .addEventListener("click", closeModal);
  document.querySelector(".modal-form").addEventListener("submit", addMember);
});
