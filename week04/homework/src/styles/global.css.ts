import { globalStyle } from "@vanilla-extract/css";
import "./reset.css.ts";

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  overscrollBehavior: "none",
});

globalStyle("body", {
  margin: 0,
});

globalStyle("#root", {
  minHeight: "100vh",
});
