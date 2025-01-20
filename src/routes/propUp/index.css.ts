import {
	globalStyle,
	keyframes,
	style,
	styleVariants,
} from "@vanilla-extract/css";
import { flex } from "~/styles/utils/utils.css";

export const s = style({
	margin: 25,
	maxWidth: 650,
	backgroundColor: "orange",
	aspectRatio: "1",
	display: "grid",
	gridTemplateColumns: "1fr",
	gridTemplateRows: "1fr",
	alignItems: "end",
	//justifyItems: "end",
});

export const baseImage = style({
	width: 500,

	backgroundPosition: "bottom",
	backgroundSize: "cover",
	gridRow: "1 / span 2",
	gridColumn: "1 / span 2",
	borderWidth: 10,
	borderColor: "red",
});

const palette = {
	primary: { bg: "blue", h: 650 },
	secondary: { bg: "green", h: 10 },
	ternary: { bg: "yellow", h: 100 },
} as const;

export const variant = styleVariants(palette, ({ bg, h }) => [
	baseImage,
	{
		background: bg,
		backgroundImage: "url(@images/giphy.webp)",
		height: h,
	},
]);
const rideau = keyframes({
	"0%": { height: 100 },
	"100%": { height: 650 },
});
export const second = style([
	{
		backgroundImage: "url(@images/nasa-rTZW4f02zY8-unsplash.jpg)",
		backgroundColor: "green",
		height: 50,
		cursor: "pointer",
		":hover": {
			animationName: rideau,
			animationDuration: "3s",
		},
	},
	baseImage,
]);

export const r = style([flex("column", 2),{gap:20}]);
globalStyle(`${r} > div`, {
	"@layer": { base: { width: "60px", aspectRatio: 1, backgroundColor: "red" } },
});