const KEY = "ranks";

export function loadRanks() {
  try {
    const raw = localStorage.getItem(KEY);
    const arr = raw ? JSON.parse(raw) : [];

    const normalized = arr
      .map((r) => ({
        level: Number(r.level) || 1, // 레벨
        time: typeof r.time === "number" ? r.time : Number(r.time), //  클리어 시간
        at: typeof r.at === "string" ? r.at : new Date().toISOString(), // 현재 시각 (기록)
      }))
      .filter((r) => Number.isFinite(r.time)); // null 제거

    // 시간 오름차순 = 순위
    return normalized.sort((a, b) => a.time - b.time);
  } catch {
    return [];
  }
}

export function saveRank({ level, time }) {
  const now = new Date().toISOString();
  const record = {
    level: Number(level),
    time: Number(time),
    at: now,
  };
  const next = [...loadRanks(), record];
  localStorage.setItem(KEY, JSON.stringify(next));
}

export function clearRanks() {
  localStorage.removeItem(KEY);
}
