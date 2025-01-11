import { globalStyle } from "@vanilla-extract/css";
import { responsiveFontSize } from "./fontSizes";

globalStyle("h1", {
  fontSize: responsiveFontSize.h1,
});
globalStyle("h2", {
  fontSize: responsiveFontSize.h2,
});
globalStyle("h3", {
  fontSize: responsiveFontSize.h3,
});
globalStyle("h4", {
  fontSize: responsiveFontSize.h4,
});
globalStyle("h5", {
  fontSize: responsiveFontSize.h5,
});
globalStyle("h6", {
  fontSize: responsiveFontSize.h6,
});
globalStyle("p", {
  fontSize: responsiveFontSize.p,
});
