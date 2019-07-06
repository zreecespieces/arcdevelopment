import React, { useState } from "react";
import Lottie from "react-lottie";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CustomTheme from "../components/ui/CustomTheme";
import { makeStyles } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";

import software from "../assets/software.svg";
import mobile from "../assets/mobile.svg";
import website from "../assets/website.svg";
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import camera from "../assets/camera.svg";
import upload from "../assets/upload.svg";
import person from "../assets/person.svg";
import persons from "../assets/persons.svg";
import info from "../assets/info.svg";
import bell from "../assets/bell.svg";
import people from "../assets/people.svg";
import users from "../assets/users.svg";
import iPhone from "../assets/iphone.svg";
import gps from "../assets/gps.svg";
import customized from "../assets/customized.svg";
import data from "../assets/data.svg";
import android from "../assets/android.svg";
import globe from "../assets/globe.svg";
import biometrics from "../assets/biometrics.svg";

import estimateAnimation from "./animations/estimateAnimation/data.json";

const useStyles = makeStyles(theme => ({
  title: {
    ...CustomTheme.typography.heroText
  },
  titleContainer: {
    paddingLeft: "5%",
    paddingRight: "3%"
  },
  titleHelper: {
    ...CustomTheme.typography.mainGrey,
    fontWeight: "none",
    textTransform: "none",
    fontSize: 20,
    marginTop: "2%"
  },
  heading: {
    ...CustomTheme.typography.main,
    fontWeight: "none",
    fontSize: 40
  },
  subheading: {
    ...CustomTheme.typography.secondary,
    fontSize: 16,
    textTransform: "none"
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
    textTransform: "none",
    fontSize: 20,
    marginBottom: "5%"
  },
  questionIcon: {
    width: "80%"
  },
  questionContainer: {
    width: "375px",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.1)"
    },
    borderRadius: "0px !important"
  },
  selectedContainer: {
    width: "375px",
    backgroundColor: CustomTheme.palette.secondary.main,
    "&:hover": {
      backgroundColor: CustomTheme.palette.secondary.dark
    },
    borderRadius: "0px !important"
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
          subtitle: null,
          icon: software,
          iconAlt: "three rectangles floating on top of eachother",
          selected: false
        },
        {
          id: 2,
          title: "iOS/Android App Development",
          subtitle: null,
          icon: mobile,
          iconAlt: "outlines of phones and tablets",
          selected: false
        },
        {
          id: 3,
          title: "Website Development",
          subtitle: null,
          icon: website,
          iconAlt: "computer outline",
          selected: false
        }
      ],
      active: true,
      hidden: false
    }
  ];

  const softwareQuestions = [
    {
      id: 1,
      title: "Which service are you interested in?",
      options: [
        {
          id: 1,
          title: "Custom Software Development",
          subtitle: null,
          icon: software,
          iconAlt: "three rectangles floating on top of eachother",
          selected: false
        },
        {
          id: 2,
          title: "iOS/Android App Development",
          subtitle: null,
          icon: mobile,
          iconAlt: "outlines of phones and tablets",
          selected: false
        },
        {
          id: 3,
          title: "Website Development",
          subtitle: null,
          icon: website,
          iconAlt: "computer outline",
          selected: false
        }
      ],
      active: false,
      hidden: false
    },
    {
      id: 2,
      title: "Which platforms do you need supported?",
      subtitle: "Select all that apply.",
      options: [
        {
          id: 1,
          title: "Web Application",
          subtitle: null,
          icon: website,
          iconAlt: "computer outline",
          selected: false
        },
        {
          id: 2,
          title: "iOS Application",
          subtitle: null,
          icon: iPhone,
          iconAlt: "outline of iphone",
          selected: false
        },
        {
          id: 3,
          title: "Android Application",
          subtitle: null,
          icon: android,
          iconAlt: "outlines of android phone",
          selected: false
        }
      ],
      active: true,
      hidden: false
    },
    {
      id: 3,
      title: "Which features do you expect to use?",
      subtitle: "Select all that apply.",
      options: [
        {
          id: 1,
          title: "Photo/Video",
          subtitle: null,
          icon: camera,
          iconAlt: "camera outline",
          selected: false
        },
        {
          id: 2,
          title: "GPS",
          subtitle: null,
          icon: gps,
          iconAlt: "gps pin",
          selected: false
        },
        {
          id: 3,
          title: "File Transfer",
          subtitle: null,
          icon: upload,
          iconAlt: "outline of cloud with arrow pointing up",
          selected: false
        }
      ],
      active: false,
      hidden: false
    },
    {
      id: 4,
      title: "Which features do you expect to use?",
      subtitle: "Select all that apply.",
      options: [
        {
          id: 1,
          title: "Users/Authentication",
          subtitle: null,
          icon: users,
          iconAlt: "outline of a person with a plus sign",
          selected: false
        },
        {
          id: 2,
          title: "Biometrics",
          subtitle: null,
          icon: biometrics,
          iconAlt: "fingerprint",
          selected: false
        },
        {
          id: 3,
          title: "Push Notifications",
          subtitle: null,
          icon: bell,
          iconAlt: "outline of a bell",
          selected: false
        }
      ],
      active: false,
      hidden: false
    },
    {
      id: 5,
      title: "What type of custom features do you expect to need?",
      subtitle: "Select one.",
      options: [
        {
          id: 1,
          title: "Low Complexity",
          subtitle: "(Informational)",
          icon: info,
          iconAlt: "'i' inside a circle",
          selected: false
        },
        {
          id: 2,
          title: "Medium Complexity",
          subtitle: "(Interactive, Customizable, Realtime)",
          icon: customized,
          iconAlt: "two toggle switches",
          selected: true
        },
        {
          id: 3,
          title: "High Complexity",
          subtitle: "(Data Modeling and Computation)",
          icon: data,
          iconAlt: "outline of line graph",
          selected: false
        }
      ],
      active: false,
      hidden: false
    },
    {
      id: 6,
      title: "How many users do you expect to have?",
      subtitle: "Select one.",
      options: [
        {
          id: 1,
          title: "0-10",
          subtitle: null,
          icon: person,
          iconAlt: "person outline",
          selected: false
        },
        {
          id: 2,
          title: "10-100",
          subtitle: null,
          icon: persons,
          iconAlt: "outline of two people",
          selected: false
        },
        {
          id: 3,
          title: "100-1000+",
          subtitle: null,
          icon: people,
          iconAlt: "outline of three people",
          selected: false
        }
      ],
      active: false,
      hidden: false
    }
  ];

  const websiteQuestions = [
    {
      id: 1,
      title: "Which service are you interested in?",
      options: [
        {
          id: 1,
          title: "Custom Software Development",
          subtitle: null,
          icon: software,
          iconAlt: "three rectangles floating on top of eachother",
          selected: false
        },
        {
          id: 2,
          title: "iOS/Android App Development",
          subtitle: null,
          icon: mobile,
          iconAlt: "outlines of phones and tablets",
          selected: false
        },
        {
          id: 3,
          title: "Website Development",
          subtitle: null,
          icon: website,
          iconAlt: "computer outline",
          selected: false
        }
      ],
      active: false,
      hidden: false
    },
    {
      id: 2,
      title: "Which type of website are you wanting?",
      subtitle: "Select one.",
      options: [
        {
          id: 1,
          title: "Basic",
          subtitle: "(Informational)",
          icon: info,
          iconAlt: "person outline",
          selected: false
        },
        {
          id: 2,
          title: "Interactive",
          subtitle: "(Users, API's, Messaging)",
          icon: customized,
          iconAlt: "outline of two people",
          selected: false
        },
        {
          id: 3,
          title: "E-Commerce",
          subtitle: "(Sales)",
          icon: globe,
          iconAlt: "outline of three people",
          selected: false
        }
      ],
      active: true,
      hidden: false
    }
  ];

  const [questions, setQuestions] = useState(defaultQuestions);

  const nextQuestion = () => {
    const newQuestions = [...questions];

    const currentlyActive = newQuestions.filter(question => question.active);
    const activeIndex = currentlyActive[0].id - 1;

    const filterHidden = newQuestions.filter(question => !question.hidden);
    const filterActiveIndex = filterHidden.indexOf(currentlyActive[0]);

    if (filterActiveIndex + 1 === filterHidden.length) {
      return;
    }

    const nextNotHidden = filterHidden[filterActiveIndex + 1].id;

    const nextActive = newQuestions.filter(
      question => question.id === nextNotHidden
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

    const filterHidden = newQuestions.filter(question => !question.hidden);
    const filterActiveIndex = filterHidden.indexOf(currentlyActive[0]);

    const nextNotHidden = filterHidden[filterActiveIndex - 1].id;

    const nextActive = newQuestions.filter(
      question => question.id === nextNotHidden
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

    const filterHidden = questions.filter(question => !question.hidden);

    if (activeId === filterHidden[filterHidden.length - 1].id) {
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

  const handleSelect = id => {
    const newQuestions = [...questions];

    const currentlyActive = newQuestions.filter(question => question.active);
    const activeId = currentlyActive[0].id;

    switch (newQuestions[activeId - 1].subtitle) {
      case "Select one.":
        const previousSelected = currentlyActive[0].options.filter(
          option => option.selected
        );

        if (previousSelected.length > 0) {
          previousSelected[0].selected = !previousSelected[0].selected;
        }
        break;
      default:
    }

    const currentlySelected = newQuestions[activeId - 1].options[id];

    newQuestions[activeId - 1].options[
      id
    ].selected = !currentlySelected.selected;

    switch (currentlySelected.title) {
      case "Custom Software Development":
        setQuestions(softwareQuestions);
        break;
      case "iOS/Android App Development":
        setQuestions(softwareQuestions);
        break;
      case "Website Development":
        setQuestions(websiteQuestions);
        break;
      default:
        setQuestions(newQuestions);
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
              .filter(question => question.active && !question.hidden)
              .map((question, index) => (
                <React.Fragment>
                  <Grid item>
                    <div className={classes.heading}>{question.title}</div>
                    <div className={classes.titleHelper}>
                      {question.subtitle}
                    </div>
                  </Grid>
                  <Grid item className={classes.questions}>
                    <Grid container justify="space-between" direction="row">
                      {question.options.map((option, index) => (
                        <Grid
                          md={4}
                          component={Button}
                          onClick={() => {
                            handleSelect(index);
                          }}
                          className={
                            option.selected
                              ? classes.selectedContainer
                              : classes.questionContainer
                          }
                          item
                        >
                          <Grid
                            container
                            align="center"
                            justify="center"
                            direction="column"
                          >
                            <Grid className={classes.questionTitle} item>
                              <div>{option.title}</div>
                              <div className={classes.subheading}>
                                {option.subtitle}
                              </div>
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
