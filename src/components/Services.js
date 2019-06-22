import React, { Component } from "react";
import { Link } from "react-router-dom";

class Services extends Component {
  render() {
    return (
      <div>
        <Link to="/customsoftware" className="item">
          Custom Software Development
        </Link>
        <Link to="/mobileapps" className="item">
          iOS/Android App Development
        </Link>
        <Link to="/websites" className="item">
          Website Development
        </Link>
      </div>
    );
  }
}

export default Services;
