import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import CustomTheme from "./CustomTheme";

import background from "../../assets/background.jpg";
import mobileBackground from "../../assets/mobileBackground.svg";

const useStyles = makeStyles(theme => ({
  estimateButton: {
    backgroundColor: CustomTheme.palette.secondary.main,
    color: "white",
    "&:hover": {
      backgroundColor: CustomTheme.palette.secondary.light
    },
    borderRadius: "50px",
    fontFamily: "Pacifico",
    textTransform: "none",
    fontWeight: "10",
    fontSize: "25px",
    height: "80px",
    width: "205px",
    marginTop: "35%"
  },
  learnButton: {
    borderColor: CustomTheme.palette.primary.main,
    borderWidth: 2,
    textTransform: "none",
    color: CustomTheme.palette.primary.main,
    borderRadius: "50px",
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "11px",
    height: "35px",
    paddingTop: "5px",
    paddingBottom: "5px",
    paddingLeft: "7px",
    paddingRight: "7px",
    marginTop: "2%"
  },
  mainContainer: {
    height: "1000px",
    padding: "8%",
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: "initial",
      paddingTop: "40%"
    },
    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: "initial",
      marginBottom: "-1%",
      paddingTop: "50%"
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "0%"
    }
  },
  title: {
    ...CustomTheme.typography.heroText,
    marginBottom: "2%"
  },
  subTitle: {
    ...CustomTheme.typography.secondary,
    fontWeight: "none",
    color: "white"
  }
}));

export default function CallToAction() {
  const classes = useStyles();

  const arrowSVG = (
    <svg
      className={classes.arrow}
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      fill={CustomTheme.palette.primary.main}
      viewBox="0 0 18 18"
    >
      <path d="M9 3L7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z" />
    </svg>
  );

  return (
    <Grid
      container
      alignContent="center"
      justify="space-between"
      className={classes.mainContainer}
    >
      <Grid item>
        <Grid direction="column" container>
          <Grid className={classes.title} item>
            Simple Software.
            <br />
            Revolutionary Results.
          </Grid>
          <Grid className={classes.subTitle} item>
            Take advantage of the 21st Century.
          </Grid>
          <Grid item>
            <Button
              component={Link}
              to={
                window.location.pathname === "/revolution"
                  ? "/services"
                  : "/revolution"
              }
              className={classes.learnButton}
              variant="outlined"
            >
              <span style={{ marginRight: 5 }}>Learn More</span>
              {arrowSVG}
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          component={Link}
          to="/estimate"
          className={classes.estimateButton}
          variant="contained"
        >
          {"Free Estimate   "}
        </Button>
      </Grid>
    </Grid>
  );
}
