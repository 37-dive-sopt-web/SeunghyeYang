// 선택 삭제 등
import { getMembers, setMembers } from "./storage.js";
import { setFilters, applyFilters } from "./filter.js";
import { makeTable, getCheckedId } from "./tableView.js";

export function deleteSelected() {
  const ids = getCheckedId();
  const all = getMembers();
  const rest = all.filter((m) => !ids.includes(m.id));
  setMembers(rest);

  const filters = setFilters();
  const filtered = applyFilters(rest, filters);
  makeTable(filtered);
}
