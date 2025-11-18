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

  "@media": {
    "(max-width: 768px)": {
      display: "none",
    },
  },
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

export const mobileMenu = style({
  position: "absolute",
  top: "80px",
  right: "0",
  left: "0",
  overflow: "hidden",
  backgroundColor: "#FBE188",
  maxHeight: "0px",
  transform: "translateY(-8px)",
  transition: "max-height 0.25s ease, opacity 0.25s ease, transform 0.25s ease",

  "@media": {
    "(min-width: 768px)": {
      display: "none",
    },
  },
});

export const menuButton = style({
  display: "none",
  border: "none",
  background: "none",
  fontSize: "24px",
  cursor: "pointer",

  "@media": {
    "(max-width: 768px)": {
      display: "block",
    },
  },
});

export const menuIcon = style({
  all: "unset",
  width: "24px",
  height: "24px",
});

export const mobileMenuOpen = style({
  maxHeight: "220px",
  opacity: 1,
  transform: "translateY(0)",
  backgroundColor: "#FBE188",
});

export const mobileMenuItem = style({
  width: "100%",
  textAlign: "right",
  padding: "15px 100px",
  color: "#ffffff",
  border: "none",
  background: "none",
  cursor: "pointer",
  fontSize: "14px",

  selectors: {
    "&:hover": {
      backgroundColor: "#FFF7D1",
    },
  },
});
