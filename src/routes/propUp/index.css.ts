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
	":hover": {
		maxWidth: "100%",
	},

});

globalStyleTag(s, {
	h2: {
		color: "green",
		backgroundColor: "red",
	},
	h5: {
		color: "pink",
	},
	p: { backgroundColor: "orange", fontSize: "6rem" },
	h6: {
		backgroundColor: "white",
		fontSize: "4rem",
	},
});
