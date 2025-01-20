import {
	assignVars,
	createThemeContract,
	style,
	styleVariants,
	keyframes,
	globalStyle,
	globalLayer,
	layer,
} from "@vanilla-extract/css";
import { fluid, hover, ld } from "@styles/utils/utils.css";
import * as T from "@theme";
import "./test.css";
import { wrapperCard } from "./card.css";

export const app = layer("app");





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
					gap: "1.2rem",
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




export const gridAreaCss = styleVariants({
	text: {
		marginBlock: fluid(20, 60),
		gridArea: "1 / 1 / 2 / 4",
		textAlign: "center",
		fontFamily: T.fontFamily.dancingScript,
		fontWeight: "normal",
	},
	prevButton: {
		gridArea: "2 / 1 / 3 / 2",
		clipPath:
			"polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%)",
		justifySelf: "end",
		alignSelf: "end",
		alignContent: "center",
	},
	carrousel: {
		gridArea: "2 / 2 / 3 / 3",
	},
	nextButton: {
		gridArea: "2 / 3 / 3 / 4",
		clipPath: "polygon(0% 20%,60% 20%,60%0%,100% 50%,60% 100%,60% 80%,0% 80%)",
		justifySelf: "start",
		alignSelf: "start",
	},
});

globalStyle(`${gridAreaCss.text} > h4 > span`, {
	color: T.color.white,
	backgroundColor: T.color.black,
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
		backgroundColor: T.color.azure,
		border: `1.5px solid ${T.color.azure}`,
		overflowX: "auto",
		scrollSnapType: "x proximity",
		scrollSnapAlign: "center",
		scrollPaddingInline: 0,
		"@media": {
			[T.media.lg]: {
				//overflowX: 'hidden',
				scrollPaddingInline: `calc(${vars.space.gap} * 0.5)`,
				scrollSnapAlign: "start",
				padding: "1rem",
				marginBlockEnd: 60,
			},
		},
	},
	responsiveTheme,
	T.container.small,
	gridAreaCss.carrousel,
]);

/** MARK: BUTTON
 *
 */
const baseButton = style({
	//all: "unset",
	marginBlock: "auto",
	minInlineSize: "25%",
	"@media": {
		"only screen and (max-width: 1000px) and (pointer: coarse)": {
			display: "none",
		},
	},
});


const increaseArrowAvailable = keyframes({
	"0%": { minInlineSize: "25%" },
	"50%": { minInlineSize: "35%" },
	"100%": { minInlineSize: "25%" },
});
export const button = styleVariants({
	available: [
		baseButton,
		{
			cursor: "pointer",
			background: T.color.green,
			backgroundColor:
				"linear-gradient(90deg, oklch(81.47% 0.0983 151.41) 0%, oklch(81.47% 0.1849 151.41) 100%)",


			border: "2px solid green",
			":hover": {
				animationName: increaseArrowAvailable,
				animationDuration: "0.7s",
				animationTimingFunction: "linear",
				animationIterationCount: 2,
				backgroundColor:
					"light-dark(oklch(81.47% 0.1849 151.41), oklch(80.88% 0.1159 190.68))",
				borderBlock: 95,
			},
			":active": {
				backgroundColor: "oklch(83.24% 0.0689 163.06)",
			},
		},
	],
	disable: [
		baseButton,
		{
			background: "oklch(89.76% 0.0031 34 / 85.4%)",
			cursor: "not-allowed",
			pointerEvents: "painted",
			border: `1.5px solid ${T.color.red}`,
			boxShadow: "0 1.51px 0 0 oklch(82.35% 0.1191 348.14 / 52.89%)",
		},
	],
});
const hideStar = keyframes({
	"0%": {
		maskImage: "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/sun.svg)",
		maskSize: "50px",
		maskPosition: "center",
		maskRepeat: "no-repeat",
	},
	"100%": { maskSize: "3500px", maskPosition: "center" },
});

export const sectionWrapperCardButtons = style([
	

	{
		animationName: hideStar,
		animationDuration: "4s",
		animationIterationCount: "1",
		animationTimeline: "view()",
		animationRange: "entry 0 cover 40%",
		isolation: "isolate",
		position: "relative",
		fontFamily: T.fontFamily.dancingScript,
		scrollbarWidth: "thin",
		scrollbarGutter: "stable",
		scrollbarColor: `${T.color.azure} transparent`,

		display: ["inline", "flex"],

		marginInline: "auto",
		flexDirection: "column",
		"@supports": {
			"(display: grid)": {
				display: "grid",
				gridTemplateColumns: "250px auto 250px",
				gridTemplateRows: "min-content 1fr",
				placeContent: "center",
				justifyItems: "center",
				"@media": {
					[T.media.mobile.portrait]: {
						gridTemplateColumns: "1fr",
						justifyContent: "stretch",
						paddingBlock: 30,
					},

					[T.media.mobile.landscape]: {
						gridTemplateColumns: "1fr",
					},
					[T.media.tablet.portrait]: {
						gridTemplateColumns: "1fr",
						justifyContent: "stretch",
						paddingBlock: 80,
					},
					[T.media.tablet.landscape]: {
						gridTemplateColumns: "150px auto 150px",
					},
				},
			},
		},
	},
]);

export const mainSectionRelative = style([
	T.container.large,
	{ position: "relative", isolation: "isolate" },
]);
export const spanAbsolutePriceHover = style({
	position: "absolute",
	maxInlineSize: 100,
	inlineSize: fluid(60, 105),

	background:
		"radial-gradient(circle,oklch(73.74% 0.1191 248.82) 0% ,oklch(52.37% 0.1191 248.82) 80%, oklch(21.81% 0.1191 248.82) 100%)",

	color: "white",
	fontSize: T.fontSize.md,
	fontFamily: T.fontFamily.exo,
	letterSpacing: "2.5px",
	fontWeight: "800",
	top: 15,
	right: fluid(5, 105),
	aspectRatio: "1",
	display: ["flex", "grid"],
	alignContent: "center",
	rowGap: fluid(5, 10),
	placeItems: "center",
	textAlign: "center",
	clipPath:
		"polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)",
	"@media": {
		[T.media.mobile.portrait]: {
			display: "none",
		},
		[T.media.mobile.landscape]: {
			display: "none",
		},
		[T.media.tablet.portrait]: {
			"::before": {
				content: "",
			},
		},
	},
	"::before": {
		content: "*À partir de",
		fontSize: T.fontSize.xs,
		fontStyle: "oblique",
		fontFamily: T.fontFamily.libreFranklin,
		fontWeight: 300,
		letterSpacing: "-0.5px",
	},
});
