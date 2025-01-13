import { assignVars, globalStyle } from "@vanilla-extract/css";
//import FontSizeGenerator from '../tokens/font/FontSizeGenerator'
//const font = new FontSizeGenerator(380, 2100, 16)
import { theme } from "../ThemeContract.css";
import tokens from "../tokens/index";
import { light, dark } from "../tokens/color/colors";

import "@/styles/tokens/font/index";

//import { optimalFontSizePerTag } from '~/styles/tokens/font/index'

globalStyle(":root , ::backdrop", {
  "@media": {
    screen: {
      vars: assignVars(theme, {
        fontSize: tokens.fontSizes,
        color: light,

        space: tokens.spaces,
      }),
    },
    "(prefers-color-scheme: dark)": {
      vars: assignVars(theme.color, {
        ...dark,
      }),
    },
  },
});

// for (const [property, value] of Object.entries(optimalFontSizePerTag)) {
//   globalStyle(property, {
//     fontSize: font.clamp(value, value * 1.3),
//   })
// }
globalStyle("h1", {
  fontSize: tokens.fontSizes.xl,
});
globalStyle("html, body *", {
  boxSizing: "border-box",
});

// globalStyle("img, svg", {
//   verticalAlign: "middle",
// });

// globalStyle("ul", {
//   listStyleType: "none",
// });
// globalStyle("body, body *", {
//   all: "unset",
// });

// Josh Comeau's CSS Reset
globalStyle("*", {
  boxSizing: "border-box",
  margin: 0,
  // border: '1px solid salmon',
});

globalStyle("html", {
  scrollBehavior: "smooth",
});

globalStyle("html, body", {
  height: "100%",
});

globalStyle("body", {
  lineHeight: 1.5,
  WebkitFontSmoothing: "antialiased",
});

globalStyle("img, picture, video, canvas, svg", {
  display: "block",
  maxWidth: "100%",
});

globalStyle("img", {
  objectFit: "cover",
});

globalStyle("input, button, textarea, select", {
  font: "inherit",
});

globalStyle("p, h1, h2, h3, h4, h5", {
  overflowWrap: "break-word",
});

globalStyle("#root", {
  isolation: "isolate",
});

// globalStyle('h1, h2, h3, h4, h5, h5', {
//   fontFamily: theme.fontFamily.Signathing
// })

globalStyle("a", {
  textDecoration: "none",
});

globalStyle("a:hover", {
  textDecoration: "underline",
});

export { theme };
