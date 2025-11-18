import type { ChangeEvent } from "react";
import { useState } from "react";
import * as styles from "./PasswordInput.css";
import eye from "../assets/eye.svg";
import eyeoff from "../assets/eye-off.svg";

interface PasswordInputBoxProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type: "password";
  placeholder?: string;
}

const PasswordInputBox = ({
  label,
  value,
  onChange,
  placeholder,
}: PasswordInputBoxProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{label}</label>
      <div className={styles.inputContainer}>
        <input
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className={styles.input}
        />
        <button
          className={styles.eyeButton}
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          <img
            src={showPassword ? eyeoff : eye}
            alt="toggle password visibility"
          />
        </button>
      </div>
    </div>
  );
};

export default PasswordInputBox;
