import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { withStyles, MuiThemeProvider } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import CustomTheme from "./CustomTheme";
import ArcLogo from "./Arc Header.svg";

const styles = theme => ({
  flex: {
    flex: 1
  },
  tabRoot: {
    minWidth: 10,
    marginLeft: "25px",
    textTransform: "none",
    fontWeight: "bold"
  },
  tabGroup: {
    marginLeft: "auto"
  },
  appBar: {
    flexGrow: 1
  },
  toolBar: {
    paddingLeft: 0
  },
  imageContainer: {
    "&:hover": {
      backgroundColor: "transparent"
    },
    padding: 0
  },
  arcLogo: { height: "100px" },
  title: {
    flex: 1,
    textDecoration: "none"
  },
  buttonStyle: {
    backgroundColor: CustomTheme.palette.secondary.main,
    color: "white",
    "&:hover": {
      backgroundColor: CustomTheme.palette.secondary.light
    },
    borderRadius: "50px",
    fontFamily: "Pacifico",
    textTransform: "none",
    fontWeight: "10",
    marginLeft: "50px"
  },
  toolbarMargin: theme.mixins.toolbar
});

function Header(props) {
  const [value, setValue] = useState(0);

  const onChange = (e, value) => {
    setValue(value);
  };

  useEffect(() => {
    if (window.location.pathname === "/") {
      setValue(0);
    } else if (window.location.pathname === "/services") {
      setValue(1);
    } else if (window.location.pathname === "/revolution") {
      setValue(2);
    } else if (window.location.pathname === "/about") {
      setValue(3);
    } else if (window.location.pathname === "/contact") {
      setValue(4);
    }
  }, []);

  return (
    <MuiThemeProvider theme={CustomTheme}>
      <AppBar className={props.classes.appBar}>
        <Toolbar className={props.classes.toolBar}>
          <Button
            component={Link}
            onClick={() => setValue(0)}
            to="/"
            disableRipple
            className={props.classes.imageContainer}
          >
            <img
              alt="Arc Logo"
              className={props.classes.arcLogo}
              src={ArcLogo}
            />
          </Button>
          <Tabs
            className={props.classes.tabGroup}
            indicatorColor="primary"
            value={value}
            onChange={onChange}
          >
            <Tab
              classes={{ root: props.classes.tabRoot }}
              component={Link}
              to="/"
              label="Home"
            />
            <Tab
              classes={{ root: props.classes.tabRoot }}
              component={Link}
              to="/services"
              label="Services"
            />
            <Tab
              classes={{ root: props.classes.tabRoot }}
              component={Link}
              to="/revolution"
              label="The Revolution"
            />
            <Tab
              classes={{ root: props.classes.tabRoot }}
              component={Link}
              to="/about"
              label="About Us"
            />
            <Tab
              classes={{ root: props.classes.tabRoot }}
              component={Link}
              to="/contact"
              label="Contact Us"
            />
          </Tabs>
          <Button
            component={Link}
            to="/estimate"
            onClick={() => setValue(9)}
            className={props.classes.buttonStyle}
            variant="contained"
          >
            Free Estimate
          </Button>
        </Toolbar>
      </AppBar>
      <div className={props.classes.toolbarMargin} />
    </MuiThemeProvider>
  );
}

export default withStyles(styles)(Header);
