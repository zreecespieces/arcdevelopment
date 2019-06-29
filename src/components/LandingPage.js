import React from "react";
import Lottie from "react-lottie";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CustomTheme from "./ui/CustomTheme";
import landingAnimation from "./animations/landinganimation/data.json";
import Grid from "@material-ui/core/Grid";

import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websiteIcon from "../assets/websiteIcon.svg";

const useStyles = makeStyles(theme => ({
  container: {
    width: "100%"
  },
  subContainer: {
    paddingLeft: "5%"
  },
  subContainerRight: {
    paddingRight: "5%"
  },
  landingAnimation: {
    marginTop: "2%",
    marginLeft: "8%"
  },
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
    fontSize: "15px",
    marginTop: "20%",
    height: "45px",
    width: "145px"
  },
  learnButtonHero: {
    borderColor: CustomTheme.palette.primary.main,
    borderWidth: 2,
    textTransform: "none",
    color: CustomTheme.palette.primary.main,
    borderRadius: "50px",
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "15px",
    marginTop: "20%",
    height: "45px"
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
  leftIcon: {
    backfaceVisibility: "hidden",
    marginLeft: "20%"
  },
  mobileIcon: {
    backfaceVisibility: "hidden"
  },
  heroText: {
    ...CustomTheme.typography.heroText
  },
  headline: {
    ...CustomTheme.typography.main
  },
  subtitle: {
    ...CustomTheme.typography.secondary,
    marginTop: "1%"
  },
  subtext: {
    ...CustomTheme.typography.secondary,
    marginTop: "6%"
  },
  specialText: {
    fontFamily: "Pacifico",
    fontWeight: 1,
    color: CustomTheme.palette.secondary.main
  }
}));

export default function LandingPage() {
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

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: landingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <Grid className={classes.container} container direction="column">
      <Grid item>
        <Grid alignItems="center" justify="flex-end" container direction="row">
          <Grid item>
            <div className={classes.heroText}>
              Bringing West Coast Technology
              <br />
              to the Midwest
            </div>
            <Grid alignItems="center" justify="center" spacing={5} container>
              <Grid item>
                <Button className={classes.estimateButton} variant="contained">
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button className={classes.learnButtonHero} variant="outlined">
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <svg
                    className={classes.arrow}
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill={CustomTheme.palette.primary.main}
                    viewBox="0 0 18 18"
                  >
                    <path d="M9 3L7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z" />
                  </svg>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.landingAnimation} item>
            <Lottie options={defaultOptions} height={600} width={815} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          className={classes.subContainer}
          container
          justify="flex-start"
          direction="row"
        >
          <Grid item>
            <div className={classes.headline}>Custom Software Development</div>
            <div className={classes.subtitle}>
              Save Energy. Save Time. Save Money.
            </div>
            <div className={classes.subtext}>
              Complete digital solutions, from investigation
              <br /> to{" "}
              <span className={classes.specialText}>celebration.</span>
            </div>
            <Button className={classes.learnButton} variant="outlined">
              <span style={{ marginRight: 5 }}>Learn More</span>
              {arrowSVG}
            </Button>
          </Grid>
          <Grid item>
            <img
              alt="Custom Software Icon"
              className={classes.leftIcon}
              src={customSoftwareIcon}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          className={classes.subContainerRight}
          container
          justify="flex-end"
          direction="row"
        >
          <Grid item>
            <div className={classes.headline}>iOS/Android App Development</div>
            <div className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement.
            </div>
            <div className={classes.subtext}>
              Integrate your web experience or create a standalone app
              <br />
              with either mobile platform.
            </div>
            <Button className={classes.learnButton} variant="outlined">
              <span style={{ marginRight: 5 }}>Learn More</span>
              {arrowSVG}
            </Button>
          </Grid>
          <Grid item>
            <img
              alt="Mobile Phones and Tablets Icon"
              className={classes.mobileIcon}
              src={mobileAppsIcon}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          className={classes.subContainer}
          container
          justify="flex-start"
          direction="row"
        >
          <Grid item>
            <div className={classes.headline}>Website Development</div>
            <div className={classes.subtitle}>
              Reach More. Discover More. Sell More.
            </div>
            <div className={classes.subtext}>
              Optimized for Search Engines
              <br />
              built for speed.
            </div>
            <Button className={classes.learnButton} variant="outlined">
              <span style={{ marginRight: 5 }}>Learn More</span>
              {arrowSVG}
            </Button>
          </Grid>
          <Grid item>
            <img
              alt="Website Icon"
              className={classes.leftIcon}
              src={websiteIcon}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
