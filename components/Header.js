import React, { useState, useEffect } from "react";
import Link from "./Link";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Hidden from "@material-ui/core/Hidden";

import ArcLogo from "../static/pictures/Arc Header.svg";

import ReactGA from "react-ga";
ReactGA.initialize("UA-145847500-1");

const styles = theme => ({
  flex: {
    flex: 1
  },
  tabRoot: {
    minWidth: 10,
    marginLeft: "25px",
    textTransform: "none",
    fontWeight: "bold",
    fontSize: "17px",
    fontFamily: "Raleway"
  },
  tabGroup: {
    marginLeft: "auto"
  },
  drawer: {
    backgroundColor: theme.palette.primary.main
  },
  drawerIcon: {
    height: "50px",
    marginLeft: "50%",
    width: "50px"
  },
  drawerButtonContainer: {
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  drawerItem: {
    color: "white",
    fontWeight: "bold",
    fontFamily: "Roboto"
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
    padding: 0,
    justifyContent: "flex-start",
    flex: 1
  },
  arcLogo: {
    height: "8em",
    [theme.breakpoints.down("md")]: {
      marginLeft: "-1%",
      height: "7em"
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em"
    },
    backfaceVisibility: "hidden"
  },
  title: {
    flex: 1,
    textDecoration: "none"
  },
  buttonStyle: {
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    },
    borderRadius: "50px",
    fontFamily: "Pacifico",
    textTransform: "none",
    fontWeight: "10",
    fontSize: "15px",
    marginLeft: "50px",
    height: "45px"
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "5%",
    [theme.breakpoints.down("md")]: {
      marginBottom: "10%"
    }
  }
});

function Header(props) {
  useEffect(() => {
    if (window.location.pathname === "/" && props.activeTab !== 0) {
      ReactGA.pageview(window.location.pathname + window.location.search);
      props.handleRoute(0);
    } else if (
      window.location.pathname === "/services" ||
      window.location.pathname === "/customsoftware" ||
      window.location.pathname === "/mobileapps" ||
      window.location.pathname === "/websites"
    ) {
      if (props.activeTab !== 1) {
        ReactGA.pageview(window.location.pathname + window.location.search);
        props.handleRoute(1);
      }
    } else if (
      window.location.pathname === "/revolution" &&
      props.activeTab !== 2
    ) {
      ReactGA.pageview(window.location.pathname + window.location.search);
      props.handleRoute(2);
    } else if (window.location.pathname === "/about" && props.activeTab !== 3) {
      ReactGA.pageview(window.location.pathname + window.location.search);
      props.handleRoute(3);
    } else if (
      window.location.pathname === "/contact" &&
      props.activeTab !== 4
    ) {
      ReactGA.pageview(window.location.pathname + window.location.search);
      props.handleRoute(4);
    } else if (
      window.location.pathname === "/estimate" &&
      props.activeTab !== false
    ) {
      ReactGA.pageview(window.location.pathname + window.location.search);
      props.handleRoute(false);
    }
  }, [props]);

  const [open, setOpen] = useState(false);
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const handleHeaderEstimate = () => {
    props.handleRoute(null);
    ReactGA.event({
      category: "Estimate Button",
      action: `Estimate Button Header Pressed`
    });
  };

  const handleTabsEstimate = () => {
    setOpen(false);
    ReactGA.event({
      category: "Estimate Button",
      action: `Estimate Button Tabs Pressed`
    });
  };

  return (
    <React.Fragment>
      <AppBar className={props.classes.appBar}>
        <Toolbar className={props.classes.toolBar}>
          <Button
            component={Link}
            onClick={() => props.handleRoute(0)}
            href="/"
            disableRipple
            className={props.classes.imageContainer}
          >
            <img
              alt="Arc Logo"
              className={props.classes.arcLogo}
              src={ArcLogo}
            />
          </Button>
          <Hidden mdDown>
            <React.Fragment>
              <Tabs
                className={props.classes.tabGroup}
                indicatorColor="primary"
                value={props.activeTab}
              >
                <Tab
                  classes={{ root: props.classes.tabRoot }}
                  component={Link}
                  href="/"
                  label="Home"
                />
                <Tab
                  classes={{ root: props.classes.tabRoot }}
                  component={Link}
                  href="/services"
                  label="Services"
                />
                <Tab
                  classes={{ root: props.classes.tabRoot }}
                  component={Link}
                  href="/revolution"
                  label="The Revolution"
                />
                <Tab
                  classes={{ root: props.classes.tabRoot }}
                  component={Link}
                  href="/about"
                  label="About Us"
                />
                <Tab
                  classes={{ root: props.classes.tabRoot }}
                  component={Link}
                  href="/contact"
                  label="Contact Us"
                />
              </Tabs>
              <Button
                component={Link}
                href="/estimate"
                onClick={handleHeaderEstimate}
                className={props.classes.buttonStyle}
                variant="contained"
              >
                Free Estimate
              </Button>
            </React.Fragment>
          </Hidden>
          <Hidden lgUp implementation="css">
            <React.Fragment>
              <SwipeableDrawer
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                classes={{
                  paper: props.classes.drawer
                }}
              >
                <List>
                  <ListItem
                    button
                    divider
                    component={Link}
                    href="/"
                    onClick={() => setOpen(false)}
                  >
                    <ListItemText
                      disableTypography
                      className={props.classes.drawerItem}
                    >
                      Home
                    </ListItemText>
                  </ListItem>
                  <ListItem
                    button
                    divider
                    component={Link}
                    href="/services"
                    onClick={() => setOpen(false)}
                  >
                    <ListItemText
                      disableTypography
                      className={props.classes.drawerItem}
                    >
                      Services
                    </ListItemText>
                  </ListItem>
                  <ListItem
                    button
                    divider
                    component={Link}
                    href="/revolution"
                    onClick={() => setOpen(false)}
                  >
                    <ListItemText
                      disableTypography
                      className={props.classes.drawerItem}
                    >
                      The Revolution
                    </ListItemText>
                  </ListItem>
                  <ListItem
                    button
                    divider
                    component={Link}
                    href="/about"
                    onClick={() => setOpen(false)}
                  >
                    <ListItemText
                      disableTypography
                      className={props.classes.drawerItem}
                    >
                      About Us
                    </ListItemText>
                  </ListItem>
                  <ListItem
                    button
                    divider
                    component={Link}
                    href="/contact"
                    onClick={() => setOpen(false)}
                  >
                    <ListItemText
                      disableTypography
                      className={props.classes.drawerItem}
                    >
                      Contact Us
                    </ListItemText>
                  </ListItem>
                  <ListItem
                    button
                    divider
                    component={Link}
                    href="/estimate"
                    onClick={handleTabsEstimate}
                  >
                    <ListItemText
                      disableTypography
                      className={props.classes.drawerItem}
                    >
                      Free Estimate
                    </ListItemText>
                  </ListItem>
                </List>
              </SwipeableDrawer>
              <IconButton
                className={props.classes.drawerButtonContainer}
                disableRipple
                aria-label="Menu"
                onClick={() => setOpen(!open)}
              >
                <MenuIcon className={props.classes.drawerIcon} />
              </IconButton>
            </React.Fragment>
          </Hidden>
        </Toolbar>
      </AppBar>
      <div className={props.classes.toolbarMargin} />
    </React.Fragment>
  );
}

export default withStyles(styles)(Header);
