import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./ui/Header";
import Footer from "./ui/Footer";
import LandingPage from "./LandingPage";
import ContactPage from "./ContactPage";
import AboutUs from "./AboutUs";
import Services from "./Services";
import TheRevolution from "./TheRevolution";
import FreeEstimate from "./FreeEstimate";
import CustomSoftware from "./CustomSoftware";
import MobileApps from "./MobileApps";
import Websites from "./Websites";
import ScrollToTop from "./ui/ScrollToTop";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { active: 0 };
  }

  onRouteChange = index => {
    this.setState({ active: index });
  };

  render() {
    return (
      <div style={{ flex: 1, position: "relative" }} className="ui container">
        <BrowserRouter>
          <ScrollToTop>
            <Header
              activeTab={this.state.active}
              handleRoute={this.onRouteChange}
            />
            <Switch>
              <Route path="/" exact component={LandingPage} />
              <Route path="/contact" exact component={ContactPage} />
              <Route path="/about" exact component={AboutUs} />
              <Route path="/services" exact component={Services} />
              <Route path="/revolution" exact component={TheRevolution} />
              <Route path="/estimate" exact component={FreeEstimate} />
              <Route path="/customsoftware" exact component={CustomSoftware} />
              <Route path="/mobileapps" exact component={MobileApps} />
              <Route path="/websites" exact component={Websites} />
            </Switch>
            <Footer />
          </ScrollToTop>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
