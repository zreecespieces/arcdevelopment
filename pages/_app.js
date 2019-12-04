import React, { useState } from "react";
import App from "next/app";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../src/ui/Theme";

import Header from "../src/ui/Header";
import Footer from "../src/ui/Footer";

export default class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = { value: 0, selectedIndex: 0 };
  }

  setValue = index => {
    this.setState({ value: index });
  };

  setSelectedIndex = index => {
    this.setState({ selectedIndex: index });
  };

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <Header
            value={this.state.value}
            setValue={this.setValue}
            selectedIndex={this.state.selectedIndex}
            setSelectedIndex={this.setSelectedIndex}
          />
          <Component
            {...pageProps}
            setValue={this.setValue}
            setSelectedIndex={this.setSelectedIndex}
          />
          <Footer
            setValue={this.setValue}
            setSelectedIndex={this.setSelectedIndex}
          />
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
