import emotionStyled, { CreateStyled } from "@emotion/styled";
import { css, SerializedStyles } from "@emotion/core";

export const theme = {
  colors: {
    primary: {
      light: "#33dac1",
      main: "##00D1B2",
      dark: "#00927c",
      contrastText: "#fff",
    },
    secondary: {
      light: "#538091",
      main: "#286176",
      dark: "#1c4352",
      contrastText: "#000",
    },
    body: css`
      background-image: linear-gradient(
        to left top,
        #00d1b2,
        #48d8aa,
        #6bdfa2,
        #89e59c,
        #a4ea96,
        #a7e28b,
        #a9db81,
        #abd378,
        #96be65,
        #82aa51,
        #6e963f,
        #5b822c
      );
    `,
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
