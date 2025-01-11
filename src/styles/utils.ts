import * as v from "valibot";

/**
 * 
 * @param x @deprecated
 * @returns 
 */
export function hoverfn(x: string) {
  return {
    "(hover: hover)": {
      selectors: {
        "&:hover": {
          backgroundColor: x,
        },
      },
    },
    "screen and (max-width: 940px)": {
      selectors: {
        "&:active": {
          backgroundColor: x,
        },
        "&:focus": {
          outline: `4px solid ${x}`,
          outlineOffset: "1px",
        },
      },
    },
  };
}



/**
 * @description Calculates a fluid value based px
 * @param {number} minSize use pixels
 * @param {number} maxSize  use pixels
 * @returns {string} Clamp value string (e.g. "clamp(10rem, 12rem + 12vw, 20rem)")
 * @version 1.0.2
 * @todo Implement this function.
 */
export const fluid = (minSize: number, maxSize: number) => {
  const numberConvertToRem = v.pipe(
    v.number(),
    v.maxValue(190),
    v.minValue(1),
    v.transform((e) => e / 16),
    v.description("convert to rem px"),
  );
  const fluid = v.pipe(
    v.object({
      minSize: numberConvertToRem,
      maxSize: numberConvertToRem,
    }),
    v.partialCheck(
      [["minSize"], ["maxSize"]],
      (input) => input.minSize < input.maxSize,
      "maxVwRem is less than minScreenW invert data",
    ),
    v.transform((obj) => {
      const slope = (obj.maxSize - obj.minSize) / (75 - 20);
      const yAxisIntersection = -20 * slope + obj.minSize;
      return `clamp(${obj.minSize}rem, ${yAxisIntersection}rem + ${slope * 100}vw, ${obj.maxSize}rem)`;
    }),
  );
  const parser = v.parser(fluid);
  return parser({ minSize, maxSize });
};
