import InputBox from "../../components/InputBox";
import Button from "../../components/Button";

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
  const isDisabled = !username.trim();
  return (
    <>
      <InputBox
        label="아이디"
        value={username}
        onChange={onChangeUsername}
        placeholder="아이디를 입력해주세요"
      />
      <Button type="button" disabled={isDisabled} onClick={onNext}>
        다음
      </Button>
    </>
  );
};

export default UsernameStep;
