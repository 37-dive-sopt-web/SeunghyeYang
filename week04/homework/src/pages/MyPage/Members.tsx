import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import * as styles from "./mypage.css";
import Header from "../../components/Header";
import { getUser, type User } from "../../apis/users";
import InputBox from "../../components/InputBox";
import Button from "../../components/Button";

const Members = () => {
  const [name, setName] = useState("");
  const userIdStr = localStorage.getItem("userId");
  const userId = userIdStr ? Number(userIdStr) : null;
  const [memberId, setMemberId] = useState("");
  const [member, setMember] = useState<User | null>(null);

  useEffect(() => {
    if (!userId) return;

    const fetchUser = async () => {
      try {
        const data = await getUser(userId);
        setName(data.name);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUser();
  }, [userId]);

  const isDisabled = !memberId.trim();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isDisabled) return;

    const id = Number(memberId);

    try {
      const data = await getUser(id);
      setMember(data);
    } catch {
      alert("회원 조회에 실패했습니다.");
      setMember(null);
    }
  };

  return (
    <div className={styles.page}>
      <Header name={name} activeTab="users" />
      <main className={styles.main}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <p className={styles.title}>회원 조회</p>
          <InputBox
            label="회원 ID"
            type="number"
            placeholder="숫자만 입력"
            value={memberId}
            onChange={setMemberId}
          />

          <Button type="submit" disabled={isDisabled}>
            확인
          </Button>

          {member && (
            <>
              <div className={styles.memberInfo}>
                <div className={styles.row}>
                  <p className={styles.info}>이름</p>
                  <span className={styles.username}>{member.name}</span>
                </div>
                <div className={styles.row}>
                  <p className={styles.info}>아이디</p>
                  <span className={styles.username}>{member.username}</span>
                </div>
                <div className={styles.row}>
                  <p className={styles.info}>이메일</p>
                  <span className={styles.username}>{member.email}</span>
                </div>
                <div className={styles.row}>
                  <p className={styles.info}>나이</p>
                  <span className={styles.username}>{member.age}</span>
                </div>
              </div>
            </>

            // <div className={styles.row}>
            //             <p>아이디</p>
            //             <span className={styles.username}>{username}</span>
            //           </div>
          )}
        </form>
      </main>
    </div>
  );
};

export default Members;
