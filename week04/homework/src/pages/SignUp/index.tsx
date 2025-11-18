import { useNavigate } from "react-router-dom";
import * as styles from "./signup.css";
import LeftArrow from "../../assets/left-arrow.svg";
import { useState } from "react";
import type { FormEvent } from "react";
import { signup } from "../../apis/users";

import UsernameStep from "../mypage/UsernameStep";
import PasswordStep from "../mypage/PasswordStep";
import ProfileStep from "../mypage/ProfileStep";

type Step = 1 | 2 | 3;

const SignUp = () => {
  const [step, setStep] = useState<Step>(1);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const navigate = useNavigate();

  const handlePrev = () => {
    if (step === 1) {
      navigate("/");
    } else {
      setStep((prev) => (prev - 1) as Step);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await signup({
        username,
        password,
        name,
        email,
        age: Number(age),
      });

      alert("회원가입이 완료되었습니다!");
      navigate("/");
    } catch {
      alert("회원가입에 실패하였습니다.");
    }
  };

  return (
    <div className={styles.page}>
      <form className={styles.container} onSubmit={handleSubmit}>
        <div className={styles.header}>
          <button
            type="button"
            className={styles.backButton}
            onClick={handlePrev}
          >
            <img src={LeftArrow} alt="뒤로가기" />
          </button>
          <p className={styles.title}>회원가입</p>
        </div>

        {step === 1 && (
          <UsernameStep
            username={username}
            onChangeUsername={setUsername}
            onNext={() => setStep(2)}
          />
        )}

        {step === 2 && (
          <PasswordStep
            password={password}
            checkPassword={checkPassword}
            onChangePassword={setPassword}
            onChangeCheckPassword={setCheckPassword}
            onNext={() => setStep(3)}
          />
        )}

        {step === 3 && (
          <ProfileStep
            name={name}
            email={email}
            age={age}
            onChangeName={setName}
            onChangeEmail={setEmail}
            onChangeAge={setAge}
          />
        )}

        <div className={styles.textContainer}>
          <p>이미 계정이 있나요?</p>
          <button className={styles.textButton} onClick={() => navigate("/")}>
            로그인으로 돌아가기
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
