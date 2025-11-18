import { useState } from "react";
import type { FormEvent } from "react";
import InputBox from "../../components/InputBox";
import Button from "../../components/Button";
import * as styles from "./login.css";
import { useNavigate } from "react-router-dom";
import { login } from "../../apis/auth";
import PasswordInputBox from "../../components/PasswordInput";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const isDisabled = !username.trim() || !password.trim();

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isDisabled) return;

    try {
      setError(null);

      const data = await login({ username, password });

      /*userId 저장 (로컬스토리지 선택)*/
      localStorage.setItem("userId", String(data.userId));

      navigate("/mypage");
    } catch {
      setError("아이디 또는 비밀번호가 올바르지 않습니다.");
    }
  };

  return (
    <div className={styles.page}>
      <form className={styles.container} onSubmit={handleSubmit}>
        {/* 로그인 타이틀 */}
        <p className={styles.title}>로그인</p>
        {/* 아이디 입력 */}
        <InputBox
          label="아이디"
          value={username}
          onChange={setUsername}
          placeholder="아이디를 입력해주세요"
        />
        {/* 비밀번호 입력 */}
        <PasswordInputBox
          label="비밀번호"
          type="password"
          value={password}
          onChange={setPassword}
          placeholder="비밀번호를 입력해주세요"
        />
        {error && <p className={styles.errorMessage}>{error}</p>}
        {/* 로그인 버튼 */}
        <Button disabled={isDisabled} type="submit">
          로그인
        </Button>
        {/* 회원가입 이동 버튼 */}
        <button
          className={styles.textButton}
          onClick={() => navigate("/signup")}
        >
          회원가입
        </button>
      </form>
    </div>
  );
};

export default Login;
