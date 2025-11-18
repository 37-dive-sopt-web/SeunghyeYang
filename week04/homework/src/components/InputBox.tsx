import type { ChangeEvent } from "react";
import * as styles from "./InputBox.css";

interface InputBoxProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "password" | "email" | "number";
  placeholder?: string;
}

const InputBox = ({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
}: InputBoxProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{label}</label>

      <input
        className={styles.input}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputBox;
