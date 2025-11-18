import { style } from "@vanilla-extract/css";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "5px",
});

export const label = style({
  fontSize: "1rem",
});

export const input = style({
  padding: "10px 12px",
  borderRadius: "10px",
  border: "1px solid #d9d9d9",
  fontSize: "14px",
  outline: "none",
  selectors: {
    "&:focus": {
      borderColor: "#FBE188",
    },
  },
});
