import type { ButtonHTMLAttributes, ReactNode } from "react";
import * as styles from "./Button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, disabled, ...rest }: ButtonProps) => {
  return (
    <button disabled={disabled} {...rest} className={styles.buttonBase}>
      {children}
    </button>
  );
};

export default Button;
