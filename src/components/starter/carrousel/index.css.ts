import { container, theme, media, hover } from "@theme";

import {
	assignVars,
	createThemeContract,
	style,
	styleVariants,
	keyframes,
	globalStyle,
	fontFace,
} from "@vanilla-extract/css";

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

export const gridAreaCss = {
	text: style({ 
  marginBlockEnd: 30,
		gridArea: "1 / 1 / 2 / 4",
		textAlign: "center",
		marginBlockStart: 30,
		display: "grid",
		rowGap: 25,
		fontFamily: theme.fontsFamily.dancingScript,
	}),
	prevButton: style({
		gridArea: "2 / 1 / 3 / 2",
	}),
	carrousel: style({
		gridArea: "2 / 2 / 3 / 3",
	}),
	nextButton: style({
		gridArea: "2 / 3 / 3 / 4",
	}),
};

globalStyle(`${gridAreaCss.text} > h4 > span`, {
	color: theme.color.white,
	backgroundColor: theme.color.black,
	padding: "8px 32px",
	borderRadius: 10,
	clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
});
export const carrouselContainer = style([
	{
		overflowBlock: "hidden",
		display: "block flex",
		gap: vars.space.gap,
		flexWrap: "nowrap",
		padding: `calc(${vars.space.gap} * 0.5)`,
		backgroundColor: theme.color.azure,
		border: `1.5px solid ${theme.color.azure}`,
		overflowX: "auto",
		scrollSnapType: "x proximity",
		scrollSnapAlign: "center",
		scrollPaddingInline: 0,
		"@media": {
			[media.lg]: {
				//overflowX: 'hidden',
				scrollPaddingInline: `calc(${vars.space.gap} * 0.5)`,
				scrollSnapAlign: "start",
				padding: "1rem",
				marginBlockEnd: 60,
			},
		},
	},
	responsiveTheme,
	container.small,
	gridAreaCss.carrousel,
]);

/** MARK: BUTTON
 *
 */
const baseButton = style({
	all: "unset",
	marginBlock: "auto",
	display: ["flex", "grid"],
	placeItems: "center",
	alignContent: "center",
	color: theme.color.black,
	padding: "1rem",
	borderRadius: "1.5rem",
	fontSize: "1.5rem",
	fontFamily: theme.fontsFamily.dancingScript,
	"@media": {
		"only screen and (max-width: 1000px) and (pointer: coarse)": {
			display: "none",
		},
	},
});
const greenAnimation = keyframes({
	"0%": { boxShadow: "0 0.1px 0 0 green" },
	"50%": { boxShadow: "0 1.00px 0 0 oklch(77.06% 0.1723 159.88 / 88.47%)" },
	"70%": { boxShadow: "0 2.80px 0 0 oklch(77.06% 0.1723 159.88 / 38.47%)" },
	"100%": { boxShadow: "0 4.00px 0 0 oklch(77.06% 0.1723 159.88 / 20.47%)" },
});
export const button = styleVariants({
	available: [
		baseButton,
		hover({
			backgroundColor: "oklch(44.79% 0.1347 153.85 / 26.49%)",
			color: "oklch(56% 0.2322 324)",
		}),
		{
			cursor: "pointer",
			background: theme.color.green,
			color: theme.color.white,
			border: "2px solid green",
			":hover": {
				animationName: greenAnimation,
				animationDuration: "1s",
				animationTimingFunction: "ease",
			},
		},
	],
	disable: [
		baseButton,
		{
			background: "oklch(89.76% 0.0031 34 / 85.4%)",
			color: theme.color.red,
			cursor: "not-allowed",
			pointerEvents: "none",
			border: `1.5px solid ${theme.color.red}`,
			boxShadow: "0 1.51px 0 0 oklch(82.35% 0.1191 348.14 / 52.89%)",
		},
	],
});

export const sectionWrapperCardButtons = style([
	container.large,

	{
		isolation: "isolate",
		position: "relative",
		fontFamily: theme.fontsFamily.dancingScript,
		scrollbarWidth: "thin",
		scrollbarGutter: "stable",
		scrollbarColor: `${theme.color.azure} transparent`,
		backgroundColor: "oklch(70% 0.1 304 / 19.17%)",
		display: ["inline", "flex"],
		marginInline: "auto",
		"@supports": {
			"(display: grid)": {
				display: "grid",
				gridTemplateColumns: "max-content 1fr max-content",
				gridTemplateRows: "min-content 1fr",
				justifyContent: "center",
				alignContent: "center",
			},
		},
	},
]);

export const mainSectionRelative = style([
	container.large,
	{ position: "relative", isolation: "isolate" },
]);
export const spanAbsolutePriceHover = style({
	position: "absolute",
	maxInlineSize: 100,
	inlineSize: 65,
	backgroundColor: theme.color.black,
	color: theme.color.white,

	top: 15,
	right: 45,
	aspectRatio: "1",
	display: "grid",
	placeItems: "center",
	textAlign: "center",
	clipPath:
		"polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)",
	"@media": {
		[media.mobile.portrait]: {
			display: "none",
		},
	},
	"::before": {
		content: "À partir de",
		fontSize: 8,
	},
});