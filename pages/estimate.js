import React, { useState, useRef, Fragment } from "react";
import Lottie from "react-lottie";
import axios from "axios";
import Head from "next/head";

import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useTheme } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import styles from "../components/styles/Estimate";

import estimateAnimation from "../static/animations/estimateAnimation/data";

import ReactGA from "react-ga";
ReactGA.initialize("UA-145847500-1");

const useStyles = styles;

export default function FreeEstimate() {
  const classes = useStyles();
  const theme = useTheme();
  const myRef = useRef(null);

  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultQuestions = [
    {
      id: 1,
      title: "Which service are you interested in?",
      options: [
        {
          id: 1,
          title: "Custom Software Development",
          subtitle: null,
          icon: "/static/icons/software.svg",
          iconAlt: "three rectangles floating on top of eachother",
          selected: false,
          cost: 0
        },
        {
          id: 2,
          title: "iOS/Android App Development",
          subtitle: null,
          icon: "/static/icons/mobile.svg",
          iconAlt: "outlines of phones and tablets",
          selected: false,
          cost: 0
        },
        {
          id: 3,
          title: "Website Development",
          subtitle: null,
          icon: "/static/icons/website.svg",
          iconAlt: "computer outline",
          selected: false,
          cost: 0
        }
      ],
      active: true
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
          icon: "/static/icons/software.svg",
          iconAlt: "three rectangles floating on top of eachother",
          selected: false,
          cost: 0
        },
        {
          id: 2,
          title: "iOS/Android App Development",
          subtitle: null,
          icon: "/static/icons/mobile.svg",
          iconAlt: "outlines of phones and tablets",
          selected: false,
          cost: 0
        },
        {
          id: 3,
          title: "Website Development",
          subtitle: null,
          icon: "/static/icons/website.svg",
          iconAlt: "computer outline",
          selected: false,
          cost: 0
        }
      ],
      active: false
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
          icon: "/static/icons/website.svg",
          iconAlt: "computer outline",
          selected: false,
          cost: 1000
        },
        {
          id: 2,
          title: "iOS Application",
          subtitle: null,
          icon: "/static/icons/iphone.svg",
          iconAlt: "outline of iphone",
          selected: false,
          cost: 1000
        },
        {
          id: 3,
          title: "Android Application",
          subtitle: null,
          icon: "/static/icons/android.svg",
          iconAlt: "outlines of android phone",
          selected: false,
          cost: 1000
        }
      ],
      active: true
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
          icon: "/static/icons/camera.svg",
          iconAlt: "camera outline",
          selected: false,
          cost: 250
        },
        {
          id: 2,
          title: "GPS",
          subtitle: null,
          icon: "/static/icons/gps.svg",
          iconAlt: "gps pin",
          selected: false,
          cost: 250
        },
        {
          id: 3,
          title: "File Transfer",
          subtitle: null,
          icon: "/static/icons/upload.svg",
          iconAlt: "outline of cloud with arrow pointing up",
          selected: false,
          cost: 250
        }
      ],
      active: false
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
          icon: "/static/icons/users.svg",
          iconAlt: "outline of a person with a plus sign",
          selected: false,
          cost: 250
        },
        {
          id: 2,
          title: "Biometrics",
          subtitle: null,
          icon: "/static/icons/biometrics.svg",
          iconAlt: "fingerprint",
          selected: false,
          cost: 250
        },
        {
          id: 3,
          title: "Push Notifications",
          subtitle: null,
          icon: "/static/icons/bell.svg",
          iconAlt: "outline of a bell",
          selected: false,
          cost: 250
        }
      ],
      active: false
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
          icon: "/static/icons/info.svg",
          iconAlt: "'i' inside a circle",
          selected: false,
          cost: 250
        },
        {
          id: 2,
          title: "Medium Complexity",
          subtitle: "(Interactive, Customizable, Realtime)",
          icon: "/static/icons/customized.svg",
          iconAlt: "two toggle switches",
          selected: false,
          cost: 500
        },
        {
          id: 3,
          title: "High Complexity",
          subtitle: "(Data Modeling and Computation)",
          icon: "/static/icons/data.svg",
          iconAlt: "outline of line graph",
          selected: false,
          cost: 1000
        }
      ],
      active: false
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
          icon: "/static/icons/person.svg",
          iconAlt: "person outline",
          selected: false,
          cost: 1
        },
        {
          id: 2,
          title: "10-100",
          subtitle: null,
          icon: "/static/icons/persons.svg",
          iconAlt: "outline of two people",
          selected: false,
          cost: 1.125
        },
        {
          id: 3,
          title: "100+",
          subtitle: null,
          icon: "/static/icons/people.svg",
          iconAlt: "outline of three people",
          selected: false,
          cost: 1.25
        }
      ],
      active: false
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
          icon: "/static/icons/software.svg",
          iconAlt: "three rectangles floating on top of eachother",
          selected: false,
          cost: 0
        },
        {
          id: 2,
          title: "iOS/Android App Development",
          subtitle: null,
          icon: "/static/icons/mobile.svg",
          iconAlt: "outlines of phones and tablets",
          selected: false,
          cost: 0
        },
        {
          id: 3,
          title: "Website Development",
          subtitle: null,
          icon: "/static/icons/website.svg",
          iconAlt: "computer outline",
          selected: false,
          cost: 0
        }
      ],
      active: false
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
          icon: "/static/icons/info.svg",
          iconAlt: "person outline",
          selected: false,
          cost: 1000
        },
        {
          id: 2,
          title: "Interactive",
          subtitle: "(Users, API's, Messaging)",
          icon: "/static/icons/customized.svg",
          iconAlt: "outline of two people",
          selected: false,
          cost: 2000
        },
        {
          id: 3,
          title: "E-Commerce",
          subtitle: "(Sales)",
          icon: "/static/icons/globe.svg",
          iconAlt: "outline of three people",
          selected: false,
          cost: 2500
        }
      ],
      active: true
    }
  ];

  const [questions, setQuestions] = useState(defaultQuestions);
  const [service, setService] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [features, setFeatures] = useState([]);
  const [customFeatures, setCustomFeatures] = useState([]);
  const [users, setUsers] = useState([]);
  const [category, setCategory] = useState("");
  const [total, setTotal] = useState(0);

  const nextQuestion = () => {
    if (matchesXS) {
      window.scrollTo(0, myRef.current.offsetTop - 100);
    }

    const newQuestions = [...questions];
    const currentlyActive = newQuestions.filter(question => question.active);
    const activeIndex = currentlyActive[0].id - 1;

    const nextIndex = activeIndex + 1;

    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };

    setQuestions(newQuestions);
  };

  const previousQuestion = () => {
    if (matchesXS) {
      window.scrollTo(0, myRef.current.offsetTop - 100);
    }

    const newQuestions = [...questions];

    const currentlyActive = newQuestions.filter(question => question.active);
    const activeIndex = currentlyActive[0].id - 1;

    const nextIndex = activeIndex - 1;

    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };

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

    if (activeId === questions[questions.length - 1].id) {
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

    const previousSelected = currentlyActive[0].options.filter(
      option => option.selected
    );

    const currentlySelected = newQuestions[activeId - 1].options[id];

    switch (newQuestions[activeId - 1].subtitle) {
      case "Select one.":
        if (
          newQuestions[activeId - 1].title ===
          "How many users do you expect to have?"
        ) {
          if (previousSelected.length > 0) {
            if (currentlySelected === previousSelected[0]) {
              currentlySelected.selected = !currentlySelected.selected;
              setTotal(total / previousSelected[0].cost);
              break;
            } else {
              currentlySelected.selected = !currentlySelected.selected;
              previousSelected[0].selected = !previousSelected[0].selected;

              const differenceOld = total / previousSelected[0].cost;

              const differenceNew = differenceOld * currentlySelected.cost;

              setTotal(differenceNew);
              break;
            }
          } else {
            currentlySelected.selected = !currentlySelected.selected;
            setTotal(total * currentlySelected.cost);
            break;
          }
        }

        if (previousSelected.length > 0) {
          if (currentlySelected === previousSelected[0]) {
            currentlySelected.selected = !currentlySelected.selected;
            setTotal(total - previousSelected[0].cost);
            break;
          } else {
            currentlySelected.selected = !currentlySelected.selected;
            previousSelected[0].selected = !previousSelected[0].selected;

            const difference =
              currentlySelected.cost - previousSelected[0].cost;
            setTotal(total + difference);
          }
        } else {
          currentlySelected.selected = !currentlySelected.selected;
          setTotal(total + currentlySelected.cost);
        }
        break;
      default:
        if (currentlySelected.selected) {
          setTotal(total - currentlySelected.cost);
        } else {
          setTotal(total + currentlySelected.cost);
        }

        currentlySelected.selected = !currentlySelected.selected;
    }

    switch (currentlySelected.title) {
      case "Custom Software Development":
        setTotal(0);
        softwareQuestions[0].options[0].selected = !softwareQuestions[0]
          .options[0].selected;
        setQuestions(softwareQuestions);
        if (matchesXS) {
          window.scrollTo(0, myRef.current.offsetTop - 100);
        }
        break;
      case "iOS/Android App Development":
        setTotal(0);
        softwareQuestions[0].options[1].selected = !softwareQuestions[0]
          .options[1].selected;
        setQuestions(softwareQuestions);
        if (matchesXS) {
          window.scrollTo(0, myRef.current.offsetTop - 100);
        }
        break;
      case "Website Development":
        setTotal(0);
        setPlatforms([]);
        setFeatures([]);
        setCustomFeatures([]);
        setUsers([]);
        websiteQuestions[0].options[2].selected = !websiteQuestions[0]
          .options[2].selected;
        setQuestions(websiteQuestions);
        if (matchesXS) {
          window.scrollTo(0, myRef.current.offsetTop - 100);
        }
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

  const defaultInputs = [
    {
      id: "name",
      label: "Name",
      value: "",
      type: "default",
      error: false,
      helperText: null,
      getHelperText: error => (error ? null : null),
      isValid: value => true
    },
    {
      id: "phone",
      label: "Phone",
      value: "",
      type: "tel",
      error: false,
      helperText: null,
      getHelperText: error => (error ? "Phone number invalid" : null),
      isValid: value =>
        /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(value)
    },
    {
      id: "email",
      label: "Email",
      value: "",
      type: "email",
      error: false,
      helperText: null,
      getHelperText: error => (error ? "Email invalid" : null),
      isValid: value => /\S+@\S+\.\S+/.test(value)
    }
  ];

  const [inputs, setInputs] = useState(defaultInputs);
  const [messageField, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const [dialogOpen, setDialogOpen] = useState(false);

  const onChange = ({ target: { id, value } }) => {
    const newInputs = [...inputs];
    const index = inputs.findIndex(input => input.id === id);

    const input = inputs[index];
    const isValid = input.isValid(value);

    newInputs[index] = {
      ...input,
      value: value,
      error: !isValid,
      helperText: input.getHelperText(!isValid)
    };

    setInputs(newInputs);
  };

  const onDialogOpen = () => {
    selectedOptions();
    setDialogOpen(true);
    ReactGA.event({
      category: "Estimate Check",
      action: "Estimate Opened"
    });
  };

  const onDialogClose = () => {
    setDialogOpen(false);
  };

  const onDialogSend = () => {
    setLoading(true);

    if (service === "Website Development") {
      axios
        .post(
          `https://us-central1-arc-development-website.cloudfunctions.net/sendMail?dest=zachary@arcsoftwaredevelopment.com&name=${
            inputs[0].value
          }&number=${inputs[1].value}&email=${
            inputs[2].value
          }&message=${messageField}&estimate=${total.toString()}&service=${service}&category=${category.toString()}`
        )
        .then(function(response) {
          setDialogOpen(false);
          setMessage("");
          setInputs(defaultInputs);
          setSnackbarOpen(true);
          setSnackbarMessage("Request placed successfully");
          setLoading(false);
          ReactGA.event({
            category: "Estimate Send",
            action: `${service} Estimate`
          });

          axios
            .post(
              `https://us-central1-arc-development-website.cloudfunctions.net/sendMail?dest=${
                inputs[2].value
              }&name=${inputs[0].value}&number=${inputs[1].value}&email=${
                inputs[2].value
              }&message=${messageField}&estimate=${total.toString()}&service=${service}&category=${category.toString()}`
            )
            .catch(function(error) {
              console.log(error);
            });
        })
        .catch(function(error) {
          console.log(error);
          setSnackbarOpen(true);
          setSnackbarMessage(
            "Something went wrong! Please refresh and try again."
          );
          setLoading(false);
        });
    } else {
      axios
        .post(
          `https://us-central1-arc-development-website.cloudfunctions.net/sendMail?dest=zachary@arcsoftwaredevelopment.com&name=${
            inputs[0].value
          }&number=${inputs[1].value}&email=${
            inputs[2].value
          }&message=${messageField}&estimate=${total.toString()}&service=${service}&platforms=${platforms
            .map(platform => " ".concat(platform.title))
            .toString()}&features=${features
            .map(feature => " ".concat(feature.title))
            .toString()}&customFeatures=${
            customFeatures[0].title
          }&users=${users[0].title.toString()}&category=${category.toString()}`
        )
        .then(function(response) {
          setDialogOpen(false);
          setMessage("");
          setInputs(defaultInputs);
          setSnackbarOpen(true);
          setSnackbarMessage("Request placed successfully");
          setLoading(false);
          ReactGA.event({
            category: "Estimate Send",
            action: `${service} Estimate`
          });

          axios
            .post(
              `https://us-central1-arc-development-website.cloudfunctions.net/sendMail?dest=${
                inputs[2].value
              }&name=${inputs[0].value}&number=${inputs[1].value}&email=${
                inputs[2].value
              }&message=${messageField}&estimate=${total.toString()}&service=${service}&platforms=${platforms
                .map(platform => " ".concat(platform.title))
                .toString()}&features=${features
                .map(feature => " ".concat(feature.title))
                .toString()}&customFeatures=${
                customFeatures[0].title
              }&users=${users[0].title.toString()}&category=${category.toString()}`
            )
            .catch(function(error) {
              console.log(error);
            });
        })
        .catch(function(error) {
          console.log(error);
          setSnackbarOpen(true);
          setSnackbarMessage(
            "Something went wrong! Please refresh and try again."
          );
          setLoading(false);
        });
    }
  };

  const onSnackbarClose = (e, reason) => {
    if (reason === "clickaway") {
      setSnackbarOpen(false);
      setSnackbarMessage("");
    }

    setSnackbarOpen(false);
    setSnackbarMessage("");
  };

  const disableRequest = () => {
    const blankInputs = inputs.filter(input => input.value === "");

    if (blankInputs.length > 0 || messageField === "" || total < 1000) {
      return true;
    } else {
      return false;
    }
  };

  const selectedOptions = () => {
    const selected = [...questions];

    setService(selected[0].options.filter(option => option.selected)[0].title);

    if (selected.length > 1) {
      switch (selected[0].options.filter(option => option.selected)[0].title) {
        case "Website Development":
          const websiteCategory = selected[1].options.filter(
            option => option.selected
          )[0].title;
          setCategory(websiteCategory);
          break;
        case "Custom Software Development":
          if (selected.length > 2) {
            const featuresFirst = selected[2].options.filter(
              option => option.selected
            );
            const featuresSecond = selected[3].options.filter(
              option => option.selected
            );
            setPlatforms(selected[1].options.filter(option => option.selected));
            setFeatures(featuresFirst.concat(featuresSecond));
            setCustomFeatures(
              selected[4].options.filter(option => option.selected)
            );
            setUsers(selected[5].options.filter(option => option.selected));
            break;
          } else {
            break;
          }
        case "iOS/Android App Development":
          if (selected.length > 2) {
            const featuresNew = selected[2].options.filter(
              option => option.selected
            );
            const featuresExtra = selected[3].options.filter(
              option => option.selected
            );
            setPlatforms(selected[1].options.filter(option => option.selected));
            setFeatures(featuresNew.concat(featuresExtra));
            setCustomFeatures(
              selected[4].options.filter(option => option.selected)
            );
            setUsers(selected[5].options.filter(option => option.selected));
            break;
          } else {
            break;
          }
        default:
          break;
      }
    }

    return;
  };

  const websiteChoicesGrid = (
    <Fragment>
      <Grid item>
        <Grid className={classes.choicesContainer} container direction="row">
          <Grid item>
            <img
              className={classes.check}
              alt="checkmark"
              src="/static/icons/check.svg"
            />
          </Grid>
          <Grid item>
            <p className={classes.choices}>
              {category === "Basic"
                ? `You want a Basic Website.`
                : `You want an ${category} Website.`}
            </p>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );

  const softwareChoicesGrid = (
    <Fragment>
      <Grid item>
        <Grid
          className={classes.choicesContainer}
          container
          alignItems="center"
          direction="row"
        >
          <Grid item>
            <img
              className={classes.check}
              alt="checkmark"
              src="/static/icons/check.svg"
            />
          </Grid>
          <Grid item>
            <p className={classes.choices}>
              {service ? `You want ${service} ` : "No service selected"}
              {platforms.length > 0
                ? `for ${
                    platforms[0].title === "Web Application" &&
                    platforms.length === 1
                      ? "a Web Application."
                      : platforms[0].title === "Web Application" &&
                        platforms.length === 2
                      ? `a Web Application and an ${platforms[1].title}.`
                      : platforms[0].title === "Web Application"
                      ? `a Web Application, an ${platforms[1].title}, and an ${platforms[2].title}.`
                      : platforms.length === 1
                      ? `an ${platforms[0].title}`
                      : platforms.length === 2 &&
                        platforms[1].title === "Web Application"
                      ? `a Web Application and an ${platforms[0].title}.`
                      : platforms.length === 2
                      ? "an iOS Application and an Android Application."
                      : platforms.length === 3
                      ? "a Web Application, an iOS Application, and an Android Application."
                      : null
                  }`
                : "with NO platform selected"}
            </p>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container alignItems="center" direction="row">
          <Grid item>
            <img
              className={classes.check}
              alt="checkmark"
              src="/static/icons/check.svg"
            />
          </Grid>
          <Grid item>
            <p className={classes.choices}>
              {features.length > 0 ? "with " : "No features selected."}
              {features.length > 0
                ? features.length === 1
                  ? `${features[0].title}.`
                  : features.length === 2
                  ? `${features[0].title} and ${features[1].title}.`
                  : features
                      .filter((feature, index) => index !== features.length - 1)
                      .map((feature, index) => (
                        <span key={index}>{`${feature.title}, `}</span>
                      ))
                : null}
              {features.length > 0 &&
              features.length !== 1 &&
              features.length !== 2
                ? ` and ${features[features.length - 1].title}.`
                : null}
            </p>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid alignItems="center" container direction="row">
          <Grid item>
            <img
              className={classes.check}
              alt="checkmark"
              src="/static/icons/check.svg"
            />
          </Grid>
          <Grid item>
            <p className={classes.choices}>
              {customFeatures.length > 0
                ? "The custom features will be of "
                : "No custom features selected"}
              {customFeatures.map((customFeature, index) => (
                <span
                  key={index}
                >{`${customFeature.title.toLowerCase()}, `}</span>
              ))}
              {customFeatures.length > 0
                ? `and the project will be used by about ${
                    users[0] ? users[0].title : null
                  } users.`
                : null}
            </p>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );

  const paperAirPlaneIcon = (
    <Fragment>
      Place Request
      <img
        className={classes.send}
        alt="paper airplane"
        src="/static/icons/send.svg"
      />
    </Fragment>
  );

  return (
    <Grid
      container
      justify={matchesMD ? "center" : "space-between"}
      direction="row"
    >
      <Head>
        <title>Estimate | Arc Development</title>
        <meta
          name="description"
          content="Use our free online calculator to get an estimate for your custom software project instantly. | Wichita, KS"
        />
        <meta
          property="og:url"
          content="https://arcsoftwaredevelopment.com/estimate"
        />
        <link
          href="https://arcsoftwaredevelopment.com/estimate"
          rel="canonical"
          key="canonical"
        />
      </Head>
      <Grid
        className={classes.titleContainer}
        alignItems={matchesMD ? "center" : null}
        item
      >
        <Grid container direction="column">
          <Grid item>
            <div className={classes.title}>Estimate</div>
          </Grid>
          <Grid className={classes.animation} item>
            <Lottie
              options={defaultOptions}
              height={matchesXS ? 200 : matchesLG ? 350 : 400}
              width={matchesXS ? 300 : matchesLG ? 500 : 600}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.questionsContainer} item>
        <Grid
          container
          justify="center"
          align="center"
          alignItems="center"
          direction="column"
        >
          {questions
            .filter(question => question.active)
            .map((question, index) => (
              <Fragment key={index}>
                <Grid item>
                  <div ref={myRef} className={classes.heading}>
                    {question.title}
                  </div>
                  <div className={classes.titleHelper}>{question.subtitle}</div>
                </Grid>
                <Grid item className={classes.questions}>
                  <Grid
                    container
                    justify={matchesXS ? "center" : "space-between"}
                    direction="row"
                  >
                    {question.options.map((option, index) => (
                      <Grid
                        sm={4}
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
                        key={index}
                      >
                        <Grid
                          container
                          alignItems="center"
                          justify="center"
                          direction="column"
                        >
                          <Grid className={classes.optionTitle} item>
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
              </Fragment>
            ))}
          <Dialog
            classes={{
              paper: classes.dialog
            }}
            open={dialogOpen}
            fullWidth={true}
            maxWidth="md"
            onClose={onDialogClose}
          >
            <div
              className={classes.confirmTitle}
              style={{ textAlign: "center" }}
            >
              Estimate
            </div>
            <DialogContent>
              <Grid container direction="column">
                <Grid item>
                  <Grid container justify="space-around" direction="row">
                    <Grid item>
                      <Grid container direction="column">
                        {inputs.map(input => (
                          <Grid
                            className={classes.inputContainer}
                            item
                            key={input.id}
                          >
                            <TextField
                              InputProps={{
                                classes: {
                                  input: classes.input
                                },
                                type: input.type
                              }}
                              fullWidth
                              id={input.id}
                              label={input.label}
                              helperText={input.helperText}
                              value={input.value}
                              onChange={onChange}
                              error={input.error}
                            />
                          </Grid>
                        ))}
                        <Grid item>
                          <TextField
                            InputProps={{
                              classes: {
                                input: classes.messageInputConfirm
                              },
                              disableUnderline: true
                            }}
                            multiline
                            placeholder="Tell us more about your project."
                            rows={4}
                            fullWidth
                            value={messageField}
                            onChange={e => setMessage(e.target.value)}
                          />
                        </Grid>

                        <Grid
                          className={classes.paragraphContainer}
                          alignItems={matchesMD ? "center" : null}
                          item
                        >
                          <p className={classes.paragraph}>
                            We can create this custom digital solution for an
                            estimated{" "}
                            <span className={classes.special}>
                              ${total.toFixed(2)}
                            </span>
                          </p>
                          <p className={classes.paragraph}>
                            Fill out your name, number, and email, place your
                            request, and we’ll get back to you with details
                            moving forward and a final price.
                          </p>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid container direction="column">
                        <Hidden smDown>
                          {service === "Custom Software Development" ||
                          service === "iOS/Android App Development"
                            ? softwareChoicesGrid
                            : service === "Website Development"
                            ? websiteChoicesGrid
                            : null}
                        </Hidden>

                        <Grid
                          className={classes.buttonContainer}
                          alignItems={matchesMD ? "center" : null}
                        >
                          <Button
                            onClick={onDialogSend}
                            disabled={disableRequest()}
                            className={classes.buttonConfirm}
                            variant="contained"
                          >
                            {loading ? <CircularProgress /> : paperAirPlaneIcon}
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </DialogContent>
          </Dialog>
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={snackbarOpen}
            message={snackbarMessage}
            onClose={onSnackbarClose}
            autoHideDuration={4000}
          />
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
                    src="/static/icons/backArrow.svg"
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
                    src="/static/icons/forwardArrow.svg"
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Button
              disabled={estimateDisabled()}
              onClick={onDialogOpen}
              className={classes.estimateButton}
              variant="contained"
            >
              Get Estimate
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
