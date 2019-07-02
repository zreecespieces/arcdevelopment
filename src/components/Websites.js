import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CustomTheme from "../components/ui/CustomTheme";
import { makeStyles } from "@material-ui/core/styles";
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import analytics from "../assets/analytics.svg";
import ecommerce from "../assets/ecommerce.svg";
import outreach from "../assets/outreach.svg";
import seo from "../assets/seo.svg";
import CallToAction from "./ui/CallToAction";

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
    maxWidth: "700px"
  },
  paragraphAnalytics: {
    ...CustomTheme.typography.secondary,
    fontSize: 20,
    maxWidth: "450px",
    marginTop: "22%"
  },
  paragraphEcommerce: {
    ...CustomTheme.typography.secondary,
    fontSize: 20,
    maxWidth: "500px",
    marginTop: "22%",
    marginLeft: "10%"
  },
  paragraphSEOFirst: {
    ...CustomTheme.typography.secondary,
    fontSize: 20,
    maxWidth: "500px",
    marginTop: "10%",
    marginLeft: "10%"
  },
  paragraphSEO: {
    ...CustomTheme.typography.secondary,
    fontSize: 20,
    maxWidth: "500px",
    marginLeft: "10%"
  },
  paragraphOutreach: {
    ...CustomTheme.typography.secondary,
    fontSize: 20,
    maxWidth: "450px",
    marginTop: "15%",
    marginLeft: "10%"
  },
  arrow: {
    marginTop: ".4%",
    marginRight: "2%"
  },
  arrowRight: {
    marginTop: ".4%",
    marginLeft: "50%"
  },
  mainContainer: {},
  analytics: {
    marginLeft: "-13%"
  },
  analyticsContainer: {
    marginLeft: "5%",
    marginTop: "15%",
    marginBottom: "15%"
  },
  ecommerceContainer: {
    marginBottom: "15%",
    marginRight: "5%"
  },
  ecommerce: {
    marginLeft: "0%"
  },
  outreachContainer: {
    marginLeft: "5%",
    marginBottom: "15%"
  },
  seo: {
    marginLeft: "38%"
  }
}));

export default function Websites() {
  const classes = useStyles();

  return (
    <Grid className={classes.mainContainer} container direction="column">
      <Grid item>
        <Grid container direction="row">
          <Grid className={classes.arrow} item>
            <Button component={Link} to="/mobileapps">
              <img alt="Back Arrow" src={backArrow} />
            </Button>
          </Grid>
          <Grid item>
            <Grid container>
              <Grid item className={classes.mainText}>
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
          <Grid className={classes.arrowRight} item>
            <Button component={Link} to="/services">
              <img alt="Forward Arrow" src={forwardArrow} />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.analyticsContainer} item>
        <Grid container direction="row">
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
      <Grid className={classes.ecommerceContainer} item>
        <Grid container justify="flex-end" direction="row">
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
      <Grid className={classes.outreachContainer} item>
        <Grid container direction="row">
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <div className={classes.heading}>Outreach</div>
              </Grid>
              <Grid className={classes.outreach} item>
                <img alt="Megaphone with noise coming out" src={outreach} />
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
      <Grid className={classes.ecommerceContainer} item>
        <Grid container justify="flex-end" direction="row">
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
              How often have you ever been to the second page of Google results?
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
