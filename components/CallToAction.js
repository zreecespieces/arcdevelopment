import React from "react";
import Link from "./Link";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import Arrow from "./Arrow";
import background from "../static/pictures/background.jpg";
import mobileBackground from "../static/pictures/mobileBackground.jpg";

import ReactGA from "react-ga";
ReactGA.initialize("UA-145847500-1");

const useStyles = makeStyles(theme => ({
  estimateButton: {
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
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
    borderColor: theme.palette.primary.main,
    borderWidth: 2,
    textTransform: "none",
    color: theme.palette.primary.main,
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
      paddingTop: "15%",
      "@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape)": {
        paddingTop: "40%"
      }
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: "35%",
      paddingBottom: "35%"
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "45%",
      paddingBottom: "45%"
    }
  },
  title: {
    ...theme.typography.heroText,
    marginBottom: "2%"
  },
  subTitle: {
    ...theme.typography.secondary,
    fontWeight: "none",
    fontSize: "1.75em",
    color: "white"
  }
}));

export default function CallToAction() {
  const classes = useStyles();
  const theme = useTheme();

  const handleCallToActionEstimate = () => {
    ReactGA.event({
      category: "Estimate Button",
      action: `Estimate Button Call To Action Pressed`
    });
  };

  return (
    <Grid
      container
      alignItems="center"
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
              href="/revolution"
              className={classes.learnButton}
              variant="outlined"
            >
              <span style={{ marginRight: 5 }}>Learn More</span>
              <Arrow
                width={10}
                height={10}
                class={classes.arrow}
                fill={theme.palette.primary.main}
              />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          component={Link}
          href="/estimate"
          onClick={handleCallToActionEstimate}
          className={classes.estimateButton}
          variant="contained"
        >
          {"Free Estimate   "}
        </Button>
      </Grid>
    </Grid>
  );
}
