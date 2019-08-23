import React from "react";
import Link from "./Link";
import { makeStyles, withStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import footerAdornment from "../static/icons/Footer Adornment.svg";
import LogoInstagram from "../static/icons/instagram.svg";
import LogoTwitter from "../static/icons/twitter.svg";
import LogoFacebook from "../static/icons/facebook.svg";

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
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      "@media (orientation: portrait)": {
        marginTop: "-0.125%"
      }
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "-0.125%"
    }
  },
  mainContainer: {
    position: "absolute"
  },
  social: {
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100%",
      marginLeft: "10%",
      marginRight: "10%"
    }
  },
  socialContainer: {
    position: "absolute",
    right: "25px",
    top: "125px",
    width: "225px"
  },
  socialContainerMobile: {
    position: "absolute",
    width: "150px",
    right: 25,
    marginTop: "-10%",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-15%"
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "-25%"
    }
  },
  gridContainer: {
    margin: "2%"
  },
  buttonStyle: {
    padding: 0
  },
  adornment: {
    left: 0,
    width: "60%",
    zIndex: 1,
    verticalAlign: "bottom",
    backfaceVisibility: "hidden"
  },
  footerLinks: {
    color: "white",
    fontFamily: "Arial",
    fontWeight: "bold",
    fontSize: "12px",
    zIndex: 2,
    textDecoration: "none",
    width: "200px",
    [theme.breakpoints.down("md")]: {
      width: "150px"
    }
  },
  decoration: {
    backgroundColor: "red",
    height: "100%",
    width: "100%"
  }
}));

export default function Footer() {
  const classes = useStyles();
  var verticalSpacing = 2;

  const theme = useTheme();
  const matchesMedium = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const mobileFooter = (
    <footer className={classes.footer}>
      <StyledContainer className={classes.root} maxWidth="sm">
        <img
          alt="black decorative slash"
          className={classes.adornment}
          src={footerAdornment}
        />
        <div className={classes.socialContainerMobile}>
          <Grid spacing={matchesMedium ? 1 : 2} container>
            <Grid xs item>
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
            </Grid>
            <Grid xs item>
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
            </Grid>
            <Grid xs item>
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
            </Grid>
          </Grid>
        </div>
      </StyledContainer>
    </footer>
  );

  const mainFooter = (
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
                href="/"
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
                href="/services"
                className={classes.footerLinks}
              >
                Services
              </Grid>
              <Grid
                item
                component={Link}
                href="/customsoftware"
                className={classes.footerLinks}
              >
                Custom Software Development
              </Grid>
              <Grid
                item
                component={Link}
                href="/mobileapps"
                className={classes.footerLinks}
              >
                iOS/Android App Development
              </Grid>
              <Grid
                item
                component={Link}
                href="/websites"
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
                href="/revolution"
                className={classes.footerLinks}
              >
                The Revolution
              </Grid>
              <Grid
                item
                component={Link}
                href="/revolution"
                className={classes.footerLinks}
              >
                Vision
              </Grid>
              <Grid
                item
                component={Link}
                href="/revolution"
                className={classes.footerLinks}
              >
                Technology
              </Grid>
              <Grid
                item
                component={Link}
                href="/revolution"
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
                href="/about"
                className={classes.footerLinks}
              >
                About Us
              </Grid>
              <Grid
                item
                component={Link}
                href="/about"
                className={classes.footerLinks}
              >
                Mission Statement
              </Grid>
              <Grid
                item
                component={Link}
                href="/about"
                className={classes.footerLinks}
              >
                History
              </Grid>
              <Grid
                item
                component={Link}
                href="/about"
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
                href="/contact"
                className={classes.footerLinks}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.socialContainer}>
            <Grid spacing={matchesMedium ? 1 : 2} container>
              <Grid xs item>
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
              </Grid>
              <Grid xs item>
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
              </Grid>
              <Grid xs item>
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
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <img
          alt="black decorative slash"
          className={classes.adornment}
          src={footerAdornment}
        />
      </StyledContainer>
    </footer>
  );

  return matchesSM ? mobileFooter : mainFooter;
}
