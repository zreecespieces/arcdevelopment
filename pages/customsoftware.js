import React from "react";
import Lottie from "react-lottie";
import Link from "../src/Link";
import Head from "next/head";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import backArrow from "../static/icons/backArrow.svg";
import forwardArrow from "../static/icons/forwardArrow.svg";
import cash from "../static/icons/cash.svg";
import bulb from "../static/icons/bulb.svg";
import stopwatch from "../static/icons/stopwatch.svg";
import roots from "../static/icons/root.svg";
import CallToAction from "./ui/CallToAction";

import documentsAnimation from "../static/animations/documentsAnimation/data";
import automationAnimation from "../static/animations/automationAnimation/data";
import uxAnimation from "../static/animations/uxAnimation/data";
import scaleAnimation from "../static/animations/scaleAnimation/data";

const useStyles = makeStyles(theme => ({
  title: {
    ...theme.typography.heroText,
    marginTop: "-1%"
  },
  heading: {
    ...theme.typography.main,
    [theme.breakpoints.down("md")]: {
      marginLeft: "0%"
    }
  },
  paragraphMain: {
    ...theme.typography.secondary,
    fontSize: 20,
    maxWidth: "800px",
    [theme.breakpoints.down("md")]: {
      fontWeight: "normal",
      paddingLeft: "5%",
      paddingRight: "5%"
    }
  },
  paragraph: {
    ...theme.typography.secondary,
    fontSize: 20,
    maxWidth: "400px",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "5%",
      paddingRight: "5%",
      fontWeight: "normal"
    }
  },
  middleIcons: {
    marginTop: "15%",
    marginBottom: "20%",
    [theme.breakpoints.down("md")]: {
      marginTop: "-40%",
      marginBottom: "-60%"
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "-20%",
      marginBottom: "20%"
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "0%",
      marginBottom: "35%"
    }
  },
  middleIconSpace: {
    marginLeft: "-2.25%",
    marginRight: "-2.25%",
    [theme.breakpoints.down("md")]: {
      marginTop: "50%",
      marginBottom: "30%",
      "@media (orientation: landscape) and (max-device-width: 1024px)": {
        marginBottom: "-10%"
      }
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "35%",
      "@media (orientation: landscape) and (max-device-width: 1024px)": {
        marginBottom: "30%"
      }
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
      marginTop: "15%",
      marginBottom: "15%"
    }
  },
  arrow: {
    marginRight: "2%"
  },
  automationAnimation: {
    marginLeft: "-35%",
    [theme.breakpoints.down("lg")]: {
      marginTop: "2%"
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "0%",
      marginLeft: "-12%"
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "5%",
      marginLeft: "-25%"
    }
  },
  rootsImage: {
    height: "30em",
    width: "30em",
    marginBottom: "10%",
    marginTop: "50%",
    [theme.breakpoints.down("md")]: {
      marginTop: "0%"
    },
    [theme.breakpoints.down("xs")]: {
      height: "20em",
      width: "20em",
      marginTop: "50%"
    }
  },
  uxAnimation: {
    marginTop: "-38%",
    [theme.breakpoints.down("lg")]: {
      marginTop: "-30%"
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "0%",
      marginRight: "0%",
      marginBottom: "-35%"
    }
  },
  lastRow: {
    marginTop: "20%",
    marginBottom: "15%"
  },
  scaleAnimationContainer: {
    marginTop: "-5%",
    [theme.breakpoints.down("lg")]: {
      marginRight: "-15%",
      marginTop: "5%",
      marginLeft: "10%"
    },
    [theme.breakpoints.down("md")]: {
      marginRight: "0%",
      marginTop: "-10%",
      marginLeft: "0%"
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "-10%"
    }
  },
  documentsAnimationContainer: {
    [theme.breakpoints.down("lg")]: {
      marginTop: "10%"
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "-5%"
    }
  },
  uxTextContainer: {
    [theme.breakpoints.down("md")]: {
      marginLeft: "5%"
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0%",
      marginRight: "6%",
      maxWidth: "60%"
    },
    [theme.breakpoints.down("xs")]: {
      padding: "2%",
      maxWidth: "100%",
      marginBottom: "50%",
      marginRight: "0%"
    }
  },
  scaleContainer: {
    [theme.breakpoints.down("lg")]: {
      marginLeft: "-5%"
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: "30%",
      marginLeft: "auto",
      marginRight: "auto"
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "30%"
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "15%"
    }
  },
  documentsContainer: {
    [theme.breakpoints.down("md")]: {
      marginBottom: "30%",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "100%"
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "30%",
      marginTop: "0%"
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "0%",
      marginTop: "50%"
    }
  },
  automationContainer: {
    [theme.breakpoints.down("md")]: {
      marginBottom: "50%",
      marginTop: "30%"
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "50%",
      marginLeft: "-6%"
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "0%",
      marginLeft: "0%"
    }
  },
  uxContainer: {
    [theme.breakpoints.down("lg")]: {
      marginLeft: "-15%"
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: "30%",
      marginLeft: "auto",
      marginRight: "auto"
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "0%",
      marginTop: "10%"
    }
  },
  headingContainer: {
    [theme.breakpoints.down("md")]: {
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  automationText: {
    [theme.breakpoints.down("lg")]: {
      maxWidth: "75%"
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%"
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "75%"
    }
  },
  scaleText: {
    [theme.breakpoints.down("lg")]: {
      maxWidth: "55%",
      marginRight: "4%"
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%"
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: "5%"
    },
    [theme.breakpoints.down("xs")]: {
      marginRight: "0%"
    }
  },
  documentsText: {
    [theme.breakpoints.down("lg")]: {
      maxWidth: "90%",
      marginLeft: "9%"
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
      marginLeft: "0%"
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "5%"
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0%"
    }
  },
  rootsContainer: {
    [theme.breakpoints.down("md")]: {
      marginLeft: "5%"
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0%"
    }
  }
}));

export default function CustomSoftware() {
  const classes = useStyles();

  const theme = useTheme();
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const documentsOptions = {
    loop: true,
    autoplay: true,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const automationOptions = {
    loop: true,
    autoplay: true,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const uxOptions = {
    loop: true,
    autoplay: true,
    animationData: uxAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const scaleOptions = {
    loop: true,
    autoplay: true,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <Grid className={classes.mainContainer} container direction="column">
      <Head>
        <title>Custom Software Development | Arc Development</title>
        <meta
          name="description"
          content="Don't settle for generalized software solutions; custom software from Arc Development is designed from the ground up with your users and needs at the core, producing a finely tuned product which is much more effective at improving your workflow and reducing costs. | Wichita, KS"
        />
        <link
          href="https://www.arcsoftwaredevelopment.com/customsoftware"
          rel="canonical"
        />
      </Head>
      <Grid item>
        <Grid container direction="row">
          <Hidden mdDown>
            <Grid className={classes.arrow} item>
              <Button component={Link} href="/services">
                <img alt="Back Arrow" src={backArrow} />
              </Button>
            </Grid>
          </Hidden>
          <Grid className={classes.headingContainer} item>
            <Grid container>
              <Grid align={matchesMD ? "center" : null} item>
                <Grid container direction="column">
                  <Grid item>
                    <div className={classes.title}>
                      Custom Software Development
                    </div>
                  </Grid>
                  <Grid item>
                    <p className={classes.paragraphMain}>
                      Whether we’re replacing old software or inventing new
                      solutions, Arc Development is here to help your business
                      tackle technology.
                    </p>
                    <p className={classes.paragraphMain}>
                      Using regular commercial software leaves you with a lot of
                      stuff you don’t need, without some of the stuff you do
                      need, and ultimately controls the way you work. Without
                      using any software at all, you risk falling behind
                      competitors and missing out on huge savings from increased
                      efficiency.
                    </p>
                    <p className={classes.paragraphMain}>
                      Our custom solutions are designed from the ground up with
                      your needs, wants, and goals at the core. This
                      collaborative process produces finely tuned software that
                      is much more effective at improving your workflow and
                      reducing costs than generalized options.
                    </p>
                    <p className={classes.paragraphMain}>
                      We create exactly what you what, exactly how you want it.
                    </p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid item>
              <Button component={Link} href="/mobileapps">
                <img alt="Forward Arrow" src={forwardArrow} />
              </Button>
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
      <Grid className={classes.middleIcons} item>
        <Grid
          container
          justify="center"
          align="center"
          direction={matchesXS ? "column" : "row"}
        >
          <Grid className={classes.middleIconSpace} sm={12} md={4} item>
            <Grid container spacing={3} direction="column">
              <Grid item>
                <div className={classes.heading}>Save Energy</div>
              </Grid>
              <Grid item>
                <img alt="Lightbulb Icon" src={bulb} />
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.middleIconSpace} sm={12} md={4} item>
            <Grid container spacing={3} direction="column">
              <Grid item>
                <div className={classes.heading}>Save Time</div>
              </Grid>
              <Grid item>
                <img alt="Stopwatch Icon" src={stopwatch} />
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.middleIconSpace} sm={12} md={4} item>
            <Grid container spacing={3} direction="column">
              <Grid item>
                <div className={classes.heading}>Save Money</div>
              </Grid>
              <Grid item>
                <img alt="Money Icon" src={cash} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          justify={matchesMD ? null : "space-around"}
          direction="row"
        >
          <Grid className={classes.documentsContainer} item>
            <Grid justify={matchesXS ? "center" : null} container>
              <Grid align={matchesMD ? "center" : null} sm item>
                <Grid
                  className={classes.documentsText}
                  container
                  direction="column"
                >
                  <Grid item>
                    <div className={classes.heading}>
                      Digital Documents & Data
                    </div>
                  </Grid>
                  <Grid item>
                    <p className={classes.paragraph}>
                      Reduce Errors. Reduce Waste. Reduce Costs.
                    </p>
                    <p className={classes.paragraph}>
                      Billions are spent annually on the purchasing, printing,
                      and distribution of paper. On top of the massive
                      environmental impact this has, it causes harm to your
                      bottom line as well.
                    </p>
                    <p className={classes.paragraph}>
                      By utilizing digital forms and documents you can remove
                      these obsolete expenses, accelerate your communication,
                      and help the Earth.
                    </p>
                  </Grid>
                </Grid>
              </Grid>
              <Grid className={classes.documentsAnimationContainer} sm item>
                <Lottie
                  options={documentsOptions}
                  height={matchesLG ? 400 : 500}
                  width={matchesLG ? 250 : 300}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.scaleContainer} item>
            <Grid
              justify={matchesXS ? "center" : null}
              align={matchesMD ? "center" : "right"}
              container
            >
              <Grid className={classes.scaleAnimationContainer} sm item>
                <Lottie
                  options={scaleOptions}
                  height={matchesLG ? 400 : 500}
                  width={matchesLG ? 250 : 300}
                />
              </Grid>
              <Grid className={classes.scaleText} sm item>
                <Grid container direction="column">
                  <Grid item>
                    <div className={classes.heading}>Scale</div>
                  </Grid>
                  <Grid item>
                    <p className={classes.paragraph}>
                      Whether you're a large brand, just getting started, or
                      things are taking off right now, our application
                      architecture ensures pain-free growth and reliability.
                    </p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container justify="center" direction="row">
          <Grid className={classes.rootsContainer} item>
            <Grid container align="center" direction="column">
              <Grid className={classes.rootsImage} item>
                <img alt="tree with long roots" src={roots} />
              </Grid>
              <Grid item>
                <div className={classes.heading}>Root-Cause Analysis</div>
              </Grid>
              <Grid item>
                <p className={classes.paragraph}>
                  Many problems are merely symptoms of larger, underlying
                  issues.
                </p>
                <p className={classes.paragraph}>
                  We can help you thoroughly examine all areas of your business
                  to develop a holistic plan for the most effective
                  implementation of technology.
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.lastRow} item>
        <Grid container justify="space-around" direction="row">
          <Grid className={classes.automationContainer} item>
            <Grid justify={matchesXS ? "center" : null} container>
              <Grid align={matchesMD ? "center" : null} sm item>
                <Grid
                  container
                  className={classes.automationText}
                  direction="column"
                >
                  <Grid item>
                    <div className={classes.heading}>Automation</div>
                  </Grid>
                  <Grid item>
                    <p className={classes.paragraph}>
                      Why waste time when you don’t have to?
                    </p>
                    <p className={classes.paragraph}>
                      We can help you identify processes with time or event
                      based actions which can now easily be automated.
                    </p>
                    <p className={classes.paragraph}>
                      Increasing efficiency increases profits, leaving you more
                      time to focus on your business, not busywork.
                    </p>
                  </Grid>
                </Grid>
              </Grid>
              <Grid sm className={classes.automationAnimation} item>
                <Lottie
                  options={automationOptions}
                  height={matchesLG ? 275 : 350}
                  width={matchesLG ? 360 : 500}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.uxContainer} item>
            <Grid align="right" justify={matchesMD ? "center" : null} container>
              <Grid sm className={classes.uxAnimation} item>
                <Lottie
                  options={uxOptions}
                  height={matchesMD ? 800 : matchesLG ? 600 : 800}
                  width={matchesMD ? 200 : matchesLG ? 150 : 200}
                />
              </Grid>
              <Grid
                className={classes.uxTextContainer}
                align={matchesMD ? "center" : null}
                item
                sm
              >
                <Grid container direction="column">
                  <Grid item>
                    <div className={classes.heading}>
                      User Experience Design
                    </div>
                  </Grid>
                  <Grid item>
                    <p className={classes.paragraph}>
                      A good design that isn’t usable isn’t a good design.
                    </p>
                    <p className={classes.paragraph}>
                      So why are so many pieces of software complicated,
                      confusing, and frustrating?
                    </p>
                    <p className={classes.paragraph}>
                      By prioritizing users and the real ways they interact with
                      technology we’re able to develop unique, personable
                      experiences that solve problems rather than create new
                      ones.
                    </p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <CallToAction />
    </Grid>
  );
}
