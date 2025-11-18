import { style } from "@vanilla-extract/css";

export const page = style({
  minHeight: "100vh",
});

export const main = style({
  maxWidth: "720px",
  margin: "40px auto",
  padding: "32px 40px 48px",
});

export const form = style({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

export const title = style({
  fontSize: "22px",
  fontWeight: 600,
  marginBottom: "12px",
});

export const row = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const info = style({
  fontWeight: 600,
  color: "#999",
});

export const username = style({
  fontWeight: 600,
});

export const memberInfo = style({
  display: "flex",
  flexDirection: "column",
  padding: "15px 20px",
  gap: "20px",
});
