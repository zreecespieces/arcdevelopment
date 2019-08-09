import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  withStyles,
  MuiThemeProvider,
  useTheme
} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import CustomTheme from "./CustomTheme";
import ArcLogo from "./Arc Header.svg";
import mobileArcLogo from "./Arc Header.png";

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
  drawerIcon: {
    height: "50px",
    marginLeft: "50%",
    width: "50px"
  },
  drawerContainer: {
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  drawerItem: {
    ...CustomTheme.typography.secondary
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
    backgroundColor: CustomTheme.palette.secondary.main,
    color: "white",
    "&:hover": {
      backgroundColor: CustomTheme.palette.secondary.light
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
  useEffect(
    () => {
      if (window.location.pathname === "/" && props.activeTab !== 0) {
        props.handleRoute(0);
      } else if (
        window.location.pathname === "/services" ||
        window.location.pathname === "/customsoftware" ||
        window.location.pathname === "/mobileapps" ||
        window.location.pathname === "/websites"
      ) {
        if (props.activeTab !== 1) {
          props.handleRoute(1);
        }
      } else if (
        window.location.pathname === "/revolution" &&
        props.activeTab !== 2
      ) {
        props.handleRoute(2);
      } else if (
        window.location.pathname === "/about" &&
        props.activeTab !== 3
      ) {
        props.handleRoute(3);
      } else if (
        window.location.pathname === "/contact" &&
        props.activeTab !== 4
      ) {
        props.handleRoute(4);
      } else if (
        window.location.pathname === "/estimate" &&
        props.activeTab !== false
      ) {
        props.handleRoute(false);
      }
    },
    [props]
  );

  const theme = useTheme();
  console.log("Hello");
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);
  var drawer = null;

  var tabs = (
    <React.Fragment>
      <Tabs
        className={props.classes.tabGroup}
        indicatorColor="primary"
        value={props.activeTab}
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
        className={props.classes.buttonStyle}
        variant="contained"
      >
        Free Estimate
      </Button>
    </React.Fragment>
  );

  if (matches) {
    tabs = null;
    drawer = (
      <React.Fragment>
        <Drawer variant="temporary" open={open} onClose={() => setOpen(false)}>
          <List>
            <ListItem
              button
              component={Link}
              to="/"
              onClick={() => setOpen(false)}
            >
              <ListItemText className={props.classes.drawerItem}>
                Home
              </ListItemText>
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/services"
              onClick={() => setOpen(false)}
            >
              <ListItemText className={props.classes.drawerItem}>
                Services
              </ListItemText>
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/revolution"
              onClick={() => setOpen(false)}
            >
              <ListItemText className={props.classes.drawerItem}>
                The Revolution
              </ListItemText>
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/about"
              onClick={() => setOpen(false)}
            >
              <ListItemText className={props.classes.drawerItem}>
                About Us
              </ListItemText>
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/contact"
              onClick={() => setOpen(false)}
            >
              <ListItemText className={props.classes.drawerItem}>
                Contact Us
              </ListItemText>
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/estimate"
              onClick={() => setOpen(false)}
            >
              <ListItemText className={props.classes.drawerItem}>
                Free Estimate
              </ListItemText>
            </ListItem>
          </List>
        </Drawer>
        <IconButton
          className={props.classes.drawerContainer}
          disableRipple
          onClick={() => setOpen(!open)}
        >
          <MenuIcon className={props.classes.drawerIcon} />
        </IconButton>
      </React.Fragment>
    );
  }

  return (
    <MuiThemeProvider theme={CustomTheme}>
      <AppBar className={props.classes.appBar}>
        <Toolbar className={props.classes.toolBar}>
          <Button
            component={Link}
            onClick={() => props.handleRoute(0)}
            to="/"
            disableRipple
            className={props.classes.imageContainer}
          >
            <img
              alt="Arc Logo"
              className={props.classes.arcLogo}
              src={matches ? mobileArcLogo : ArcLogo}
            />
          </Button>
          {matches ? drawer : tabs}
        </Toolbar>
      </AppBar>
      <div className={props.classes.toolbarMargin} />
    </MuiThemeProvider>
  );
}

export default withStyles(styles)(Header);
