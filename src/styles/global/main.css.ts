import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { media, theme } from "../ThemeContract.css";
import { fluid } from "../utils";

const baseButton = style({
  borderRadius: theme.radius[200],
  //padding: `${fluid(10, 20)} ${fluid(15, 30)}`,
  fontSize: theme.fontSize.md,
  cursor: "pointer",
  maxInlineSize: "80%",
  minInlineSize: "15rem",
  marginInline: "auto",
  color: theme.color.white,

  "@media": {
    [media.md]: {
      // minInlineSize: '15vw',
      maxInlineSize: "50%",
      marginLeft: 20,
      paddingBlock: 10,
      marginTop: 20,
    },
  },

  marginInlineStart: fluid(20, 35),
});

export const button = styleVariants({
  green: [
    baseButton,
    {
      backgroundColor: theme.color.green,
      selectors: {
        "&:hover": {
          color: "black",
          backgroundColor: "pink",
        },
      },
      "@media": {
        [media.dark]: {
          selectors: {
            "&:hover": {
              backgroundColor: "yellow",
            },
          },
        },
      },
    },
  ],
  red: [
    baseButton,
    {
      backgroundColor: theme.color.red,

      selectors: {
        "&:hover": {
          backgroundColor: "oklch(70% 0.1 48.61)",
        },
      },
    },
  ],
});
export const containerSize = {
  default: "60rem",
  small: "60rem",
  medium: "72rem",
  large: "90rem",
  full: "100%",
};
const maxInlineSizeFn = (x: keyof typeof containerSize): string => {
  return `min(calc(100% - clamp(0.75rem, 0.42rem + 1.7vw, 1.7rem) * 2), ${containerSize[x]})`;
};

const defaultContainer = style({
  marginInline: "auto",
  position: "relative",
  boxSizing: "border-box",
  marginBlock: fluid(10, 40),
});

export const container = styleVariants({
  default: [defaultContainer],
  small: [
    defaultContainer,
    {
      maxInlineSize: maxInlineSizeFn("small"),
    },
  ],
  medium: [
    defaultContainer,
    {
      maxInlineSize: maxInlineSizeFn("medium"),
    },
  ],
  large: [
    defaultContainer,
    {
      maxInlineSize: maxInlineSizeFn("large"),
    },
  ],
  full: [defaultContainer, { maxInlineSize: "none" }],
});

globalStyle(`${container.default} > *`, {
  marginInline: "auto",
  maxInlineSize: maxInlineSizeFn("default"),
});
globalStyle(`${container.default} > ${container.medium}`, {
  maxInlineSize: maxInlineSizeFn("medium"),
});
globalStyle(`${container.default} > ${container.large}`, {
  maxInlineSize: maxInlineSizeFn("large"),
});
globalStyle(`${container.default} > ${container.full}`, {
  maxInlineSize: maxInlineSizeFn("full"),
});

export const baseBoule = style({
  transform: "initial",
  position: "absolute",
  content: '""',
  inlineSize: "1rem",
  aspectRatio: "1",
});
