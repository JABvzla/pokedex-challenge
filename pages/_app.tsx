import { AppProps } from "next/dist/next-server/lib/router/router";
import { ThemeProvider } from "styled-components";
import "../i18n";
import { LightTheme } from "../theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={LightTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
