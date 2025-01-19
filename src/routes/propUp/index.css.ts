import {
	globalStyle,
	type GlobalStyleRule,
	style,
	styleVariants,
} from "@vanilla-extract/css";
import { globalStyleTag } from "~/styles/utils/globalStyleTag";

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

	gridRow: "1 / span 2",
	gridColumn: "1 / span 2",
	borderWidth: 10,
	borderColor: "red",
});

const palette = {
	primary: { bg: "blue", h: 650 },
	secondary: { bg: "green", h: 230 },
	ternary: { bg: "yellow", h: 100 },
}as const ;

export const variant = styleVariants(palette, ({ bg, h }) => [
	baseImage,
	{ background: bg, height: h },
]);
