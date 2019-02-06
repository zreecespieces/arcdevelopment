import React, { Component } from "react";
import logo from "../logo.png";

class App extends Component {
  render() {
    return (
      <img
        alt="company-logo"
        src={logo}
        style={{ width: "100%", height: "100%" }}
      />
    );
  }
}

export default App;
