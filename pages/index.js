import React from "react";
import ReactGA from "react-ga";
import Lottie from "react-lottie";
import Link from "../src/Link";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import CallToAction from "./ui/CallToAction";
import landingAnimation from "../static/animations/landinganimation/data";
import customSoftwareIcon from "../static/icons/Custom Software Icon.svg";
import mobileAppsIcon from "../static/icons/mobileIcon.svg";
import websiteIcon from "../static/icons/websiteIcon.svg";
import repeatingBackground from "../static/pictures/repeatingBackgroundLarge.svg";
import infoBackground from "../static/pictures/infoBackground.svg";

ReactGA.initialize("UA-145847500-1");

const useStyles = makeStyles(theme => ({
  container: {
    width: "100%"
  },
  subContainer: {
    paddingLeft: "5%",
    [theme.breakpoints.down("md")]: {
      padding: "0%"
    }
  },
  subContainerRight: {
    paddingRight: "5%",
    [theme.breakpoints.down("md")]: {
      padding: "0%"
    }
  },
  gridItem: {
    height: "400px",
    [theme.breakpoints.down("md")]: {
      height: "600px"
    }
  },
  gridItemIOS: {
    height: "400px",
    [theme.breakpoints.down("md")]: {
      height: "600px"
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "15%",
      marginTop: "10%"
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "30%",
      marginTop: "10%"
    }
  },
  landingAnimation: {
    marginLeft: "8%",
    maxWidth: "800px",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto"
    }
  },
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
    fontSize: "15px",
    marginTop: "20%",
    height: "45px",
    width: "145px"
  },
  learnButtonHero: {
    borderColor: theme.palette.primary.main,
    borderWidth: 2,
    textTransform: "none",
    color: theme.palette.primary.main,
    borderRadius: "50px",
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "15px",
    marginTop: "20%",
    height: "45px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "40%"
    }
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
  learnButtonRevolution: {
    borderColor: theme.palette.primary.main,
    borderWidth: 2,
    textTransform: "none",
    color: theme.palette.primary.main,
    borderRadius: "50px",
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "15px",
    height: "45px"
  },
  learnButtonInfo: {
    borderColor: "white",
    borderWidth: 2,
    textTransform: "none",
    color: "white",
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
  softwareIcon: {
    backfaceVisibility: "hidden",
    marginLeft: "20%",
    [theme.breakpoints.down("md")]: {
      marginLeft: "50px"
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "50px",
      marginLeft: "0px"
    }
  },
  websiteIcon: {
    backfaceVisibility: "hidden",
    marginLeft: "20%",
    [theme.breakpoints.down("md")]: {
      marginLeft: "50px"
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "50px",
      marginLeft: "0px"
    }
  },
  mobileIcon: {
    backfaceVisibility: "hidden",
    marginLeft: "15%",
    [theme.breakpoints.down("md")]: {
      marginLeft: "50px"
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "50px",
      marginLeft: "0px"
    }
  },
  heroText: {
    ...theme.typography.heroText,
    marginLeft: "20%",
    [theme.breakpoints.down("md")]: {
      marginLeft: "0%"
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "5%",
      marginRight: "5%",
      fontSize: "2.25em"
    }
  },
  heroContainer: {
    marginBottom: "15%",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "25%"
    }
  },
  headline: {
    ...theme.typography.main
  },
  subtitle: {
    ...theme.typography.secondary,
    marginTop: "1%",
    [theme.breakpoints.down("md")]: {
      fontFamily: "Roboto",
      fontWeight: "normal"
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "95%"
    }
  },
  subtext: {
    ...theme.typography.secondary,
    marginTop: "6%",
    [theme.breakpoints.down("md")]: {
      fontFamily: "Roboto",
      fontWeight: "normal"
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "95%"
    }
  },
  specialText: {
    fontFamily: "Pacifico",
    fontWeight: 1,
    color: theme.palette.secondary.main
  },
  repeatingContainer: {
    height: "1400px",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      marginTop: "40%"
    }
  },
  repeatingBackground: {
    backgroundImage: `url(${repeatingBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%"
  },
  revolutionCard: {
    maxWidth: "1000px",
    position: "absolute",
    borderRadius: "30px",
    boxShadow: theme.shadows[10],
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "7%",
    [theme.breakpoints.down("md")]: {
      padding: "15%",
      maxWidth: "100%",
      width: "150vw",
      borderRadius: 0
    }
  },
  revolutionTitle: {
    ...theme.typography.main,
    fontWeight: "none",
    fontFamily: "Pacifico",
    textAlign: "center",
    fontSize: 40,
    marginBottom: "5%",
    [theme.breakpoints.down("md")]: {
      lineHeight: "1.25em"
    }
  },
  revolutionSubtitle: {
    ...theme.typography.secondary,
    textAlign: "center",
    marginBottom: "2%",
    [theme.breakpoints.down("md")]: {
      fontWeight: "normal",
      marginTop: "5%",
      marginBottom: "5%"
    },
    [theme.breakpoints.down("sm")]: {
      fontWeight: "normal",
      marginTop: "10%",
      marginBottom: "20%"
    }
  },
  infoContainer: {
    height: "1400px",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      height: "1200px"
    },
    [theme.breakpoints.down("xs")]: {
      height: "1000px"
    }
  },
  infoSubcontainer: {
    position: "absolute",
    top: "50%",
    paddingLeft: "5%",
    paddingRight: "5%",
    [theme.breakpoints.down("sm")]: {
      top: "40%"
    }
  },
  infoTitle: {
    ...theme.typography.main,
    color: "white",
    fontSize: 40
  },
  infoSubtitle: {
    ...theme.typography.secondary,
    fontSize: 20,
    fontWeight: "none",
    color: "white",
    marginTop: "5%",
    marginBottom: "5%"
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%"
  },
  aboutContainer: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: "50%"
    }
  },
  softwareContainer: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%"
    }
  }
}));

export default function LandingPage() {
  const classes = useStyles();
  const theme = useTheme();

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

  const whiteArrow = (
    <svg
      className={classes.arrow}
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      fill="white"
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

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMedium = useMediaQuery(theme.breakpoints.down("md"));

  const handleHeroEstimate = () => {
    ReactGA.event({
      category: "Estimate Button",
      action: `Estimate Button Hero Pressed`
    });
  };

  return (
    <Grid className={classes.container} container direction="column">
      <Grid className={classes.heroContainer} item>
        <Grid
          alignItems="center"
          justify={matchesSmall ? "center" : "flex-end"}
          container
          direction="row"
        >
          <Grid sm align={matchesMedium ? "center" : null} item>
            <div className={classes.heroText}>
              Bringing West Coast Technology
              <br />
              to the Midwest
            </div>
            <Grid
              justify={matchesSmall ? "space-around" : "center"}
              spacing={matchesSmall ? 0 : 5}
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
                  <svg
                    className={classes.arrow}
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill={theme.palette.primary.main}
                    viewBox="0 0 18 18"
                  >
                    <path d="M9 3L7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z" />
                  </svg>
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
          align={matchesMedium ? "center" : null}
          direction="column"
        >
          <Grid className={classes.gridItem} item>
            <Grid
              className={classes.subContainer}
              container
              justify="flex-start"
              direction={matchesSmall ? "column" : "row"}
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
                  {arrowSVG}
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
              justify={matchesMedium ? "flex-start" : "flex-end"}
              direction={matchesSmall ? "column" : "row"}
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
          <Grid className={classes.gridItem} item>
            <Grid
              className={classes.subContainer}
              container
              justify="flex-start"
              direction={matchesSmall ? "column" : "row"}
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
                  {arrowSVG}
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
                  <svg
                    className={classes.arrow}
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill={theme.palette.primary.main}
                    viewBox="0 0 18 18"
                  >
                    <path d="M9 3L7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z" />
                  </svg>
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <div className={classes.repeatingBackground} />
      </Grid>
      <Grid className={classes.infoContainer} item>
        <Grid
          justify={matchesSmall ? "center" : "space-between"}
          direction="row"
          className={classes.infoSubcontainer}
          container
        >
          <Grid
            className={classes.aboutContainer}
            xs={matchesSmall ? true : false}
            item
          >
            <Grid direction="column" container>
              <Grid item>
                <div className={classes.infoTitle}>
                  About{matchesMedium ? <br /> : " "}Us
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
            xs={matchesSmall ? true : false}
            item
          >
            <Grid direction="column" align="right" container>
              <Grid item>
                <div className={classes.infoTitle}>
                  Contact{matchesMedium ? <br /> : " "}Us
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
