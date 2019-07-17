import React from "react";
import App, { Container, NextAppContext } from "next/app";
import { Header } from "../components";
import { CustomThemeProvider } from "../components/theme";
import { LanguageProvider } from "../i18n";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }: NextAppContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <LanguageProvider>
          <CustomThemeProvider>
            <Header />
            <Component {...pageProps} />
          </CustomThemeProvider>
        </LanguageProvider>
      </Container>
    );
  }
}

export default MyApp;
