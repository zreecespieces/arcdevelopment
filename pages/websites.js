import React from "react";
import Link from "../components/Link";
import Head from "next/head";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";
import styles from "../components/websites/styles";

import backArrow from "../static/icons/backArrow.svg";
import forwardArrow from "../static/icons/forwardArrow.svg";
import analytics from "../static/icons/analytics.svg";
import ecommerce from "../static/icons/ecommerce.svg";
import outreach from "../static/icons/outreach.svg";
import seo from "../static/icons/seo.svg";
import CallToAction from "../components/CallToAction";

const useStyles = styles;

export default function Websites() {
  const classes = useStyles();

  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid className={classes.mainContainer} container direction="column">
      <Head>
        <title>Custom Website Development | Arc Development</title>
        <meta
          name="description"
          content="Our completely custom-designed websites are built from the ground up to be lightning-fast, fully responsive, and Search Engine Optimized by using bleeding-edge technology and techniques from Silicon Valley. | Wichita, KS"
        />
        <meta
          property="og:url"
          content="https://arcsoftwaredevelopment.com/websites"
        />
        <link
          href="https://arcsoftwaredevelopment.com/websites"
          rel="canonical"
          key="canonical"
        />
      </Head>
      <Grid item>
        <Grid container direction="row">
          <Hidden mdDown>
            <Grid className={classes.arrow} item>
              <Button component={Link} href="/mobileapps">
                <img alt="Back Arrow" src={backArrow} />
              </Button>
            </Grid>
          </Hidden>
          <Grid className={classes.mainTextContainer} item>
            <Grid container>
              <Grid item align={matchesMD ? "center" : null}>
                <Grid container direction="column">
                  <Grid item>
                    <div className={classes.title}>Website Development</div>
                  </Grid>
                  <Grid item>
                    <p className={classes.paragraphMain}>
                      Having a website is a necessity in today’s business world.
                      They give you one central, public location to let people
                      know who you are, what you do, and why you’re the best at
                      it.
                    </p>
                    <p className={classes.paragraphMain}>
                      From simply having your hours posted to having a full
                      fledged online store, making yourself as accessible as
                      possible to users online drives growth and enables you to
                      reach new customers.
                    </p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid item>
              <Button component={Link} href="/services">
                <img alt="Forward Arrow" src={forwardArrow} />
              </Button>
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
      <Grid
        className={classes.analyticsContainer}
        align={matchesMD ? "center" : null}
        item
      >
        <Grid container justify={matchesMD ? "center" : null} direction="row">
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <div className={classes.heading}>Analytics</div>
              </Grid>
              <Grid className={classes.analytics} item>
                <img alt="Bar graph with magnifying glass" src={analytics} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <p className={classes.paragraphAnalytics}>
              Knowledge is power, and data is 21st Century gold. Analyzing this
              data can reveal hidden patterns and trends in your business,
              empowering you to make smarter decisions with measurable effects.
            </p>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        className={classes.ecommerceContainer}
        align={matchesMD ? "center" : null}
        item
      >
        <Grid
          container
          justify={matchesMD ? "center" : "flex-end"}
          direction="row"
        >
          <Grid item>
            <Grid container align="center" direction="column">
              <Grid item>
                <div className={classes.heading}>E-Commerce</div>
              </Grid>
              <Grid className={classes.ecommerce} item>
                <img alt="Globe outline made of dollar signs" src={ecommerce} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <p className={classes.paragraphEcommerce}>
              It’s no secret that people like to shop online.
              <br />
              <br />
              In 2017 over $2.3 trillion was spent in e-commerce, and it’s time
              for your slice of that pie.
            </p>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        className={classes.outreachContainer}
        align={matchesMD ? "center" : null}
        item
      >
        <Grid container justify={matchesMD ? "center" : null} direction="row">
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <div className={classes.heading}>Outreach</div>
              </Grid>
              <Grid item>
                <img
                  className={classes.outreach}
                  alt="Megaphone with noise coming out"
                  src={outreach}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <p className={classes.paragraphOutreach}>
              Draw people in with a dazzling website. Showing off your products
              online is a great way to help customers decide what’s right for
              them before visiting in person.
            </p>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        className={classes.seoContainer}
        align={matchesMD ? "center" : null}
        item
      >
        <Grid
          container
          justify={matchesMD ? "center" : "flex-end"}
          direction="row"
        >
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <div className={classes.heading}>
                  Search Engine Optimization
                </div>
              </Grid>
              <Grid className={classes.seo} item>
                <img
                  alt="Computer wearing gold medal standing on winner's podium"
                  src={seo}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <p className={classes.paragraphSEOFirst}>
              How often do you go to the second page of Google results?
            </p>
            <p className={classes.paragraphSEO}>
              If you’re like us, probably never.
            </p>
            <p className={classes.paragraphSEO}>
              Customers don’t go there either, so we make sure your website is
              designed to end up on top.
            </p>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction />
      </Grid>
    </Grid>
  );
}
