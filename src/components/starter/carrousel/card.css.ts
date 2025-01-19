import * as T from "@theme";
import { fluid } from "@styles/utils/utils.css";
import {
	assignVars,
	createThemeContract,
	globalStyle,
	style,
} from "@vanilla-extract/css";
const ld = (light: string, dark: string) => `light-dark(${light},${dark})`;
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
	title: null,
	description: null,
	backgroundColor: null,
	btnBgColor: null,
	btnTextColor: null,
});

export const ColorTheme = style({
	vars: assignVars(varsColor, {
		title: T.color.azure,
		description: ld("#3B3561", "white"),
		backgroundColor: ld("#D1D1D1", "black"),
		btnBgColor: T.color.green,
		btnTextColor: "white",
	}),
	":hover": {
		vars: assignVars(varsColor, {
			title: ld("oklch(39.33% 0.188 263.65)", "oklch(25.29% 0.0595 155.65)"),
			description: ld(
				"oklch(19.33% 0.1473 261.53)",
				"oklch(19.33% 0.1473 261.53)",
			),
			backgroundColor: "oklch(83.23% 0.0564 243.53)",
			btnBgColor: ld(
				"oklch(39.33% 0.188 263.65)",
				"oklch(25.29% 0.0595 155.65)",
			),
			btnTextColor: "white",
		}),
	},
});

export const wrapperCard = style([
	{
		display: "grid",
		gridColumn: "1fr",
		gridTemplateRows: "auto min-content 1fr 1fr",
		//width: "23px",
		rowGap: 5,
		maxInlineSize: `calc((100% - (${vars.space.items} - 1) * ${vars.space.gap}) / ${vars.space.items})`,

		minWidth: "200px",
		height: "220px",
		maxHeight: "330px",
		backgroundColor: varsColor.backgroundColor,
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
		":active": {
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
		color: varsColor.description,
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
	fontFamily: T.fontFamily.libreFranklin,
	fontWeight: "600",
	color: varsColor.title,
	cursor: "default",
	WebkitBoxOrient: "vertical",
	overflow: "hidden",
	display: "-webkit-box",
	WebkitLineClamp: "1",
	lineClamp: "1",
});

export const buttonBlue = style({
	fontFamily: T.fontFamily.exo,
	color: varsColor.btnTextColor,
	cursor: "pointer",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	backgroundColor: varsColor.btnBgColor,
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
			color: varsColor.btnTextColor,
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
