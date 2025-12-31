import type { ReactNode } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  children: ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  const modalRoot = document.getElementById("modal-root");

  if (!modalRoot) return null;

  return createPortal(children, modalRoot);
};

export default Modal;
