import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CustomTheme from "./CustomTheme";
import footerAdornment from "./Footer Adornment.svg";
import LogoInstagram from "./instagram.svg";
import LogoTwitter from "./twitter.svg";
import LogoFacebook from "./facebook.svg";

const StyledContainer = withStyles({
  root: {
    padding: 0,
    margin: 0
  }
})(Container);

const useStyles = makeStyles(theme => ({
  footer: {
    width: "100%",
    marginTop: "auto",
    left: 0,
    bottom: 0,
    backgroundColor: CustomTheme.palette.primary.main
  },
  mainContainer: {
    position: "absolute"
  },
  social: {
    width: "20%",
    height: "20%",
    marginLeft: "5%",
    marginRight: "5%",
    backfaceVisibility: "hidden"
  },
  socialContainer: {
    position: "absolute",
    width: "10%",
    right: 0,
    bottom: 0
  },
  gridContainer: {
    margin: "2.5%"
  },
  buttonStyle: {
    padding: 0
  },
  adornment: {
    left: 0,
    width: "60%",
    verticalAlign: "bottom",
    backfaceVisibility: "hidden"
  },
  footerLinks: {
    color: "white",
    fontFamily: "Arial",
    fontWeight: "bold",
    fontSize: "11px",
    textDecoration: "none"
  }
}));

export default function Footer() {
  const classes = useStyles();
  const verticalSpacing = 2;

  return (
    <footer className={classes.footer}>
      <StyledContainer className={classes.root} maxWidth="sm">
        <Grid
          container
          alignContent="center"
          justify="center"
          className={classes.mainContainer}
        >
          <Grid className={classes.gridContainer} item>
            <Grid container spacing={verticalSpacing} direction="column">
              <Grid
                item
                component={Link}
                to="/"
                className={classes.footerLinks}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.gridContainer} item>
            <Grid container spacing={verticalSpacing} direction="column">
              <Grid
                item
                component={Link}
                to="/services"
                className={classes.footerLinks}
              >
                Services
              </Grid>
              <Grid
                item
                component={Link}
                to="/customsoftware"
                className={classes.footerLinks}
              >
                Custom Software Development
              </Grid>
              <Grid
                item
                component={Link}
                to="/mobileapps"
                className={classes.footerLinks}
              >
                iOS/Android App Development
              </Grid>
              <Grid
                item
                component={Link}
                to="/websites"
                className={classes.footerLinks}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.gridContainer} item>
            <Grid container spacing={verticalSpacing} direction="column">
              <Grid
                item
                component={Link}
                to="/revolution"
                className={classes.footerLinks}
              >
                The Revolution
              </Grid>
              <Grid
                item
                component={Link}
                to="/revolution"
                className={classes.footerLinks}
              >
                Vision
              </Grid>
              <Grid
                item
                component={Link}
                to="/revolution"
                className={classes.footerLinks}
              >
                Technology
              </Grid>
              <Grid
                item
                component={Link}
                to="/revolution"
                className={classes.footerLinks}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.gridContainer} item>
            <Grid container spacing={verticalSpacing} direction="column">
              <Grid
                item
                component={Link}
                to="/about"
                className={classes.footerLinks}
              >
                About Us
              </Grid>
              <Grid
                item
                component={Link}
                to="/about"
                className={classes.footerLinks}
              >
                Mission Statement
              </Grid>
              <Grid
                item
                component={Link}
                to="/about"
                className={classes.footerLinks}
              >
                History
              </Grid>
              <Grid
                item
                component={Link}
                to="/about"
                className={classes.footerLinks}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.gridContainer} item>
            <Grid container spacing={verticalSpacing} direction="column">
              <Grid
                item
                component={Link}
                to="/contact"
                className={classes.footerLinks}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <img
          alt="black decorative slash"
          className={classes.adornment}
          src={footerAdornment}
        />
        <div className={classes.socialContainer}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/development_arc"
          >
            <img
              alt="Instagram Logo"
              className={classes.social}
              src={LogoInstagram}
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/development_arc"
          >
            <img
              alt="Twitter Logo"
              className={classes.social}
              src={LogoTwitter}
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com"
          >
            <img
              alt="Facebook Logo"
              className={classes.social}
              src={LogoFacebook}
            />
          </a>
        </div>
      </StyledContainer>
    </footer>
  );
}
