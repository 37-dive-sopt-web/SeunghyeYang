import { useNavigate } from "react-router-dom";
import * as styles from "./Header.css";
import menu from "../assets/menu.svg";
import { useState } from "react";

interface HeaderProps {
  name: string;
  activeTab: "info" | "users";
  onOpenWithdrawModal: () => void;
}

const Header = ({ name, activeTab, onOpenWithdrawModal }: HeaderProps) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    navigate("/");
    alert("로그아웃되었습니다.");
  };
  const handleClickInfo = () => {
    navigate("/mypage");
    setIsMenuOpen(false);
  };

  const handleClickUsers = () => {
    navigate("/mypage/members");
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <p className={styles.title}>마이페이지</p>
        <p className={styles.greeting}>안녕하세요, {name}님</p>
      </div>

      <nav className={styles.nav}>
        <button
          type="button"
          className={activeTab === "info" ? styles.activeTab : styles.tab}
          onClick={() => navigate("/mypage")}
        >
          내 정보
        </button>
        <button
          type="button"
          className={activeTab === "users" ? styles.activeTab : styles.tab}
          onClick={() => navigate("/mypage/members")}
        >
          회원 조회
        </button>
        <button type="button" className={styles.tab} onClick={handleLogout}>
          로그아웃
        </button>
        <button onClick={onOpenWithdrawModal} className={styles.tab}>
          회원탈퇴
        </button>
      </nav>

      <button
        type="button"
        className={styles.menuButton}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <img src={menu} alt="메뉴" className={styles.menuIcon} />
      </button>

      <div
        className={`${styles.mobileMenu} ${
          isMenuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <button className={styles.mobileMenuItem} onClick={handleClickInfo}>
          내 정보
        </button>
        <button className={styles.mobileMenuItem} onClick={handleClickUsers}>
          회원 조회
        </button>
        <button className={styles.mobileMenuItem} onClick={handleLogout}>
          로그아웃
        </button>
        <button className={styles.mobileMenuItem} onClick={onOpenWithdrawModal}>
          회원탈퇴
        </button>
      </div>
    </header>
  );
};

export default Header;
