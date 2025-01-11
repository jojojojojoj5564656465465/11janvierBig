import FontSizeGenerator from "./FontSizeGenerator";

const font = new FontSizeGenerator(380, 2200, 16);

/**
 * @description average size of the text in the page
 * must be used in conjunction with FontSizeGenerator
 */
export const optimalFontSizePerTag = {
  h1: 2,
  h2: 1.5,
  h3: 1.17,
  h4: 1,
  h5: 0.83,
  h6: 0.67,
  p: 1,
  ul: 1.17,
  li: 1,
};

export const responsiveFontSize: Record<string, string> = {
  h1: "clamp(2.5rem, 5vw, 4rem)",
  h2: "clamp(2rem, 4vw, 3rem)",
  h3: "clamp(1.75rem, 3.5vw, 2.5rem)",
  h4: "clamp(1.5rem, 3vw, 2rem)",
  h5: "clamp(1.25rem, 2.5vw, 1.75rem)",
  h6: "clamp(1rem, 2vw, 1.5rem)",
  p: "clamp(1rem, 1.5vw, 1.25rem)",
};

export const fontSizes = {
  h1: font.clamp(1, 2.2),
  cqi: "clamp(0.60rem, .65cqi, .9cqi)",
  xs: "clamp(0.78rem, calc(0.77rem + 0.03vw), 0.80rem)",
  sm: "clamp(0.94rem, calc(0.92rem + 0.11vw), 1.00rem)",
  base: "clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem)",
  md: "clamp(1.35rem, calc(1.28rem + 0.37vw), 1.56rem)",
  lg: "clamp(1.62rem, calc(1.50rem + 0.58vw), 1.95rem)",
  xl: "clamp(1.94rem, calc(1.77rem + 0.87vw), 2.44rem)",
  "2xl": "clamp(2.33rem, calc(2.08rem + 1.25vw), 3.05rem)",
  "3xl": "clamp(2.80rem, calc(2.45rem + 1.77vw), 3.82rem)",
  "4xl": "clamp(3.36rem, calc(2.87rem + 2.45vw), 4.77rem)",
  "5xl": "clamp(4.03rem, calc(3.36rem + 3.36vw), 5.96rem)",
  "6xl": "clamp(4.84rem, calc(3.93rem + 4.54vw), 7.45rem)",
} as const satisfies Record<string, string>;
