import React from "react";
import ReactGA from "react-ga";
import Lottie from "react-lottie";
import Head from "next/head";
import Link from "../components/Link";

import { useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import styles from "../components/styles";

import Arrow from "../components/Arrow";
import CallToAction from "../components/CallToAction";
import landingAnimation from "../static/animations/landinganimation/data";
import customSoftwareIcon from "../static/icons/Custom Software Icon.svg";
import mobileAppsIcon from "../static/icons/mobileIcon.svg";
import websiteIcon from "../static/icons/websiteIcon.svg";

ReactGA.initialize("UA-145847500-1");

const useStyles = styles;

export default function LandingPage() {
  const classes = useStyles();
  const theme = useTheme();

  const blueArrow = (
    <Arrow
      class={classes.arrow}
      fill={theme.palette.primary.main}
      width={10}
      height={10}
    />
  );

  const whiteArrow = (
    <Arrow class={classes.arrow} fill="white" width={10} height={10} />
  );

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: landingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const handleHeroEstimate = () => {
    ReactGA.event({
      category: "Estimate Button",
      action: `Estimate Button Hero Pressed`
    });
  };

  return (
    <Grid className={classes.container} container direction="column">
      <Head>
        <title>
          Bringing West Coast Technology to the Midwest: Custom Software
          Development | Arc Development
        </title>
        <meta
          name="description"
          content="Custom software built with cutting-edge technology. Complete design and development for websites, web applications, and cross-platform native mobile apps. Get a free online estimate! | Wichita, KS"
        />
        <meta property="og:url" content="https://arcsoftwaredevelopment.com" />
        <link
          href="https://arcsoftwaredevelopment.com"
          rel="canonical"
          key="canonical"
        />
      </Head>
      <Grid className={classes.heroContainer} item>
        <Grid
          alignItems="center"
          justify={matchesSM ? "center" : "flex-end"}
          container
          direction="row"
        >
          <Grid sm align={matchesMD ? "center" : null} item>
            <div className={classes.heroText}>
              Bringing West Coast Technology
              <br />
              to the Midwest
            </div>
            <Grid
              justify={matchesSM ? "space-around" : "center"}
              spacing={matchesSM ? 0 : 5}
              container
            >
              <Grid item>
                <Button
                  component={Link}
                  href="/estimate"
                  onClick={handleHeroEstimate}
                  className={classes.estimateButton}
                  variant="contained"
                >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button
                  component={Link}
                  href="/revolution"
                  className={classes.learnButtonHero}
                  variant="outlined"
                >
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <Arrow
                    class={classes.arrow}
                    fill={theme.palette.primary.main}
                    width={15}
                    height={15}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm className={classes.landingAnimation} item>
            <Lottie
              options={defaultOptions}
              height={"100%"}
              width={matchesXS ? "25em" : "100%"}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          align={matchesMD ? "center" : null}
          //Needed for Moz support
          alignItems={matchesMD ? "center" : null}
          direction="column"
        >
          <Grid className={classes.gridItem} item>
            <Grid
              className={classes.subContainer}
              container
              justify="flex-start"
              direction={matchesSM ? "column" : "row"}
            >
              <Grid className={classes.softwareContainer} item>
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
                  {blueArrow}
                </Button>
              </Grid>
              <Grid item>
                <img
                  alt="three rectangles floating on top of eachother"
                  className={classes.softwareIcon}
                  src={customSoftwareIcon}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.gridItemIOS} item>
            <Grid
              className={classes.subContainerRight}
              container
              justify={matchesMD ? "flex-start" : "flex-end"}
              direction={matchesSM ? "column" : "row"}
            >
              <Grid item>
                <div className={classes.headline}>
                  iOS/Android App Development
                </div>
                <div className={classes.subtitle}>
                  Extend Functionality. Extend Access. Increase Engagement.
                </div>
                <div className={classes.subtext}>
                  Integrate your web experience or create a standalone app
                  <br />
                  with either mobile platform.
                </div>
                <Button
                  component={Link}
                  href="/mobileapps"
                  className={classes.learnButton}
                  variant="outlined"
                >
                  <span style={{ marginRight: 5 }}>Learn More</span>
                  {blueArrow}
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
          <Grid className={classes.gridItem} item>
            <Grid
              className={classes.subContainer}
              container
              justify="flex-start"
              direction={matchesSM ? "column" : "row"}
            >
              <Grid item>
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
                  {blueArrow}
                </Button>
              </Grid>
              <Grid item>
                <img
                  alt="Website Icon"
                  className={classes.websiteIcon}
                  src={websiteIcon}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.repeatingContainer} item>
        <Card className={classes.revolutionCard}>
          <CardContent style={{ alignContent: "center" }}>
            <Grid justify="center" container>
              <Grid item>
                <div className={classes.revolutionTitle}>The Revolution</div>
              </Grid>
              <Grid item>
                <div className={classes.revolutionSubtitle}>
                  Visionary insights coupled with cutting-edge technology is a
                  recipe for revolution.
                </div>
              </Grid>
              <Grid item>
                <Button
                  component={Link}
                  href="/revolution"
                  className={classes.learnButtonRevolution}
                  variant="outlined"
                >
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <Arrow
                    class={classes.arrow}
                    fill={theme.palette.primary.main}
                    width={15}
                    height={15}
                  />
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <div className={classes.repeatingBackground} />
      </Grid>
      <Grid className={classes.infoContainer} item>
        <Grid
          justify={matchesSM ? "center" : "space-between"}
          direction="row"
          className={classes.infoSubcontainer}
          container
        >
          <Grid
            className={classes.aboutContainer}
            xs={matchesSM ? true : null}
            item
          >
            <Grid direction="column" container>
              <Grid item>
                <div className={classes.infoTitle}>
                  About{matchesMD ? <br /> : " "}Us
                </div>
              </Grid>
              <Grid item>
                <div className={classes.infoSubtitle}>Let's get personal.</div>
              </Grid>
              <Grid item>
                <Button
                  component={Link}
                  href="/about"
                  className={classes.learnButtonInfo}
                  variant="outlined"
                >
                  <span style={{ marginRight: 5 }}>Learn More</span>
                  {whiteArrow}
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            className={classes.contactContainer}
            xs={matchesSM ? true : null}
            item
          >
            <Grid direction="column" align="right" container>
              <Grid item>
                <div className={classes.infoTitle}>
                  Contact{matchesMD ? <br /> : " "}Us
                </div>
              </Grid>
              <Grid item>
                <div className={classes.infoSubtitle}>
                  Say hello!{" "}
                  <span role="img" aria-label="Waving hand">
                    👋🏻
                  </span>
                </div>
              </Grid>
              <Grid item>
                <Button
                  component={Link}
                  href="/contact"
                  className={classes.learnButtonInfo}
                  variant="outlined"
                >
                  <span style={{ marginRight: 5 }}>Learn More</span>
                  {whiteArrow}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div className={classes.infoBackground} />
      </Grid>
      <Grid item>
        <CallToAction />
      </Grid>
    </Grid>
  );
}
