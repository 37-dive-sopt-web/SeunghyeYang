import InputBox from "../../components/InputBox";
import Button from "../../components/Button";
import * as styles from "./signup.css";

interface UsernameStepProps {
  username: string;
  onChangeUsername: (value: string) => void;
  onNext: () => void;
}

const UsernameStep = ({
  username,
  onChangeUsername,
  onNext,
}: UsernameStepProps) => {
  const isDisabled = !username.trim() || username.length > 50;
  return (
    <>
      <InputBox
        label="아이디"
        value={username}
        onChange={onChangeUsername}
        placeholder="아이디를 입력해주세요"
      />
      {username.length > 50 && (
        <p className={styles.errorMessage}>아이디는 50자 이내로 작성해주세요</p>
      )}
      <Button type="button" disabled={isDisabled} onClick={onNext}>
        다음
      </Button>
    </>
  );
};

export default UsernameStep;
