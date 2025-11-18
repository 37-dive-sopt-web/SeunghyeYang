import { style } from "@vanilla-extract/css";

export const page = style({
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const container = style({
  width: "100%",
  maxWidth: "480px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  alignItems: "stretch",
});

export const header = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  marginBottom: "8px",
});

export const backButton = style({
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
  padding: 0,
  display: "flex",
  alignItems: "center",
});

export const title = style({
  fontSize: "22px",
  fontWeight: 600,
});

export const errorText = style({
  color: "#e11d48",
  fontSize: "13px",
  marginTop: "-8px",
});

export const textContainer = style({
  display: "flex",
  alignItems: "center",
});

export const textButton = style({
  border: "none",
  backgroundColor: "#fff",
  fontSize: "16px",
  fontWeight: 600,
  color: "#F8D25E",
  cursor: "pointer",
});
