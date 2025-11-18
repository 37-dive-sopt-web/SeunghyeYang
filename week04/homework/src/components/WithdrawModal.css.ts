import { style } from "@vanilla-extract/css";

export const modalOverlay = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
});

export const modal = style({
  width: "300px",
  background: "#fff",
  padding: "30px",
  borderRadius: "12px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
});

export const modalTitle = style({
  fontSize: "18px",
  fontWeight: 600,
});

export const modalDescription = style({
  fontSize: "14px",
  color: "#555",
});

export const modalButtons = style({
  marginTop: "15px",
  display: "flex",
  justifyContent: "space-between",
  gap: "10px",
});

export const cancelButton = style({
  backgroundColor: "#FBE188",
  color: "#fff",
  border: "none",
  borderRadius: "10px",
  width: "100px",
  padding: "10px 5px",
  cursor: "pointer",
  selectors: {
    "&:hover": {
      backgroundColor: "#F8D25E",
    },
  },
});

export const withdrawButton = style({
  backgroundColor: "#FF5555",
  color: "#fff",
  border: "none",
  borderRadius: "10px",
  width: "100px",
  padding: "10px 5px",
  cursor: "pointer",
  selectors: {
    "&:hover": {
      backgroundColor: "#FF3737",
    },
  },
});
