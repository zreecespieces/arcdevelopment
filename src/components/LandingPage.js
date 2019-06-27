import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  toolbarMargin: theme.mixins.toolbar
});

function LandingPage(props) {
  return (
    <div className={props.classes.toolbarMargin}>You just landed here!</div>
  );
}

export default withStyles(styles)(LandingPage);
