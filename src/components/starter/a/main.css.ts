import { style } from "@vanilla-extract/css";

export default {
	a: style({
		backgroundColor: "red",
		color: "green",
		fontSize: "2rem",
		lineHeight: "3.2rem",
		"::selection": {
			backgroundColor: "pink",
			color: "black",
		},
	}),
};