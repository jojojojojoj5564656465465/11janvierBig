import { globalStyle, type GlobalStyleRule } from "@vanilla-extract/css";

type HTMLElements =
	| "p"
	| "h1"
	| "h2"
	| "h3"
	| "h4"
	| "h5"
	| "h6"
	| "li"
	| "ul"
	| "ol"
	| "span";


    /**
     * ! ajouter un layer en plus
     */
type HtmlP = Partial<Record<HTMLElements, GlobalStyleRule>>;
export const globalStyleTag = (parent: string, obj: HtmlP): void => {
	for (const [key, value] of Object.entries(obj)) {
		globalStyle(`${parent} ${key}`, value);
	}
};