import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./ui/Header";
import LandingPage from "./LandingPage";
import ContactPage from "./ContactPage";
import AboutUs from "./AboutUs";
import Services from "./Services";
import TheRevolution from "./TheRevolution";
import FreeEstimate from "./FreeEstimate";
import CustomSoftware from "./CustomSoftware";
import MobileApps from "./MobileApps";
import Websites from "./Websites";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <div>
            <Header />
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
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
