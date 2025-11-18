import { style } from "@vanilla-extract/css";

export const header = style({
  width: "100%",
  backgroundColor: "#FBE188",
  color: "#fff",
  padding: "20px 100px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const left = style({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
});

export const title = style({
  fontSize: "20px",
  fontWeight: 600,
});

export const greeting = style({
  fontSize: "14px",
});

export const nav = style({
  display: "flex",
  gap: "24px",
  alignItems: "center",
});

export const tab = style({
  border: "none",
  backgroundColor: "transparent",
  color: "#ffffff90",
  fontSize: "16px",
  cursor: "pointer",
});

export const activeTab = style([
  tab,
  {
    fontWeight: 600,
    color: "#ffffff",
  },
]);
