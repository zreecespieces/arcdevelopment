import React, { useState } from "react";
import Lottie from "react-lottie";

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

import estimateAnimation from "./animations/estimateAnimation/data.json";

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
  animation: {
    marginTop: "10%"
  },
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
    width: "375px"
  },
  spacer: {
    width: "200px"
  }
}));

export default function FreeEstimate() {
  const classes = useStyles();

  const defaultQuestions = [
    {
      id: 1,
      title: "Which service are you interested in?",
      options: [
        {
          id: 1,
          title: "Custom Software Development",
          icon: customSoftwareIcon,
          iconAlt: "three rectangles floating on top of eachother",
          selected: false
        },
        {
          id: 2,
          title: "iOS/Android App Development",
          icon: mobileAppsIcon,
          iconAlt: "outlines of phones and tablets",
          selected: false
        },
        {
          id: 3,
          title: "Website Development",
          icon: websiteIcon,
          iconAlt: "computer outline",
          selected: false
        }
      ],
      active: true
    },
    {
      id: 2,
      title: "How many people will be using the product?",
      options: [
        {
          id: 1,
          title: "0-10",
          icon: websiteIcon,
          iconAlt: "computer outline",
          selected: false
        },
        {
          id: 2,
          title: "10-50",
          icon: customSoftwareIcon,
          iconAlt: "three rectangles floating on top of eachother",
          selected: true
        },
        {
          id: 3,
          title: "50-100+",
          icon: mobileAppsIcon,
          iconAlt: "outlines of phones and tablets",
          selected: false
        }
      ],
      active: false
    }
  ];

  const [questions, setQuestions] = useState(defaultQuestions);

  const nextQuestion = () => {
    const newQuestions = [...questions];

    const currentlyActive = newQuestions.filter(question => question.active);
    const activeIndex = currentlyActive[0].id - 1;

    const nextActive = newQuestions.filter(
      question => question.id === currentlyActive[0].id + 1
    );
    const nextIndex = nextActive[0].id - 1;

    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[nextIndex] = { ...nextActive[0], active: true };

    setQuestions(newQuestions);
  };

  const previousQuestion = () => {
    const newQuestions = [...questions];

    const currentlyActive = newQuestions.filter(question => question.active);
    const activeIndex = currentlyActive[0].id - 1;

    const nextActive = newQuestions.filter(
      question => question.id === currentlyActive[0].id - 1
    );
    const nextIndex = nextActive[0].id - 1;

    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[nextIndex] = { ...nextActive[0], active: true };

    setQuestions(newQuestions);
  };

  const backButtonDisabled = () => {
    const currentlyActive = questions.filter(question => question.active);
    const activeId = currentlyActive[0].id;

    if (activeId === 1) {
      return true;
    } else {
      return false;
    }
  };

  const forwardButtonDisabled = () => {
    const currentlyActive = questions.filter(question => question.active);
    const activeId = currentlyActive[0].id;

    if (activeId === questions.length) {
      return true;
    } else {
      return false;
    }
  };

  const estimateDisabled = () => {
    const currentlyActive = questions.filter(question => question.active);
    const activeId = currentlyActive[0].id;

    const lastQuestionIndex = questions.length - 1;

    if (
      activeId === questions.length &&
      questions[lastQuestionIndex].options.filter(option => option.selected)
        .length > 0
    ) {
      return false;
    } else {
      return true;
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: estimateAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <MuiThemeProvider theme={CustomTheme}>
      <Grid container justify="space-between" direction="row">
        <Grid className={classes.titleContainer} item>
          <Grid container direction="column">
            <Grid item>
              <div className={classes.title}>Estimate</div>
            </Grid>
            <Grid className={classes.animation} item>
              <Lottie options={defaultOptions} height={400} width={600} />
            </Grid>
          </Grid>
        </Grid>
        <Grid className={classes.questionsContainer} item>
          <Grid container justify="center" align="center" direction="column">
            {questions
              .filter(question => question.active)
              .map((question, index) => (
                <React.Fragment>
                  <Grid item>
                    <div className={classes.heading}>{question.title}</div>
                  </Grid>
                  <Grid item className={classes.questions}>
                    <Grid container justify="space-between" direction="row">
                      {question.options.map((option, index) => (
                        <Grid md={4} className={classes.questionContainer} item>
                          <Grid
                            container
                            align="center"
                            justify="center"
                            direction="column"
                          >
                            <Grid className={classes.questionTitle} item>
                              <div>{option.title}</div>
                            </Grid>
                            <Grid item>
                              <img
                                className={classes.questionIcon}
                                alt={option.iconAlt}
                                src={option.icon}
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                </React.Fragment>
              ))}
            <Grid item>
              <Grid container direction="row">
                <Grid item>
                  <Button
                    disabled={backButtonDisabled()}
                    onClick={previousQuestion}
                  >
                    <img
                      className={classes.backArrow}
                      alt="backwards arrow"
                      src={backArrow}
                    />
                  </Button>
                </Grid>
                <Grid item>
                  <div className={classes.spacer} />
                </Grid>
                <Grid item>
                  <Button
                    disabled={forwardButtonDisabled()}
                    onClick={nextQuestion}
                  >
                    <img
                      className={classes.forwardArrow}
                      alt="forwards arrow"
                      src={forwardArrow}
                    />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Button
                disabled={estimateDisabled()}
                className={classes.estimateButton}
                variant="contained"
              >
                Get Estimate
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  );
}
