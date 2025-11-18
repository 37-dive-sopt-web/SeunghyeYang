import { style } from "@vanilla-extract/css";

export const buttonBase = style({
  padding: "12px 10px",
  borderRadius: "10px",
  fontSize: "15px",
  fontWeight: 600,
  cursor: "pointer",
  textAlign: "center",
  backgroundColor: "#FBE188",
  color: "#fff",
  border: "none",
  transition: "background-color 0.2s ease",

  selectors: {
    "&:hover": {
      backgroundColor: "#F8D25E",
    },
    "&:disabled": {
      backgroundColor: "#E9E9E9",
    },
  },
});
