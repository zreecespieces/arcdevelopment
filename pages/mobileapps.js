import React from "react";
import Lottie from "react-lottie";
import Link from "../components/Link";
import Head from "next/head";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";
import styles from "../components/mobileapps/styles";

import backArrow from "../static/icons/backArrow.svg";
import forwardArrow from "../static/icons/forwardArrow.svg";
import knife from "../static/icons/swissKnife.svg";
import access from "../static/icons/extendAccess.svg";
import engagement from "../static/icons/increaseEngagement.svg";
import CallToAction from "../components/CallToAction";

import integrationAnimation from "../static/animations/integrationAnimation/data";

const useStyles = styles;

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
      <Head>
        <title>
          Custom Mobile App Development: iOS, Android, and tablets | Arc
          Development
        </title>
        <meta
          name="description"
          content="Arc Development uses cutting-edge technology to create cross-platform native mobile apps for iOS, Android, and tablets. Integrate with a web experience or use a standalone app to reinvent the way your business interacts with its customers. | Wichita, KS"
        />
        <link
          href="https://arcsoftwaredevelopment.com/mobileapps"
          rel="canonical"
          key="canonical"
        />
      </Head>
      <Grid item>
        <Grid container direction="row">
          <Hidden mdDown>
            <Grid className={classes.arrow} item>
              <Button component={Link} href="/customsoftware">
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
              <Button component={Link} href="/websites">
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
                          create apps for iOS, Android, and tablets — all at the
                          same time.
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
                        height={matchesMD ? 100 : matchesLG ? 125 : null}
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
