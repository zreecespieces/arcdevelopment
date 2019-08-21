import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";

import Header from "./ui/Header";
import Footer from "./ui/Footer";

class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = { active: 0 };
  }

  onRouteChange = index => {
    this.setState({ active: index });
  };

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>
            Bringing West Coast Technology to the Midwest: Custom Software
            Development | Arc Development
          </title>
          <meta
            name="description"
            content="Custom software built with cutting-edge technology. Complete design and development for websites, web applications, and cross-platform native mobile apps. Get a free online estimate! | Wichita, KS"
          />
          <link href="https://arcsoftwaredevelopment.com" rel="canonical" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Header
            activeTab={this.state.active}
            handleRoute={this.onRouteChange}
          />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;
