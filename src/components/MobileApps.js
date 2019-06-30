import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CustomTheme from "../components/ui/CustomTheme";
import { makeStyles } from "@material-ui/core/styles";
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import knife from "../assets/swissKnife.svg";
import access from "../assets/extendAccess.svg";
import engagement from "../assets/increaseEngagement.svg";

const useStyles = makeStyles(theme => ({
  title: {
    ...CustomTheme.typography.heroText
  },
  heading: {
    ...CustomTheme.typography.main
  },
  paragraphMain: {
    ...CustomTheme.typography.secondary,
    fontSize: 20,
    maxWidth: "800px"
  },
  paragraph: {
    ...CustomTheme.typography.secondary,
    fontSize: 20,
    maxWidth: "450px"
  },
  middleIcons: {
    marginTop: "15%",
    marginBottom: "10%"
  },
  middleIconMiddle: {
    marginLeft: "1%",
    marginRight: "1%"
  },
  bottomIcons: {
    marginTop: "15%",
    marginBottom: "25%"
  },
  arrow: {
    marginTop: ".55%",
    marginRight: "2%"
  },
  arrowRight: {
    marginTop: ".55%",
    marginLeft: "45%"
  },
  mainContainer: {
    paddingLeft: "5%",
    paddingRight: "5%"
  },
  extendAccess: {
    marginTop: "5%"
  }
}));

export default function MobileApps() {
  const classes = useStyles();

  return (
    <Grid className={classes.mainContainer} container direction="column">
      <Grid item>
        <Grid container direction="row">
          <Grid className={classes.arrow} item>
            <Button component={Link} to="/customsoftware">
              <img alt="Back Arrow" src={backArrow} />
            </Button>
          </Grid>
          <Grid item>
            <Grid container>
              <Grid item className={classes.mainText}>
                <Grid container direction="column">
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
          <Grid className={classes.arrowRight} item>
            <Button component={Link} to="/websites">
              <img alt="Forward Arrow" src={forwardArrow} />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.middleIcons} item>
        <Grid container direction="column">
          <Grid item>
            <Grid container justify="space-around" direction="row">
              <Grid className={classes.middleIconLeft} item>
                <Grid container>
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
                <div>Phone Animation</div>
              </Grid>
              <Grid className={classes.middleIconRight} item>
                <Grid container align="right">
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
                <Grid className={classes.middleIconSpace} item>
                  <Grid container spacing={3} direction="column">
                    <Grid item>
                      <div className={classes.heading}>
                        Extend Functionality
                      </div>
                    </Grid>
                    <Grid item>
                      <img alt="Lightbulb Icon" src={knife} />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid className={classes.middleIconSpace} item>
                  <Grid container spacing={3} direction="column">
                    <Grid item>
                      <div className={classes.heading}>Extend Access</div>
                    </Grid>
                    <Grid item className={classes.extendAccess}>
                      <img alt="Stopwatch Icon" src={access} />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid className={classes.middleIconSpace} item>
                  <Grid container spacing={3} direction="column">
                    <Grid item>
                      <div className={classes.heading}>Increase Engagement</div>
                    </Grid>
                    <Grid item>
                      <img alt="Money Icon" src={engagement} />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
