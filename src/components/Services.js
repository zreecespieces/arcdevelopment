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
    [theme.breakpoints.down("md")]: {
      marginLeft: "18.5%"
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "6.25%",
      "@media (orientation: landscape)": {
        marginLeft: "4%"
      }
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "50%",
      marginBottom: "100%",
      marginLeft: "5%"
    }
  },
  gridItemSoftware: {
    height: "400px",
    marginTop: "60%",
    [theme.breakpoints.down("md")]: {
      marginTop: "2%"
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "5%",
      marginBottom: "50%"
    }
  },
  gridItemIos: {
    height: "400px",
    marginTop: "10%",
    marginBottom: "20%",
    [theme.breakpoints.down("sm")]: {
      "@media (orientation: landscape)": {
        marginLeft: "-2%"
      }
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "40%",
      marginLeft: "5%",
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
    marginLeft: "15%",
    [theme.breakpoints.down("md")]: {
      marginLeft: "10%"
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      height: "80%",
      "@media (orientation: landscape)": {
        marginLeft: "10%"
      }
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "100%"
    }
  },
  softwareIcon: {
    backfaceVisibility: "hidden",
    marginLeft: "15%",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "85%",
      marginTop: "-35%"
    }
  },
  websiteIcon: {
    backfaceVisibility: "hidden",
    marginLeft: "15%",
    [theme.breakpoints.down("sm")]: {
      "@media (orientation: landscape)": {
        marginLeft: "10%"
      }
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "21%",
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
    }
  },
  subtext: {
    ...CustomTheme.typography.secondary,
    marginTop: "6%",
    [theme.breakpoints.down("md")]: {
      fontWeight: "normal"
    }
  },
  specialText: {
    fontFamily: "Pacifico",
    fontWeight: 1,
    color: CustomTheme.palette.secondary.main
  },
  iosTextContainer: {
    [theme.breakpoints.down("md")]: {
      maxWidth: "40%",
      marginLeft: "18%"
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "50%",
      marginLeft: "6.25%"
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
      marginLeft: "0%"
    }
  }
}));

export default function Services() {
  const classes = useStyles();

  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

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
    <Grid container justify="space-around" direction="row">
      <Grid item>
        <Grid container>
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
      <Grid item>
        <Grid container direction="column">
          <Grid className={classes.gridItemIos} item>
            <Grid
              className={classes.subContainerRight}
              container
              direction="row"
            >
              <Grid className={classes.iosTextContainer} item>
                <div className={classes.headline}>
                  iOS/Android App Development
                </div>
                <div className={classes.subtitle}>
                  Extend Functionality. Extend Access. Increase Engagement.
                </div>
                <div className={classes.subtext}>
                  Integrate your web experience or create a standalone app
                  {matchesMD ? " " : <br />}
                  with either mobile platform.
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
              <Grid item>
                <img
                  alt="Mobile Phones and Tablets Icon"
                  className={classes.icon}
                  src={mobileAppsIcon}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.gridItem} item>
            <Grid
              className={classes.subContainerRight}
              container
              direction="row"
            >
              <Grid item>
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
    </Grid>
  );
}
