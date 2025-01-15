import { media, theme } from "@/styles/ThemeContract.css";
import { fluid } from "~/styles/utils";
import {
	assignVars,
	createThemeContract,
	globalStyle,
	style,
} from "@vanilla-extract/css";

/* =====================================
=               theme contract         =
===================================== */

export const vars = createThemeContract({
  space: {
    items: null,
    gap: null,
  },
});

export const responsiveTheme = style({
  vars: assignVars(vars, {
    space: {
      items: "4",
      gap: "1rem",
    },
  }),
  "@media": {
    "screen and (width > 1224px)": {
      vars: assignVars(vars, {
        space: {
          items: "5",
          gap: "1.16rem",
        },
      }),
    },
    "screen and (394px < width < 790px ) and (pointer: coarse)": {
      vars: assignVars(vars, {
        space: {
          items: "3",
          gap: "0.60rem",
        },
      }),
    },
    "screen and (width < 394px) and (pointer: coarse)": {
      vars: assignVars(vars, {
        space: {
          items: "2",
          gap: "0.40rem",
        },
      }),
    },
  },
});

export const varsColor = createThemeContract({
  colorCard: {
    title: null,
    description: null,
    backgroundColor: null,
    btnColor: null,
  },
});

export const ColorTheme = style({
	vars: assignVars(varsColor, {
		colorCard: {
			title: theme.color.azure,
			description: "#3B3561",
			backgroundColor: "#D1D1D1",
			btnColor: theme.color.green,
		},
	}),
	"@media": {
		[media.dark]: {
			vars: assignVars(varsColor, {
				colorCard: {
					title: "#F0EDEE",
					description: "oklch(80% 0.1285 106.94)",
					backgroundColor: "oklch(25.88% 0.0564 243.53)",
					btnColor: "#90DDF0",
				},
			}),
		},
	},
});

export const wrapperCard = style([
	{
		// display: "flex",

		// flexDirection: "column",
		display: "grid",
		gridColumn: "1fr",
		gridTemplateRows: "auto min-content 1fr 1fr",
		//width: "23px",
		rowGap: 5,
		maxInlineSize: `calc((100% - (${vars.space.items} - 1) * ${vars.space.gap}) / ${vars.space.items})`,

		minWidth: "200px",
		height: "220px",
		maxHeight: "330px",
		backgroundColor: varsColor.colorCard.backgroundColor,
		borderRadius: "10px",
		boxShadow:
			"0px 10px 12px rgba(0,0,0,0.08) , -4px -4px 12px rgba(0,0,0,0.08)",
		overflow: "hidden",
		transition: "all 0.3s",
		cursor: "progress",
		boxSizing: "border-box",
		padding: "10px",
		":hover": {
			transform: "translateY(-10px)",
			boxShadow:
				"0px 20px 20px rgba(0,0,0,0.1) , -4px -4px 12px rgba(0,0,0,0.08)",
		},
	},
	ColorTheme,
]);

export const price = style([
  {
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: "block",
    WebkitLineClamp: "1",
    lineClamp: "1",
    margin: "0",
    fontSize: "13px",
    fontFamily:
      "Lucida Sans , Lucida Sans Regular , Lucida Grande , Lucida Sans Unicode , Geneva , Verdana , sans-serif",
    color: varsColor.colorCard.description,
    cursor: "default",
    "::before": {
      content: "A partir de ",
    },
    "::after": {
      content: "€",
    },
  },
]);

export const Title = style({
  margin: "0",
  fontSize: "17px",
  fontFamily:
    "Lucida Sans , Lucida Sans Regular , Lucida Grande , Lucida Sans Unicode , Geneva , Verdana , sans-serif",
  fontWeight: "600",
  color: varsColor.colorCard.title,
  cursor: "default",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  display: "-webkit-box",
  WebkitLineClamp: "1",
  lineClamp: "1",
});


export const buttonBlue = style({
	fontFamily:
		"Lucida Sans , Lucida Sans Regular , Lucida Grande , Lucida Sans Unicode , Geneva , Verdana , sans-serif",
	color: varsColor.colorCard.title,
	cursor: "pointer",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	backgroundColor: varsColor.colorCard.btnColor,
	width: "25px",
	height: "25px",
	maxHeight: "35px",
	// borderRadius: "10px",
	overflow: "hidden",
	transition: "all ease-in-out 0.5s",
	gap: "1px",
	boxSizing: "border-box",

	marginTop: "8px",
	clipPath: "polygon(0 0, 0% 100%, 100% 45%)",
	":hover": {
		clipPath: "inset(0 0 0 0)",
		boxShadow: "0px 10px 20px rgba(0,0,0,0.06)",
		width: "100%",
		borderRadius: "8px",
		height: "30px",
		
		padding: "0",
	},
	selectors: {
		[`${wrapperCard}:hover &`]: {
			clipPath: "inset(0 0 0 0)",
			boxShadow: "0px 10px 20px rgba(0,0,0,0.06)",
			width: "100%",
			borderRadius: "8px",
			height: "30px",
			gap: "10px",
			padding: "0",
			color: "black",
		},
	},
});

export const buttonBlue_Text = style({
	opacity: "0",
	fontSize: "1px",
	fontWeight: "500",
	transition: "all ease-in-out 0.8s",
	selectors: {
		[`${wrapperCard}:hover  &`]: {
			opacity: "1",
			fontSize: "15px",
		},
		[`${buttonBlue}:hover &`]: {
			opacity: "1",
			fontSize: "15px",
		},
	},
});




/**
 * Description images
 *MARK: IMAGES
 * @type {*}
 */
export const imageHoverContract = createThemeContract({
	image: null,
	gif: null,
});
const ImageContainer = style([
	{
		width: "100%",
		borderRadius: "10px",
		overflow: "hidden",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		aspectRatio: "16 / 9",
	},
]);
export const hoverImg = style([
	ImageContainer,
	{
		backgroundImage: imageHoverContract.image,
		selectors: {
			[`${wrapperCard}:hover > &`]: {
				backgroundImage: imageHoverContract.gif,
			},
			[`${wrapperCard}:focus > &`]: {
				backgroundImage: imageHoverContract.gif,
			},
		},
	},
]);
