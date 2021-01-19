import { AppProps } from "next/dist/next-server/lib/router/router";
import { ThemeProvider } from "styled-components";
import "../styles/globals.css";
import { LightTheme } from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={LightTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
