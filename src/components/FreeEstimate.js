import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CustomTheme from "../components/ui/CustomTheme";
import { makeStyles } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";

import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websiteIcon from "../assets/websiteIcon.svg";
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";

const useStyles = makeStyles(theme => ({
  title: {
    ...CustomTheme.typography.heroText
  },
  titleContainer: {
    paddingLeft: "5%",
    paddingRight: "3%"
  },
  heading: {
    ...CustomTheme.typography.main,
    fontWeight: "none",
    fontSize: 40
  },
  estimateButton: {
    backgroundColor: CustomTheme.palette.secondary.main,
    color: "white",
    "&:hover": {
      backgroundColor: CustomTheme.palette.secondary.light
    },
    borderRadius: "50px",
    fontFamily: "Pacifico",
    textTransform: "none",
    fontWeight: "10",
    fontSize: "2vh",
    marginTop: "50%",
    marginBottom: "80%",
    height: "6vh",
    width: "10vw"
  },
  questionsContainer: {},
  questions: {
    marginTop: "15%",
    marginBottom: "10%"
  },
  questionTitle: {
    ...CustomTheme.typography.main,
    fontWeight: "none",
    fontSize: 20,
    marginBottom: "5%"
  },
  questionIcon: {
    width: "50%"
  },
  questionContainer: {
    width: "600px"
  },
  spacer: {
    width: "200px"
  }
}));

export default function FreeEstimate() {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={CustomTheme}>
      <Grid container justify="space-between" direction="row">
        <Grid className={classes.titleContainer} item>
          <Grid container direction="column">
            <Grid item>
              <div className={classes.title}>Estimate</div>
            </Grid>
          </Grid>
        </Grid>
        <Grid className={classes.questionsContainer} item>
          <Grid container justify="center" align="center" direction="column">
            <Grid item>
              <div className={classes.heading}>
                Which service are you interested in?
              </div>
            </Grid>
            <Grid className={classes.questions} item>
              <Grid container justify="space-between" direction="row">
                <Grid md={4} item>
                  <Grid
                    container
                    align="center"
                    justify="center"
                    direction="column"
                  >
                    <Grid className={classes.questionTitle} item>
                      <div>Custom Software Development</div>
                    </Grid>
                    <Grid item>
                      <img
                        className={classes.questionIcon}
                        alt="three rectangles floating on top of eachother"
                        src={customSoftwareIcon}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid md={4} className={classes.questionContainer} item>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    align="center"
                  >
                    <Grid className={classes.questionTitle} item>
                      <div>iOS/Android App Development</div>
                    </Grid>
                    <Grid item>
                      <img
                        className={classes.questionIcon}
                        alt="outlines of phones and tablets"
                        src={mobileAppsIcon}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid md={4} item>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    align="center"
                  >
                    <Grid className={classes.questionTitle} item>
                      <div>Website Development</div>
                    </Grid>
                    <Grid item>
                      <img
                        className={classes.questionIcon}
                        alt="computer outline"
                        src={websiteIcon}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="row">
                <Grid item>
                  <img
                    className={classes.backArrow}
                    alt="backwards arrow"
                    src={backArrow}
                  />
                </Grid>
                <Grid item>
                  <div className={classes.spacer} />
                </Grid>
                <Grid item>
                  <img
                    className={classes.forwardArrow}
                    alt="forwards arrow"
                    src={forwardArrow}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Button className={classes.estimateButton} variant="contained">
                Get Estimate
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  );
}
