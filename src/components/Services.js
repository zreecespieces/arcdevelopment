import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CustomTheme from "../components/ui/CustomTheme";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websiteIcon from "../assets/websiteIcon.svg";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles(theme => ({
  gridItem: {
    height: "400px",
    marginLeft: "50%",
    [theme.breakpoints.down("md")]: {
      marginLeft: "30%"
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "5%"
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "50%",
      marginBottom: "100%",
      marginLeft: "10%"
    }
  },
  gridItemSoftware: {
    height: "400px",
    marginLeft: "5%",
    marginTop: "2%",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "50%",
      marginLeft: "10%"
    }
  },
  gridItemIos: {
    height: "400px",
    marginLeft: "50%",
    [theme.breakpoints.down("md")]: {
      marginLeft: "30%",
      marginTop: "0%"
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "5%"
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "10%",
      marginTop: "10%",
      marginBottom: "70%"
    }
  },
  learnButton: {
    borderColor: CustomTheme.palette.primary.main,
    borderWidth: 2,
    textTransform: "none",
    color: CustomTheme.palette.primary.main,
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
  icon: {
    backfaceVisibility: "hidden",
    marginLeft: "10%",
    maxWidth: "85%",
    [theme.breakpoints.down("md")]: {
      marginLeft: "10%",
      marginTop: "5%"
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      height: "80%"
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "100%",
      marginLeft: "20%"
    }
  },
  softwareIcon: {
    backfaceVisibility: "hidden",
    marginLeft: "50%",
    [theme.breakpoints.down("md")]: {
      marginTop: "10%",
      marginLeft: "5%"
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "65%",
      marginTop: "-35%"
    }
  },
  websiteIcon: {
    backfaceVisibility: "hidden",
    marginLeft: "5%",
    marginTop: "2%",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "12%",
      marginTop: "10%"
    }
  },
  headline: {
    ...CustomTheme.typography.main
  },
  subtitle: {
    ...CustomTheme.typography.secondary,
    marginTop: "1%",
    [theme.breakpoints.down("md")]: {
      fontWeight: "normal"
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "95%"
    }
  },
  subtext: {
    ...CustomTheme.typography.secondary,
    marginTop: "6%",
    [theme.breakpoints.down("md")]: {
      fontWeight: "normal"
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "95%"
    }
  },
  specialText: {
    fontFamily: "Pacifico",
    fontWeight: 1,
    color: CustomTheme.palette.secondary.main
  },
  iosTextContainer: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "50%"
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%"
    }
  },
  websiteContainer: {
    [theme.breakpoints.down("xs")]: {
      maxWidth: "95%",
      marginLeft: "0%"
    }
  }
}));

export default function Services() {
  const classes = useStyles();

  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const arrowSVG = (
    <svg
      className={classes.arrow}
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      fill={CustomTheme.palette.primary.main}
      viewBox="0 0 18 18"
    >
      <path d="M9 3L7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z" />
    </svg>
  );

  return (
    <Grid container direction="column">
      <Grid className={classes.gridItemIos} item>
        <Grid container direction="row">
          <Grid
            className={classes.iosTextContainer}
            sm={matchesMD ? 6 : matchesSmall ? 8 : 7}
            item
          >
            <div className={classes.headline}>iOS/Android App Development</div>
            <div className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement.
            </div>
            <div className={classes.subtext}>
              Integrate your web experience or create a standalone app with
              either mobile platform.
            </div>
            <Button
              component={Link}
              to="/mobileapps"
              className={classes.learnButton}
              variant="outlined"
            >
              <span style={{ marginRight: 5 }}>Learn More</span>
              {arrowSVG}
            </Button>
          </Grid>
          <Grid sm={matchesMD ? 6 : matchesSmall ? 4 : 5} item>
            <img
              alt="Mobile Phones and Tablets Icon"
              className={classes.icon}
              src={mobileAppsIcon}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="row" justify="flex-start">
          <Grid className={classes.gridItemSoftware} item>
            <Grid className={classes.subContainer} container direction="row">
              <Grid sm={matchesMD ? 6 : matchesSmall ? 8 : null} item>
                <div className={classes.headline}>
                  Custom Software Development
                </div>
                <div className={classes.subtitle}>
                  Save Energy. Save Time. Save Money.
                </div>
                <div className={classes.subtext}>
                  Complete digital solutions, from investigation
                  <br /> to{" "}
                  <span className={classes.specialText}>celebration.</span>
                </div>
                <Button
                  component={Link}
                  to="/customsoftware"
                  className={classes.learnButton}
                  variant="outlined"
                >
                  <span style={{ marginRight: 5 }}>Learn More</span>
                  {arrowSVG}
                </Button>
              </Grid>
              <Grid sm={matchesMD ? 6 : matchesSmall ? 4 : null} item>
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
      <Grid className={classes.gridItem} item>
        <Grid container direction="row">
          <Grid
            className={classes.websiteContainer}
            sm={matchesMD ? 6 : matchesSmall ? 8 : 5}
            item
          >
            <div className={classes.headline}>Website Development</div>
            <div className={classes.subtitle}>
              Reach More. Discover More. Sell More.
            </div>
            <div className={classes.subtext}>
              Optimized for Search Engines,
              <br />
              built for speed.
            </div>
            <Button
              component={Link}
              to="/websites"
              className={classes.learnButton}
              variant="outlined"
            >
              <span style={{ marginRight: 5 }}>Learn More</span>
              {arrowSVG}
            </Button>
          </Grid>
          <Grid sm={matchesMD ? 6 : matchesSmall ? 4 : 7} item>
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
