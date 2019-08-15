import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CustomTheme from "../components/ui/CustomTheme";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";

import backArrow from "../assets/icons/backArrow.svg";
import forwardArrow from "../assets/icons/forwardArrow.svg";
import knife from "../assets/icons/swissKnife.svg";
import access from "../assets/icons/extendAccess.svg";
import engagement from "../assets/icons/increaseEngagement.svg";
import CallToAction from "./ui/CallToAction";

import integrationAnimation from "../assets/animations/integrationAnimation/data.json";

const useStyles = makeStyles(theme => ({
  title: {
    ...CustomTheme.typography.heroText,
    marginTop: "-1%"
  },
  heading: {
    ...CustomTheme.typography.main
  },
  paragraphMain: {
    ...CustomTheme.typography.secondary,
    fontSize: 20,
    maxWidth: "800px",
    [theme.breakpoints.down("md")]: {
      fontWeight: "normal",
      paddingLeft: "5%",
      paddingRight: "5%"
    }
  },
  paragraph: {
    ...CustomTheme.typography.secondary,
    fontSize: 20,
    maxWidth: "450px",
    [theme.breakpoints.down("md")]: {
      fontWeight: "normal"
    }
  },
  middleIcons: {
    marginTop: "15%",
    marginBottom: "10%"
  },
  middleIconMiddle: {
    marginLeft: "1%",
    marginRight: "1%",
    marginTop: "-10%",
    [theme.breakpoints.down("lg")]: {
      marginLeft: "-5%",
      marginRight: "-5%",
      marginTop: "-5%"
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "-20%",
      marginRight: "-20%",
      marginTop: "-5%",
      zIndex: 0
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "-5%",
      marginLeft: "20%",
      marginRight: "20%"
    }
  },
  bottomIcons: {
    marginBottom: "25%",
    marginTop: "-5%",
    [theme.breakpoints.down("lg")]: {
      marginTop: "15%"
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "0%"
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "50%"
    }
  },
  arrow: {
    marginRight: "2%"
  },
  extendAccess: {
    marginTop: "5%",
    [theme.breakpoints.down("lg")]: {
      marginTop: "2%"
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "20%"
    }
  },
  integrationContainer: {
    [theme.breakpoints.down("md")]: {
      maxWidth: "30%",
      zIndex: 1
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "25%",
      padding: "5%",
      maxWidth: "100%"
    }
  },
  platformContainer: {
    [theme.breakpoints.down("md")]: {
      marginBottom: "20%",
      maxWidth: "30%",
      zIndex: 1
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "40%",
      marginTop: "0%"
    },
    [theme.breakpoints.down("xs")]: {
      padding: "5%",
      marginBottom: "75%",
      maxWidth: "100%"
    }
  },
  extendContainer: {
    [theme.breakpoints.down("md")]: {
      marginLeft: "-5%",
      marginRight: "-5%"
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "100%",
      marginRight: "100%",
      marginTop: "40%",
      marginBottom: "40%"
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "50%",
      marginBottom: "50%"
    }
  },
  headingContainer: {
    [theme.breakpoints.down("md")]: {
      marginLeft: "auto",
      marginRight: "auto"
    }
  }
}));

export default function MobileApps() {
  const classes = useStyles();

  const theme = useTheme();
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <Grid container direction="column">
      <Grid item>
        <Grid container direction="row">
          <Hidden mdDown>
            <Grid className={classes.arrow} item>
              <Button component={Link} to="/customsoftware">
                <img alt="Back Arrow" src={backArrow} />
              </Button>
            </Grid>
          </Hidden>
          <Grid className={classes.headingContainer} item>
            <Grid container>
              <Grid item align={matchesMD ? "center" : null}>
                <Grid
                  container
                  justify={matchesMD ? "center" : null}
                  direction="column"
                >
                  <Grid item>
                    <div className={classes.title}>
                      iOS/Android App Development
                    </div>
                  </Grid>
                  <Grid item>
                    <p className={classes.paragraphMain}>
                      Mobile apps allow you to take your tools on the go.
                    </p>
                    <p className={classes.paragraphMain}>
                      Whether you want an app for your customers, employees, or
                      yourself, we can build cross-platform native solutions for
                      any part of your business process. This opens you up to a
                      whole new world of possibilities by taking advantage of
                      phone features like the camera, GPS, push notifications,
                      and more.
                    </p>
                    <p className={classes.paragraphMain}>
                      Convenience. Connection.
                    </p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid item>
              <Button component={Link} to="/websites">
                <img alt="Forward Arrow" src={forwardArrow} />
              </Button>
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
      <Grid className={classes.middleIcons} item>
        <Grid container direction="column">
          <Grid item>
            <Grid container justify="space-around" direction="row">
              <Grid className={classes.integrationContainer} item>
                <Grid align={matchesMD ? "center" : "left"} container>
                  <Grid item>
                    <Grid container direction="column">
                      <Grid item>
                        <div className={classes.heading}>Integration</div>
                      </Grid>
                      <Grid item>
                        <p className={classes.paragraph}>
                          Our technology enables an innate interconnection
                          between web and mobile applications, putting
                          everything you need right in one convenient place.
                        </p>
                        <p className={classes.paragraph}>
                          This allows you to extend your reach, reinvent
                          interactions, and develop a stronger relationship with
                          your users than ever before.
                        </p>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid className={classes.middleIconMiddle} item>
                <Lottie
                  options={defaultOptions}
                  height={
                    matchesSM ? 300 : matchesMD ? 400 : matchesLG ? 500 : 700
                  }
                  width={
                    matchesSM ? 200 : matchesMD ? 300 : matchesLG ? 250 : 400
                  }
                />
              </Grid>
              <Grid className={classes.platformContainer} item>
                <Grid container align={matchesMD ? "center" : "right"}>
                  <Grid item>
                    <Grid container direction="column">
                      <Grid item>
                        <div className={classes.heading}>
                          Simultaneous Platform Support
                        </div>
                      </Grid>
                      <Grid item>
                        <p className={classes.paragraph}>
                          Our cutting-edge development process allows us to
                          create apps for iPhone, Android, and tablets — all at
                          the same time.
                        </p>
                        <p className={classes.paragraph}>
                          This significantly reduces costs and creates a more
                          unified brand experience across all devices.
                        </p>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid className={classes.bottomIcons} item>
              <Grid
                container
                justify="space-around"
                align="center"
                direction="row"
              >
                <Grid item>
                  <Grid container spacing={3} direction="column">
                    <Grid item>
                      <div className={classes.heading}>
                        Extend Functionality
                      </div>
                    </Grid>
                    <Grid item>
                      <img alt="swiss army knife" src={knife} />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid className={classes.extendContainer} item>
                  <Grid container spacing={3} direction="column">
                    <Grid item>
                      <div className={classes.heading}>Extend Access</div>
                    </Grid>
                    <Grid item className={classes.extendAccess}>
                      <img
                        alt="tear one off sign"
                        src={access}
                        height={matchesMD ? 100 : matchesLG ? 300 : null}
                        width={matchesMD ? 325 : matchesLG ? 450 : null}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container spacing={3} direction="column">
                    <Grid item>
                      <div className={classes.heading}>Increase Engagement</div>
                    </Grid>
                    <Grid item>
                      <img alt="mobile app notification" src={engagement} />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction />
      </Grid>
    </Grid>
  );
}
