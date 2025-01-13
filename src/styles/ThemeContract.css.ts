import { createThemeContract, globalStyle, style, styleVariants } from "@vanilla-extract/css";

import tokens from "./tokens/index";
import { light } from "./tokens/color/colors";
export * from "@/styles/tokens/font/fontFamilies.css";


export const theme = createThemeContract({
	fontSize: tokens.fontSizes,
	color: light,
	space: tokens.spaces,
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

/**
 * @description Hover function to handle all focus activate states
 *
 * @param {hoverProps} props
 * @returns {*}
 */
export const hover = ({ backgroundColor,color }: hoverProps) => {
	return style({
		":active": {
			backgroundColor,
			color: "inherit",
		},
		":focus": {
			outline: `4px solid ${backgroundColor}`,
			outlineOffset: "1px",
			color: "inherit",
		},
		"@media": {
			[media.md]: {
				":hover": {
					backgroundColor,
					color: color ?? "inherit",
				},
			},
		},
	});
};


/**
 * Description placeholder
 *
 * @export
 * @param {("row" | "column")} direction  row or column
 * @param {(1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9)} flexNumber 
 * @returns {*} 
 * MARK: FLEX
 */
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


/**
 * MARK: Container Rules
 */
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