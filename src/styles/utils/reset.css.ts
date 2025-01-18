
import { globalStyle } from "@vanilla-extract/css";
import "./layers.css";

globalStyle("*, *::before, *::after", {
	"@layer": {
		reset: {
			boxSizing: "border-box",
			margin: 0,
		},
	},
});

globalStyle("*", {
	"@layer": {
		reset: {
			margin: 0,
			maxWidth: "100dvw",
			boxSizing: "border-box",

		},
	},
});

globalStyle("html, body", {
	"@layer": {
		reset: {
			blockSize: "100%",
			overflowInline: "hidden",
			boxSizing: "border-box",
			lineHeight: 1.5,
			WebkitFontSmoothing: "antialiased",
			scrollBehavior: "smooth",
		},
	},
});

globalStyle("img, svg", {
	"@layer": {
		reset: {
			verticalAlign: "middle",
		},
	},
});
globalStyle("input, button, textarea, select", {
	"@layer": {
		reset: {
			font: "inherit",
			all:"unset"
		},
	},
});
globalStyle("img, picture, video, canvas, svg", {
	"@layer": {
		reset: {
			scrollBehavior: "smooth",
			display: "block",
			maxInlineSize: "100%",
		},
	},
});
globalStyle(":root", {
	"@layer": {
		reset: {
			colorScheme: "light dark",
			isolation: "isolate",
		},
	},
});

globalStyle("html, body *", {
	"@layer": {
		reset: {
			boxSizing: "border-box",
		},
	},
});

globalStyle("ul", {
	"@layer": {
		reset: {
			listStyleType: "none",
		},
	},
});

globalStyle("img", {
	"@layer": {
		reset: {
			objectFit: "cover",
		},
	},
});

globalStyle("a", {
	"@layer": {
		reset: {
			textDecoration: "none",
		},
	},
});

globalStyle("a:hover", {
	"@layer": {
		reset: {
			textDecoration: "underline",
		},
	},
});

/**
 * Font size reset
 * MARK: FONTS
 * @type {Record<string, string>}
 */
const responsiveFontSize: Record<string, string> = {
	h1: "clamp(2.5rem, 5vw, 4rem)",
	h2: "clamp(2rem, 4vw, 3rem)",
	h3: "clamp(1.75rem, 3.5vw, 2.5rem)",
	h4: "clamp(1.5rem, 3vw, 2rem)",
	h5: "clamp(1.25rem, 2.5vw, 1.75rem)",
	h6: "clamp(1rem, 2vw, 1.5rem)",
	p: "clamp(1rem, 1.5vw, 1.25rem)",
};
for (const [key, value] of Object.entries(responsiveFontSize)) {
	globalStyle(key, {
		"@layer": {
			reset: {
				fontSize: value,
				overflowWrap: "break-word",
			},
		},
	});
}

globalStyle("h2", {
	"@layer": {
		framework: {
			backgroundColor: "greenyellow",
			color: "red",
			paddingInline:60
		},
	},
});
globalStyle("h2", {
	"@layer": {
		reset: {
			backgroundColor: "red",
			color: "yellowgreen",
		},
	},
});

