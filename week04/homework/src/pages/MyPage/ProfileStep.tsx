import InputBox from "../../components/InputBox";
import Button from "../../components/Button";

interface ProfileStepProps {
  name: string;
  email: string;
  age: string;
  onChangeName: (value: string) => void;
  onChangeEmail: (value: string) => void;
  onChangeAge: (value: string) => void;
}

const ProfileStep = ({
  name,
  email,
  age,
  onChangeName,
  onChangeEmail,
  onChangeAge,
}: ProfileStepProps) => {
  const isDisabled = !name.trim() || !email.trim() || !age.trim();

  return (
    <>
      <InputBox
        label="이름"
        value={name}
        onChange={onChangeName}
        placeholder="이름을 입력해주세요"
      />
      <InputBox
        label="이메일"
        value={email}
        onChange={onChangeEmail}
        placeholder="name@example.com"
        type="email"
      />
      <InputBox
        label="나이"
        value={age}
        onChange={onChangeAge}
        placeholder="숫자로 입력"
        type="number"
      />
      <Button type="submit" disabled={isDisabled}>
        회원가입
      </Button>
    </>
  );
};

export default ProfileStep;
