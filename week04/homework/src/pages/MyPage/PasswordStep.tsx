import InputBox from "../../components/InputBox";
import Button from "../../components/Button";

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
  // 여기 수정하기
  const isDisabled =
    !password.trim() || !checkPassword.trim() || password != checkPassword;
  return (
    <>
      <InputBox
        label="비밀번호"
        value={password}
        onChange={onChangePassword}
        placeholder="비밀번호를 입력해주세요"
        type="password"
      />
      <InputBox
        label="비밀번호 확인"
        value={checkPassword}
        onChange={onChangeCheckPassword}
        placeholder="비밀번호 확인"
        type="password"
      />

      <Button type="button" disabled={isDisabled} onClick={onNext}>
        다음
      </Button>
    </>
  );
};

export default PasswordStep;
