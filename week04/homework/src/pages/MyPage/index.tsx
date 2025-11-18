import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import InputBox from "../../components/InputBox";
import Button from "../../components/Button";
import WithdrawModal from "../../components/WithdrawModal";
import * as styles from "./mypage.css";
import { getUser, updateUser, deleteUser } from "../../apis/users";

const MyPage = () => {
  const navigate = useNavigate();

  const userIdStr = localStorage.getItem("userId");
  const userId = userIdStr ? Number(userIdStr) : null;

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  // 초기값
  const [initialName, setInitialName] = useState("");
  const [initialEmail, setInitialEmail] = useState("");
  const [initialAge, setInitialAge] = useState("");

  // 탈퇴 모달
  const [isWithdrawOpen, setIsWithdrawOpen] = useState(false);
  const handleOpenWithdraw = () => setIsWithdrawOpen(true);
  const handleCloseWithdraw = () => setIsWithdrawOpen(false);

  const handleConfirmWithdraw = async () => {
    if (!userId) return;

    try {
      await deleteUser(userId);

      alert("회원탈퇴가 완료되었습니다.");
      localStorage.removeItem("userId");
      navigate("/");
    } catch {
      alert("회원탈퇴에 실패했습니다.");
    } finally {
      setIsWithdrawOpen(false);
    }
  };

  // getUser
  useEffect(() => {
    if (!userId) return;

    const fetchUser = async () => {
      try {
        const data = await getUser(userId);

        setUsername(data.username);
        setName(data.name);
        setEmail(data.email);
        setAge(String(data.age));

        setInitialName(data.name);
        setInitialEmail(data.email);
        setInitialAge(String(data.age));
      } catch (err) {
        console.log(err);
      }
    };

    fetchUser();
  }, [userId]);

  const isDisabled =
    !name.trim() ||
    !email.trim() ||
    !age.trim() ||
    (name === initialName && email === initialEmail && age === initialAge);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!userId) return;

    try {
      await updateUser(userId, {
        name,
        email,
        age: Number(age),
      });

      alert("정보가 저장되었어요");

      setInitialName(name);
      setInitialEmail(email);
      setInitialAge(age);
    } catch {
      alert("내 정보 저장에 실패했습니다.");
    }
  };

  return (
    <div className={styles.page}>
      <Header
        name={name}
        activeTab="info"
        onOpenWithdrawModal={handleOpenWithdraw}
      />

      <main className={styles.main}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <p className={styles.title}>내 정보</p>

          <div className={styles.row} style={{ marginBottom: "15px" }}>
            <p>아이디</p>
            <span className={styles.username}>{username}</span>
          </div>

          <InputBox
            label="이름"
            value={name}
            onChange={setName}
            placeholder="이름을 입력해주세요"
          />
          <InputBox
            label="이메일"
            type="email"
            value={email}
            onChange={setEmail}
            placeholder="이메일을 입력해주세요"
          />
          <InputBox
            label="나이"
            type="number"
            value={age}
            onChange={setAge}
            placeholder="나이를 입력해주세요"
          />

          <Button type="submit" disabled={isDisabled}>
            저장
          </Button>
        </form>
      </main>

      {isWithdrawOpen && (
        <WithdrawModal
          onCancel={handleCloseWithdraw}
          onConfirm={handleConfirmWithdraw}
        />
      )}
    </div>
  );
};

export default MyPage;
