import App from "next/app";
import "../styles/base.css";
import { ThemeProvider } from "emotion-theming";
import { theme } from "../theme";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}
