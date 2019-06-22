import React, { useState, useEffect } from "react";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  tabRoot: {
    minWidth: 10
  },
  title: {
    flex: 1,
    textDecoration: "none"
  },
  buttonStyle: {
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
    <div className={props.classes.root}>
      <AppBar>
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            onClick={() => setValue(0)}
            color="inherit"
            className={props.classes.title}
          >
            Arc Development
          </Typography>
          <Tabs indicatorColor="primary" value={value} onChange={onChange}>
            <Tab
              value={0}
              classes={{ root: props.classes.tabRoot }}
              component={Link}
              to="/"
              label="Home"
            />
            <Tab
              value={1}
              classes={{ root: props.classes.tabRoot }}
              component={Link}
              to="/services"
              label="Services"
            />
            <Tab
              value={2}
              classes={{ root: props.classes.tabRoot }}
              component={Link}
              to="/revolution"
              label="The Revolution"
            />
            <Tab
              value={3}
              classes={{ root: props.classes.tabRoot }}
              component={Link}
              to="/about"
              label="About Us"
            />
            <Tab
              value={4}
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
    </div>
  );
}

export default withStyles(styles)(Header);
