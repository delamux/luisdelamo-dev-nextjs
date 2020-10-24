import emotionStyled, { CreateStyled } from "@emotion/styled";
import { css, SerializedStyles } from "@emotion/core";

export const theme = {
  colors: {
    primary: "lightcoral",
    secondary: "purple",
  },
};

export const styled = emotionStyled as CreateStyled<typeof theme>;

const breakpoints = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 376,
  minWith: "min-width: 700px", // goes to the first condition
};

export const media = (Object.keys(
  breakpoints
) as (keyof typeof breakpoints)[]).reduce((acc, label) => {
  acc[label] =
    typeof breakpoints[label] === "string"
      ? (...args: [TemplateStringsArray]) =>
          css`
            @media (${breakpoints[label]}) {
              ${css(...args)};
            }
          `
      : (...args: [TemplateStringsArray]) =>
          css`
            @media (max-width: ${breakpoints[label]}px) {
              ${css(...args)};
            }
          `;

  return acc;
}, {} as { [key in keyof typeof breakpoints]: (...args: [TemplateStringsArray]) => SerializedStyles });
