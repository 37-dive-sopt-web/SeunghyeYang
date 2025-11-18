import PasswordInputBox from "../../components/PasswordInput";
import Button from "../../components/Button";
import * as styles from "./signup.css";

interface PasswordStepProps {
  password: string;
  checkPassword: string;
  onChangePassword: (value: string) => void;
  onChangeCheckPassword: (value: string) => void;
  onNext: () => void;
}

const PasswordStep = ({
  password,
  checkPassword,
  onChangePassword,
  onChangeCheckPassword,
  onNext,
}: PasswordStepProps) => {
  const isDisabled =
    !password.trim() || !checkPassword.trim() || password != checkPassword;

  const isMismatch =
    password.length > 0 &&
    checkPassword.length > 0 &&
    password !== checkPassword;

  const isValid =
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[^A-Za-z0-9]/.test(password) &&
    !/\s/.test(password);

  const isFull = isValid && checkPassword.length == 0;

  const isShort =
    (password.length > 0 && password.length < 8 && checkPassword.length < 1) ||
    (password.length > 64 && checkPassword.length < 1);

  return (
    <>
      <PasswordInputBox
        label="비밀번호"
        value={password}
        onChange={onChangePassword}
        placeholder="비밀번호를 입력해주세요"
        type="password"
      />
      <PasswordInputBox
        label="비밀번호 확인"
        value={checkPassword}
        onChange={onChangeCheckPassword}
        placeholder="비밀번호 확인"
        type="password"
      />
      {isMismatch && (
        <p className={styles.errorMessage}>비밀번호가 일치하지 않아요</p>
      )}
      {isFull && (
        <p className={styles.errorMessage}>비밀번호를 모두 입력해주세요</p>
      )}
      {!isValid && isShort && (
        <p className={styles.errorMessage}>
          비밀번호는 공백 없이 8~64자이며, 대/소문자/숫자/특수문자를 각각 1자
          이상 포함해야 합니다.
        </p>
      )}
      <Button type="button" disabled={isDisabled} onClick={onNext}>
        다음
      </Button>
    </>
  );
};

export default PasswordStep;
