import React, { useState, useEffect, lazy, Suspense } from "react";
import ReactGA from "react-ga";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import animationData from "../../animations/landinganimation/data.json";
import Link from "../../ui/Link";
import ButtonArrow from "../../ui/ButtonArrow";

const Lottie = lazy(() => import("react-lottie"));

const useStyles = makeStyles(theme => ({
  buttonContainer: {
    marginTop: "1em"
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0
    }
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    }
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145
  },
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em"
    }
  },
  placeholder: {
    marginBottom: "10em",
    [theme.breakpoints.down("md")]: {
      marginBottom: 0
    }
  }
}));

export default function HeroBlock(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [hydrated, setHydrated] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const placeholder = (
    <img
      src="static/assets/landing-still.svg"
      alt="animation placeholder"
      className={classes.placeholder}
    />
  );

  useEffect(() => {
    const timer = () =>
      setTimeout(function() {
        setHydrated(true);
      }, 2500);

    const timerId = timer();

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <Grid item>
      {/*-----Hero Block-----*/}
      <Grid container justify="flex-end" alignItems="center" direction="row">
        <Grid sm item className={classes.heroTextContainer}>
          <Typography variant="h1" align="center">
            Bringing West Coast Technology
            <br />
            to the Midwest
          </Typography>
          <Grid container justify="center" className={classes.buttonContainer}>
            <Grid item>
              <Button
                component={Link}
                href="/estimate"
                className={classes.estimateButton}
                variant="contained"
                onClick={() => {
                  props.setValue(5);
                  ReactGA.event({
                    category: "Estimate",
                    action: "Landing Page Pressed"
                  });
                }}
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
                onClick={() => props.setValue(2)}
              >
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={15}
                  height={15}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid sm item className={classes.animation}>
          {hydrated ? (
            <Suspense fallback={placeholder}>
              <Lottie
                options={defaultOptions}
                height={"100%"}
                width={"100%"}
                eventListeners={[]}
              />
            </Suspense>
          ) : (
            placeholder
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
