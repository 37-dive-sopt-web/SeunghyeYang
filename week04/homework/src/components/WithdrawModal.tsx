import Modal from "./Modal";
import * as styles from "./WithdrawModal.css";

interface WithdrawModalProps {
  onCancel: () => void;
  onConfirm: () => void;
}

const WithdrawModal = ({ onCancel, onConfirm }: WithdrawModalProps) => {
  return (
    <Modal>
      <div className={styles.modalOverlay}>
        <div className={styles.modal}>
          <p className={styles.modalTitle}>정말 탈퇴하시겠어요?</p>
          <p className={styles.modalDescription}>
            탈퇴 후에는 모든 정보가 삭제돼요.
          </p>

          <div className={styles.modalButtons}>
            <button
              className={styles.cancelButton}
              type="button"
              onClick={onCancel}
            >
              취소
            </button>
            <button
              className={styles.withdrawButton}
              type="button"
              onClick={onConfirm}
            >
              회원탈퇴
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default WithdrawModal;
