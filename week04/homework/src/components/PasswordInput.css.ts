import { style } from "@vanilla-extract/css";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "5px",
});

export const label = style({
  fontSize: "1rem",
});

export const inputContainer = style({
  padding: "5px 12px",
  borderRadius: "10px",
  border: "1px solid #d9d9d9",
  outline: "none",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const input = style({
  width: "100%",
  border: "none",
  padding: 0,
  fontSize: "14px",
  outline: "none",
});

export const eyeButton = style({
  all: "unset",
  cursor: "pointer",
});
