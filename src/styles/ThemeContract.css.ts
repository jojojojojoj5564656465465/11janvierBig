import { createThemeContract, style } from "@vanilla-extract/css";

import tokens from "./tokens/index";
import { light } from "./tokens/color/colors";

export const theme = createThemeContract({
  fontSize: tokens.fontSizes,
  color: light,
  fontFamily: tokens.fontFamilies,
  size: tokens.sizes,
  space: tokens.spaces,
  radius: tokens.radii,
});

export const media = {
  mobile: {
    portrait: "screen and (orientation: portrait) and (max-width: 26.875em)",
    landscape: "screen and (orientation: landscape) and (max-height: 26.875em)",
  },
  tablet: {
    portrait:
      "screen and (orientation: portrait) and (27em <= width <= 52.02em)",
    landscape:
      "screen and (orientation: landscape) and (27em <= height <= 51em)",
  },
  md: "screen and (hover: hover) and (min-width: 51em)",
  lg: "screen and (min-width: 64em)",
  xl: "screen and (min-width: 80em)",
  "2xl": "screen and (min-width: 110em)",
  motionSafe: "screen and (prefers-reduced-motion: no-preference)",
  retina: "(-webkit-min-device-pixel-ratio: 2),(min-resolution: 192dpi)",
  dark: "screen and (prefers-color-scheme: dark)",
} as const;

type hoverProps = {
  backgroundColor: string;
  color?: string | "inherit";
};

export const hover = (props: hoverProps) => {
  return style({
    ":active": {
      backgroundColor: props.backgroundColor,
      color: "inherit",
    },
    ":focus": {
      outline: `4px solid ${props.backgroundColor}`,
      outlineOffset: "1px",
      color: "inherit",
    },
    "@media": {
      [media.md]: {
        ":hover": {
          backgroundColor: props.backgroundColor,
          color: props.color ?? "inherit",
        },
      },
    },
  });
};

export function flex(
  direction: "row" | "column",
  flexNumber: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
) {
  type PositionProps = Readonly<"start" | "center" | "end">;
  const positions = {
    1: ["start", "start"],
    2: ["center", "start"],
    3: ["end", "start"],
    4: ["start", "center"],
    5: ["center", "center"],
    6: ["end", "center"],
    7: ["start", "end"],
    8: ["center", "end"],
    9: ["end", "end"],
  } as const satisfies Record<
    typeof flexNumber,
    readonly [PositionProps, PositionProps]
  >;
  const [justify, align] = positions[flexNumber];
  return style({
    display: "block flex",
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
  });
}
