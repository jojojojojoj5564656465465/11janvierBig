type Theme = Record<"light" | "dark", string>;
type Colors = Record<string, Theme>;

export const colorsTheme = {
  azure: {
    light: "oklch(58.01% 0.18 259.96)",
    dark: "oklch(62.76% 0.18 259.96)",
  },
  red: {
    light: "oklch(58.9% 0.2037 13.339641794332277)",
    dark: "oklch(64.84% 0.2037 13.339641794332277)",
  },
  green: {
    light: "oklch(60% 0.1507 154.1)",
    dark: "oklch(68.4% 0.1507 154.1)",
  },
  black: {
    light: "oklch(19.28% 0.0452 243.97)",
    dark: "oklch(97.57% 0.0017 247.84)",
  },
  white: {
    light: "oklch(97.57% 0.0017 247.84)",
    dark: "oklch(19.28% 0.0452 243.97)",
  },
  background: {
    light: "oklch(93.62% 0.0132 168.35)",
    dark: "oklch(17.36% 0.0132 168.35)",
  },
} as const satisfies Colors;

/**
 * Extrait les couleurs claires et sombres du thème de couleur.
 *
 * @returns {Object} Un objet contenant deux propriétés :
 *   - `light`: Un objet avec les couleurs claires du thème, où chaque clé est le nom de la couleur et la valeur est la couleur elle-même.
 *   - `dark`: Un objet avec les couleurs sombres du thème, où chaque clé est le nom de la couleur et la valeur est la couleur elle-même.
 */
export function extractLightAndDark(): {
  light: Record<keyof typeof colorsTheme, string>;
  dark: Record<keyof typeof colorsTheme, string>;
} {
  const light: Record<string, string> = {};
  const dark: Record<string, string> = {};

  for (const [colorName, theme] of Object.entries(colorsTheme)) {
    light[colorName] = theme.light;
    dark[colorName] = theme.dark;
  }
  return { light, dark };
}
export const { light, dark } = extractLightAndDark();
