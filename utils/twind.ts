import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
export * from "twind";
import * as colors from "twind/colors";

const colorsFix = Object.keys(colors).reduce((allColors, colorKey) => {
  //@ts-ignore
  const val = colors[colorKey];
  if (typeof val === "string") {
    return {
      ...allColors,
      [colorKey]: val,
    };
  }
  const child = Object.keys(val).reduce(
    (allChildColor, childColorKey) => ({
      ...allChildColor,
      [`${colorKey}-${childColorKey}`]: val[childColorKey],
    }),
    {},
  );

  return {
    ...allColors,
    ...child,
  };
}, {});

export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
  theme: {
    extend: {
      colors: {
        ...colorsFix,
        "primary-dark": "#093746",
        "primary-light": "#e8dde0",
        accent: "#b7d26b",
      },
    },
  },
};
if (IS_BROWSER) setup(config);
