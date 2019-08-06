import React, { useState } from "react";
import Lottie from "react-lottie";
import axios from "axios";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CustomTheme from "../components/ui/CustomTheme";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import check from "../assets/check.svg";
import send from "../assets/send.svg";
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
import usersIcon from "../assets/users.svg";
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
    paddingRight: "3%",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "0%",
      paddingRight: "0%"
    }
  },
  titleHelper: {
    ...CustomTheme.typography.mainGrey,
    fontWeight: "none",
    textTransform: "none",
    fontSize: 20,
    marginTop: "2%",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "-20%"
    }
  },
  confirmTitle: {
    ...CustomTheme.typography.heroText,
    fontSize: 32,
    marginTop: "5%"
  },
  input: {
    ...CustomTheme.input
  },
  heading: {
    ...CustomTheme.typography.main,
    fontWeight: "none",
    fontSize: 40
  },
  subheading: {
    ...CustomTheme.typography.secondary,
    fontSize: 16,
    textTransform: "none",
    [theme.breakpoints.down("xs")]: {
      fontWeight: "normal"
    }
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
    width: "10vw",
    [theme.breakpoints.down("xs")]: {
      width: "50vw",
      height: "8vh"
    }
  },
  animation: {
    marginTop: "10%",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "50%"
    }
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
    borderRadius: "0px !important",
    [theme.breakpoints.down("xs")]: {
      marginTop: "30%"
    }
  },
  selectedContainer: {
    width: "375px",
    backgroundColor: CustomTheme.palette.secondary.main,
    "&:hover": {
      backgroundColor: CustomTheme.palette.secondary.dark
    },
    borderRadius: "0px !important",
    [theme.breakpoints.down("xs")]: {
      marginTop: "15%",
      marginBottom: "15%"
    }
  },
  spacer: {
    width: "200px"
  },
  send: {
    paddingLeft: "10%",
    verticalAlign: "middle"
  },
  dialog: {
    maxHeight: "100%",
    height: "60vh",
    width: "55vw",
    maxWidth: "100%",
    [theme.breakpoints.down("xs")]: {
      height: "80vh",
      width: "100vw"
    }
  },
  messageInputConfirm: {
    ...CustomTheme.messageInput,
    padding: "5%",
    marginTop: "10%",
    [theme.breakpoints.down("xs")]: {
      fontWeight: "normal",
      fontFamily: "Arial"
    }
  },
  buttonContainer: {
    marginTop: "50%",
    marginLeft: "20%",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0%",
      marginTop: "25%",
      marginBottom: "25%"
    }
  },
  buttonConfirm: {
    backgroundColor: CustomTheme.palette.secondary.main,
    color: "white",
    "&:hover": {
      backgroundColor: CustomTheme.palette.secondary.light
    },
    borderRadius: "50px",
    fontFamily: "Pacifico",
    textTransform: "none",
    fontSize: "20px",
    height: "6vh",
    width: "10vw",
    [theme.breakpoints.down("xs")]: {
      width: "55vw",
      height: "8vh"
    }
  },
  paragraph: {
    ...CustomTheme.typography.secondary,
    fontSize: 16,
    maxWidth: "350px"
  },
  paragraphContainer: {
    marginTop: "10%"
  },
  choices: {
    ...CustomTheme.typography.secondary,
    fontSize: 16,
    maxWidth: "350px",
    minWidth: "350px",
    width: "100%",
    marginLeft: "10%"
  },
  special: {
    color: CustomTheme.palette.secondary.main,
    fontFamily: "Raleway",
    fontSize: 32,
    marginLeft: "5%"
  },
  // check: {
  //   marginTop: "75%"
  // },
  inputContainer: {
    marginTop: "3%"
  },
  choicesContainer: {
    marginTop: "5%"
  }
}));

export default function FreeEstimate() {
  const classes = useStyles();

  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

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
          selected: false,
          cost: 0
        },
        {
          id: 2,
          title: "iOS/Android App Development",
          subtitle: null,
          icon: mobile,
          iconAlt: "outlines of phones and tablets",
          selected: false,
          cost: 0
        },
        {
          id: 3,
          title: "Website Development",
          subtitle: null,
          icon: website,
          iconAlt: "computer outline",
          selected: false,
          cost: 0
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
          selected: false,
          cost: 0
        },
        {
          id: 2,
          title: "iOS/Android App Development",
          subtitle: null,
          icon: mobile,
          iconAlt: "outlines of phones and tablets",
          selected: false,
          cost: 0
        },
        {
          id: 3,
          title: "Website Development",
          subtitle: null,
          icon: website,
          iconAlt: "computer outline",
          selected: false,
          cost: 0
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
          selected: false,
          cost: 1000
        },
        {
          id: 2,
          title: "iOS Application",
          subtitle: null,
          icon: iPhone,
          iconAlt: "outline of iphone",
          selected: false,
          cost: 1000
        },
        {
          id: 3,
          title: "Android Application",
          subtitle: null,
          icon: android,
          iconAlt: "outlines of android phone",
          selected: false,
          cost: 1000
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
          selected: false,
          cost: 250
        },
        {
          id: 2,
          title: "GPS",
          subtitle: null,
          icon: gps,
          iconAlt: "gps pin",
          selected: false,
          cost: 250
        },
        {
          id: 3,
          title: "File Transfer",
          subtitle: null,
          icon: upload,
          iconAlt: "outline of cloud with arrow pointing up",
          selected: false,
          cost: 250
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
          icon: usersIcon,
          iconAlt: "outline of a person with a plus sign",
          selected: false,
          cost: 250
        },
        {
          id: 2,
          title: "Biometrics",
          subtitle: null,
          icon: biometrics,
          iconAlt: "fingerprint",
          selected: false,
          cost: 250
        },
        {
          id: 3,
          title: "Push Notifications",
          subtitle: null,
          icon: bell,
          iconAlt: "outline of a bell",
          selected: false,
          cost: 250
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
          selected: false,
          cost: 250
        },
        {
          id: 2,
          title: "Medium Complexity",
          subtitle: "(Interactive, Customizable, Realtime)",
          icon: customized,
          iconAlt: "two toggle switches",
          selected: false,
          cost: 500
        },
        {
          id: 3,
          title: "High Complexity",
          subtitle: "(Data Modeling and Computation)",
          icon: data,
          iconAlt: "outline of line graph",
          selected: false,
          cost: 1000
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
          selected: false,
          cost: 1
        },
        {
          id: 2,
          title: "10-100",
          subtitle: null,
          icon: persons,
          iconAlt: "outline of two people",
          selected: false,
          cost: 1.125
        },
        {
          id: 3,
          title: "100-1000+",
          subtitle: null,
          icon: people,
          iconAlt: "outline of three people",
          selected: false,
          cost: 1.25
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
          selected: false,
          cost: 0
        },
        {
          id: 2,
          title: "iOS/Android App Development",
          subtitle: null,
          icon: mobile,
          iconAlt: "outlines of phones and tablets",
          selected: false,
          cost: 0
        },
        {
          id: 3,
          title: "Website Development",
          subtitle: null,
          icon: website,
          iconAlt: "computer outline",
          selected: false,
          cost: 0
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
          selected: false,
          cost: 1000
        },
        {
          id: 2,
          title: "Interactive",
          subtitle: "(Users, API's, Messaging)",
          icon: customized,
          iconAlt: "outline of two people",
          selected: false,
          cost: 2000
        },
        {
          id: 3,
          title: "E-Commerce",
          subtitle: "(Sales)",
          icon: globe,
          iconAlt: "outline of three people",
          selected: false,
          cost: 2500
        }
      ],
      active: true,
      hidden: false
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
        break;
      case "iOS/Android App Development":
        setTotal(0);
        softwareQuestions[0].options[1].selected = !softwareQuestions[0]
          .options[1].selected;
        setQuestions(softwareQuestions);
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
        break;
      default:
        setQuestions(newQuestions);
    }

    selectedOptions();
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
      error: false,
      helperText: null,
      getHelperText: error => (error ? null : null),
      isValid: value => true
    },
    {
      id: "phone",
      label: "Phone",
      value: "",
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
      error: false,
      helperText: null,
      getHelperText: error => (error ? "Email invalid" : null),
      isValid: value => /\S+@\S+\.\S+/.test(value)
    }
  ];

  const [inputs, setInputs] = useState(defaultInputs);
  const subject = "Estimate Request!";
  const [messageField, setMessage] = useState("");
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
    setDialogOpen(true);
  };

  const onDialogClose = () => {
    setDialogOpen(false);
  };

  const onDialogSend = () => {
    if (service === "Website Development") {
      axios
        .post(
          `https://us-central1-arc-development-website.cloudfunctions.net/sendMail?dest=zachary@arcsoftwaredevelopment.com&subj=${subject}&name=${
            inputs[0].value
          }&number=${inputs[1].value}&email=${
            inputs[2].value
          }&message=${messageField}&estimate=${total.toString()}&service=${service}&category=${category.toString()}`
        )
        .then(function(response) {
          setDialogOpen(false);
          setMessage("");
          setInputs(defaultInputs);

          axios
            .post(
              `https://us-central1-arc-development-website.cloudfunctions.net/sendMail?dest=${
                inputs[2].value
              }&subj=${subject}&name=${inputs[0].value}&number=${
                inputs[1].value
              }&email=${
                inputs[2].value
              }&message=${messageField}&estimate=${total.toString()}&service=${service}&category=${category.toString()}`
            )
            .catch(function(error) {
              console.log(error);
            });
        })
        .catch(function(error) {
          console.log(error);
        });
    } else {
      axios
        .post(
          `https://us-central1-arc-development-website.cloudfunctions.net/sendMail?dest=zachary@arcsoftwaredevelopment.com&subj=${subject}&name=${
            inputs[0].value
          }&number=${inputs[1].value}&email=${
            inputs[2].value
          }&message=${messageField}&estimate=${total.toString()}&service=${service}&platforms=${platforms
            .map(platform => platform.title)
            .toString()}&features=${features
            .map(feature => feature.title)
            .toString()}&customFeatures=${
            customFeatures[0].title
          }&users=${users[0].title.toString()}&category=${category.toString()}`
        )
        .then(function(response) {
          setDialogOpen(false);
          setMessage("");
          setInputs(defaultInputs);

          axios
            .post(
              `https://us-central1-arc-development-website.cloudfunctions.net/sendMail?dest=${
                inputs[2].value
              }&subj=${subject}&name=${inputs[0].value}&number=${
                inputs[1].value
              }&email=${
                inputs[2].value
              }&message=${messageField}&estimate=${total.toString()}&service=${service}&platforms=${platforms
                .map(platform => platform.title)
                .toString()}&features=${features
                .map(feature => feature.title)
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

  const onMessageSend = () => {
    setSnackbarOpen(true);
    setSnackbarMessage("Request placed successfully");
    onDialogSend();
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
    const selected = questions.filter(question =>
      question.options.filter(option => option.selected)
    );

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
        case "iOS/Android App Development":
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
        default:
          break;
      }
    }

    return;
  };

  const websiteChoicesGrid = (
    <React.Fragment>
      <Grid item>
        <Grid className={classes.choicesContainer} container direction="row">
          <Grid item>
            <img className={classes.check} alt="checkmark" src={check} />
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
    </React.Fragment>
  );

  const softwareChoicesGrid = (
    <React.Fragment>
      <Grid item>
        <Grid
          className={classes.choicesContainer}
          container
          alignItems="center"
          direction="row"
        >
          <Grid item>
            <img className={classes.check} alt="checkmark" src={check} />
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
                      ? `a Web Application, an ${platforms[1].title}, and an ${
                          platforms[2].title
                        }.`
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
            <img className={classes.check} alt="checkmark" src={check} />
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
                      .map(feature => <span>{`${feature.title}, `}</span>)
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
            <img className={classes.check} alt="checkmark" src={check} />
          </Grid>
          <Grid item>
            <p className={classes.choices}>
              {customFeatures.length > 0
                ? "The custom features will be of "
                : "No custom features selected"}
              {customFeatures.map(customFeature => (
                <span>{`${customFeature.title.toLowerCase()}, `}</span>
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
    </React.Fragment>
  );

  return (
    <MuiThemeProvider theme={CustomTheme}>
      <Grid
        container
        justify={matchesMD ? "center" : "space-between"}
        direction="row"
      >
        <Grid
          className={classes.titleContainer}
          align={matchesMD ? "center" : null}
          item
        >
          <Grid container direction="column">
            <Grid item>
              <div className={classes.title}>Estimate</div>
            </Grid>
            <Grid className={classes.animation} item>
              <Lottie
                options={defaultOptions}
                height={matchesMD ? 200 : 400}
                width={matchesMD ? 300 : 600}
              />
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
                                  }
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
                            align={matchesMD ? "center" : null}
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
                          <Hidden mdDown>
                            {service === "Custom Software Development" ||
                            service === "iOS/Android App Development"
                              ? softwareChoicesGrid
                              : service === "Website Development"
                              ? websiteChoicesGrid
                              : null}
                          </Hidden>

                          <Grid
                            className={classes.buttonContainer}
                            align={matchesMD ? "center" : null}
                            justify={matchesMD ? "center" : null}
                            item
                          >
                            <Button
                              onClick={onMessageSend}
                              disabled={disableRequest()}
                              className={classes.buttonConfirm}
                              variant="contained"
                            >
                              Place Request
                              <img
                                className={classes.send}
                                alt="paper airplane"
                                src={send}
                              />
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
              autoHideDuration={35}
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
    </MuiThemeProvider>
  );
}
