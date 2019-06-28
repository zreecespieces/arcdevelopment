import React from "react";
import Typography from "@material-ui/core/Typography";
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
    height: "15%",
    position: "fixed",
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
    marginRight: "5%"
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
  adornment: {
    left: 0,
    width: "60%"
  },
  footerLinks: {
    color: "white",
    fontFamily: "Arial",
    fontWeight: "bold",
    fontSize: "10px"
  }
}));

export default function Footer() {
  const classes = useStyles();
  const verticalSpacing = 1;

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
              <Grid item component={Typography} className={classes.footerLinks}>
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.gridContainer} item>
            <Grid container spacing={verticalSpacing} direction="column">
              <Grid item component={Typography} className={classes.footerLinks}>
                Services
              </Grid>
              <Grid item component={Typography} className={classes.footerLinks}>
                Custom Software Development
              </Grid>
              <Grid item component={Typography} className={classes.footerLinks}>
                iOS/Android App Development
              </Grid>
              <Grid item component={Typography} className={classes.footerLinks}>
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.gridContainer} item>
            <Grid container spacing={verticalSpacing} direction="column">
              <Grid item component={Typography} className={classes.footerLinks}>
                The Revolution
              </Grid>
              <Grid item component={Typography} className={classes.footerLinks}>
                Vision
              </Grid>
              <Grid item component={Typography} className={classes.footerLinks}>
                Technology
              </Grid>
              <Grid item component={Typography} className={classes.footerLinks}>
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.gridContainer} item>
            <Grid container spacing={verticalSpacing} direction="column">
              <Grid item component={Typography} className={classes.footerLinks}>
                About Us
              </Grid>
              <Grid item component={Typography} className={classes.footerLinks}>
                Mission Statement
              </Grid>
              <Grid item component={Typography} className={classes.footerLinks}>
                History
              </Grid>
              <Grid item component={Typography} className={classes.footerLinks}>
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.gridContainer} item>
            <Grid container spacing={verticalSpacing} direction="column">
              <Grid item component={Typography} className={classes.footerLinks}>
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
          <img
            alt="Instagram Logo"
            className={classes.social}
            src={LogoInstagram}
          />

          <img
            alt="Twitter Logo"
            className={classes.social}
            src={LogoTwitter}
          />

          <img
            alt="Facebook Logo"
            className={classes.social}
            src={LogoFacebook}
          />
        </div>
      </StyledContainer>
    </footer>
  );
}
