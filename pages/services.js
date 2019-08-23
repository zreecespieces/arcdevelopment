import React from "react";
import Link from "../components/Link";
import Head from "next/head";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";
import styles from "../components/services/styles";

import customSoftwareIcon from "../static/icons/Custom Software Icon.svg";
import mobileAppsIcon from "../static/icons/mobileIcon.svg";
import websiteIcon from "../static/icons/websiteIcon.svg";

const useStyles = styles;

export default function Services() {
  const classes = useStyles();

  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const arrowSVG = (
    <svg
      className={classes.arrow}
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      fill={theme.palette.primary.main}
      viewBox="0 0 18 18"
    >
      <path d="M9 3L7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z" />
    </svg>
  );

  return (
    <Grid
      container
      direction="column"
      align={matchesMD ? "center" : null}
      //Needed for Moz support
      alignItems={matchesMD ? "center" : null}
    >
      <Head>
        <title>Services | Arc Development</title>
        <meta
          name="description"
          content="Arc Development offers Custom Software Development, iOS/Android App Development, and Website Development using the latest and greatest tools and techniques. | Wichita, KS"
        />
        <meta
          property="og:url"
          content="https://arcsoftwaredevelopment.com/services"
        />
        <link
          href="https://arcsoftwaredevelopment.com/services"
          rel="canonical"
          key="canonical"
        />
      </Head>
      <Hidden mdDown>
        <Grid className={classes.gridItemIos} item>
          <Grid container direction="row">
            <Grid sm={7} item>
              <div className={classes.headline}>
                iOS/Android App Development
              </div>
              <div className={classes.subtitle}>
                Extend Functionality. Extend Access. Increase Engagement.
              </div>
              <div className={classes.subtext}>
                Integrate your web experience or create a standalone app with
                either mobile platform.
              </div>
              <Button
                component={Link}
                href="/mobileapps"
                className={classes.learnButton}
                variant="outlined"
              >
                <span style={{ marginRight: 5 }}>Learn More</span>
                {arrowSVG}
              </Button>
            </Grid>
            <Grid sm={5} item>
              <img
                alt="Mobile Phones and Tablets Icon"
                className={classes.icon}
                src={mobileAppsIcon}
              />
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <Hidden lgUp>
        <Grid item>
          <Grid container direction="row" justify="flex-start">
            <Grid className={classes.gridItemSoftware} item>
              <Grid
                className={classes.subContainer}
                container
                direction={matchesSM ? "column" : "row"}
              >
                <Grid item>
                  <div className={classes.headline}>
                    Custom Software Development
                  </div>
                  <div className={classes.subtitle}>
                    Save Energy. Save Time. Save Money.
                  </div>
                  <div className={classes.subtext}>
                    Complete digital solutions, from investigation to{" "}
                    <span className={classes.specialText}>celebration.</span>
                  </div>
                  <Button
                    component={Link}
                    href="/customsoftware"
                    className={classes.learnButton}
                    variant="outlined"
                  >
                    <span style={{ marginRight: 5 }}>Learn More</span>
                    {arrowSVG}
                  </Button>
                </Grid>
                <Grid item>
                  <img
                    alt="Custom Software Icon"
                    className={classes.softwareIcon}
                    src={customSoftwareIcon}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <Hidden mdDown>
        <Grid item>
          <Grid container direction="row" justify="flex-start">
            <Grid className={classes.gridItemSoftware} item>
              <Grid className={classes.subContainer} container direction="row">
                <Grid item>
                  <div className={classes.headline}>
                    Custom Software Development
                  </div>
                  <div className={classes.subtitle}>
                    Save Energy. Save Time. Save Money.
                  </div>
                  <div className={classes.subtext}>
                    Complete digital solutions, from investigation to{" "}
                    <span className={classes.specialText}>celebration.</span>
                  </div>
                  <Button
                    component={Link}
                    href="/customsoftware"
                    className={classes.learnButton}
                    variant="outlined"
                  >
                    <span style={{ marginRight: 5 }}>Learn More</span>
                    {arrowSVG}
                  </Button>
                </Grid>
                <Grid item>
                  <img
                    alt="Custom Software Icon"
                    className={classes.softwareIcon}
                    src={customSoftwareIcon}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <Hidden lgUp>
        <Grid className={classes.gridItemIos} item>
          <Grid container direction={matchesSM ? "column" : "row"}>
            <Grid item>
              <div className={classes.headline}>
                iOS/Android App Development
              </div>
              <div className={classes.subtitle}>
                Extend Functionality. Extend Access.
                <br />
                Increase Engagement.
              </div>
              <div className={classes.subtext}>
                Integrate your web experience or
                <br />
                create a standalone app with either mobile platform.
              </div>
              <Button
                component={Link}
                href="/mobileapps"
                className={classes.learnButton}
                variant="outlined"
              >
                <span style={{ marginRight: 5 }}>Learn More</span>
                {arrowSVG}
              </Button>
            </Grid>
            <Grid item>
              <img
                alt="Mobile Phones and Tablets Icon"
                className={classes.icon}
                src={mobileAppsIcon}
              />
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <Grid className={classes.gridItem} item>
        <Grid container direction={matchesSM ? "column" : "row"}>
          <Grid className={classes.websiteContainer} lg={5} item>
            <div className={classes.headline}>Website Development</div>
            <div className={classes.subtitle}>
              Reach More. Discover More. Sell More.
            </div>
            <div className={classes.subtext}>
              Optimized for Search Engines, built for speed.
            </div>
            <Button
              component={Link}
              href="/websites"
              className={classes.learnButton}
              variant="outlined"
            >
              <span style={{ marginRight: 5 }}>Learn More</span>
              {arrowSVG}
            </Button>
          </Grid>
          <Grid lg={7} item>
            <img
              alt="Website Icon"
              className={classes.websiteIcon}
              src={websiteIcon}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
