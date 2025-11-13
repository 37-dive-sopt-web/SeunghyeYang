import { useEffect, useRef, useState } from "react";

// 타이머 훅
export default function useTimer(initial = 45) {
  // 남은 시간
  const [left, setLeft] = useState(initial);
  // 시간 가고 있는지 아닌지
  const [running, setRunning] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!running) return;
    ref.current = setInterval(() => {
      setLeft((t) => (t > 0 ? Number((t - 0.1).toFixed(2)) : 0));
    }, 100);
    return () => clearInterval(ref.current);
  }, [running]);

  const start = () => setRunning(true);
  const stop = () => setRunning(false);
  const reset = (sec = initial) => {
    clearInterval(ref.current);
    setLeft(sec);
    setRunning(false);
  };

  return { left, running, start, stop, reset, setLeft };
}
