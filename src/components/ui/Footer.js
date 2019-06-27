import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CustomTheme from "./CustomTheme";
import footerAdornment from "./Footer Adornment.svg";

const StyledContainer = withStyles({
  root: {
    padding: 0,
    margin: 0
  }
})(Container);

const useStyles = makeStyles(theme => ({
  footer: {
    width: "100%",
    height: "15%",
    position: "fixed",
    marginTop: "auto",
    left: 0,
    bottom: 0,
    backgroundColor: CustomTheme.palette.primary.main
  },
  adornment: {
    left: 0
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <StyledContainer className={classes.root} maxWidth="sm">
        <img
          alt="black decorative slash"
          className={classes.adornment}
          src={footerAdornment}
        />
      </StyledContainer>
    </footer>
  );
}
