import { style } from "@vanilla-extract/css";

export default {
	grandParent: style({
		display: "grid",
    gridColumn:"1fr"
	}),
	p: style({
		color: "red",
		backgroundColor: "black",
	}),
	parent: style({
		backgroundColor: "green",
		display: "grid",
    gridTemplateColumns:'repeat(1fr)',
    gap:60,
		minWidth: "80%",
	}),
	child: style({
		display: "inline",
		backgroundColor: "orange",
		width: 150,
	}),
};
