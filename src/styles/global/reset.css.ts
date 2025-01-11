/*
MUST IMPORT reset.css.ts in layout.astro
*/

import { globalStyle } from "@vanilla-extract/css";

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
});

globalStyle("*", {
  margin: 0,
  maxWidth: "100dvw",
  boxSizing: "border-box",
});

globalStyle("html, body", {
  blockSize: "100%",
  overflowInline: "hidden",
  boxSizing: "border-box",
});

globalStyle("body", {
  lineHeight: 1.5,
  WebkitFontSmoothing: "antialiased",
});

globalStyle("img, picture, video, canvas, svg", {
  display: "block",
  maxInlineSize: "100%",
});

globalStyle("input, button, textarea, select", {
  font: "inherit",
});
