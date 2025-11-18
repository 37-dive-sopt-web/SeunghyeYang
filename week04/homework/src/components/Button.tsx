import * as styles from "./Button.css";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({ children, disabled, ...rest }: ButtonProps) {
  return (
    <button disabled={disabled} {...rest} className={styles.buttonBase}>
      {children}
    </button>
  );
}
