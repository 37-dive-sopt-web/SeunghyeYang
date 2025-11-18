import { style } from "@vanilla-extract/css";

export const page = style({
  minHeight: "100vh",
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "1rem",
});

export const container = style({
  width: "100%",
  maxWidth: "480px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  alignItems: "stretch",
});

export const title = style({
  fontSize: "22px",
  fontWeight: 600,
});

export const textButton = style({
  border: "none",
  backgroundColor: "#fff",
  fontSize: "15px",
  fontWeight: 600,
  color: "#F8D25E",
  cursor: "pointer",
});

export const errorMessage = style({
  color: "#e11d48",
  fontSize: "13px",
  marginTop: "4px",
});
