// for (const [property, value] of Object.entries(optimalFontSizePerTag)) {
//   globalStyle(property, {
//     fontSize: font.clamp(value, value * 1.3)
//   })
// }  MUST ADD TO GLOBALSTYLE FILE

/**
 * Represents a utility for generating responsive font sizes using CSS clamp() function.
 * This class calculates font sizes that scale smoothly between minimum and maximum screen sizes.
 */
class FontSizeGenerator {
  /** The minimum screen width in pixels for which the font size is calculated. */
  private minSizeScreen: number;

  /** The maximum screen width in pixels for which the font size is calculated. */
  private maxSizeScreen: number;

  /** The base font size of the root element in pixels. */
  private rootFontSize: number;

  /**
   * Creates an instance of FontSizeGenerator.
   * @param minSizeScreen - The minimum screen width in pixels.
   * @param maxSizeScreen - The maximum screen width in pixels.
   * @param rootFontSize - The base font size of the root element in pixels.
   */
  constructor(
    minSizeScreen: number,
    maxSizeScreen: number,
    rootFontSize: number,
  ) {
    if (minSizeScreen >= maxSizeScreen) {
      throw new Error("minSizeScreen must be less than maxSizeScreen");
    }
    this.minSizeScreen = minSizeScreen;
    this.maxSizeScreen = maxSizeScreen;
    this.rootFontSize = rootFontSize;
  }

  /**
   * Calculates a responsive font size using the CSS clamp() function.
   * @param minFontSize - The minimum font size in rem.
   * @param maxFontSize - The maximum font size in rem.
   * @returns A CSS clamp() function string representing the responsive font size.
   * @throws Will throw an error if minFontSize is greater than or equal to maxFontSize.
   *
   * @example
   * const generator = new FontSizeGenerator(380, 1600, 16);
   * const responsiveFontSize = generator.clamp(1, 2);
   * console.log(responsiveFontSize);
   * // Output: "clamp(1rem, 0.68864rem + 1.311vw, 2rem)"
   */
  clamp(minFontSize: number, maxFontSize: number): string {
    if (minFontSize >= maxFontSize) {
      throw new Error("minFontSize must be less than maxFontSize");
    }

    // Convert font sizes from rem to pixels
    const minFontSizePx = minFontSize * this.rootFontSize;
    const maxFontSizePx = maxFontSize * this.rootFontSize;

    // Calculate the slope of the linear interpolation
    const slope =
      (maxFontSizePx - minFontSizePx) /
      (this.maxSizeScreen - this.minSizeScreen);

    // Calculate the y-intercept of the linear interpolation
    const yIntercept = minFontSizePx - slope * this.minSizeScreen;

    // Calculate vw value (slope in viewport width units)
    const vwValue = (slope * 100).toFixed(3);

    // Calculate rem value (y-intercept in rem units)
    const remValue = (yIntercept / this.rootFontSize).toFixed(5);

    // Return the CSS clamp() function string
    return `clamp(${minFontSize}rem, ${remValue}rem + ${vwValue}vw, ${maxFontSize}rem)`;
  }
}

export default FontSizeGenerator;
