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
/**
 * Applique des styles globaux à des éléments HTML donnés sous un parent spécifié.
 * @param parent - Le sélecteur parent pour les styles.
 * @param obj - Un objet de styles à appliquer aux éléments HTML.
 */
export const globalStyleTag = (parent: string, obj: HtmlP): void => {
	// biome-ignore lint/complexity/noForEach: <explanation>
	Object.entries(obj).forEach(([key, value]) => {
		if (value) {
			globalStyle(`${parent} ${key}`, {
				"@layer": {
					base: value,
				},
			});
		}
	});
};