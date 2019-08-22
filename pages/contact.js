import React, { useState } from "react";
import Link from "../src/Link";
import axios from "axios";
import Head from "next/head";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import background from "../static/pictures/background.jpg";
import mobileBackground from "../static/pictures/mobileBackground.jpg";
import phone from "../static/icons/phone.svg";
import email from "../static/icons/email.svg";
import send from "../static/icons/send.svg";

import ReactGA from "react-ga";
ReactGA.initialize("UA-145847500-1");

const useStyles = makeStyles(theme => ({
  title: {
    ...theme.typography.heroText
  },
  confirmTitle: {
    ...theme.typography.heroText,
    fontSize: 32,
    marginTop: "5%",
    marginBottom: "2%"
  },
  subtitle: {
    ...theme.typography.blueSecondary,
    marginLeft: "1%",
    [theme.breakpoints.down("md")]: {
      fontWeight: "normal"
    }
  },
  subtitleWhite: {
    ...theme.typography.secondary,
    fontWeight: "none",
    color: "white"
  },
  container: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "1%",
    [theme.breakpoints.down("lg")]: {
      marginTop: "3%"
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "-2%"
    }
  },
  heading: {
    ...theme.typography.main
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`
    }
  },
  backgroundContainer: {
    height: "75em",
    width: "75%",
    position: "relative",
    marginTop: "-5%",
    [theme.breakpoints.down("lg")]: {
      width: "70%"
    },
    [theme.breakpoints.down("md")]: {
      width: "100%"
    }
  },
  backgroundText: {
    position: "absolute",
    marginTop: "20%",
    paddingLeft: "5%",
    [theme.breakpoints.down("lg")]: {
      marginTop: "300px"
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "400px"
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "45%"
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "60%"
    }
  },
  phoneContainer: {
    marginTop: "10%",
    [theme.breakpoints.down("md")]: {
      marginTop: "15%"
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0%",
      marginBottom: "7%"
    }
  },
  info: {
    ...theme.typography.blueSecondary,
    fontSize: 16,
    [theme.breakpoints.down("md")]: {
      fontWeight: "normal"
    }
  },
  emailContainer: {
    marginBottom: "10%",
    [theme.breakpoints.down("xs")]: {
      marginTop: "-8%",
      marginLeft: "0%",
      marginBottom: "15%"
    }
  },
  input: {
    ...theme.input,
    [theme.breakpoints.down("md")]: {
      fontWeight: "normal",
      fontFamily: "Roboto"
    }
  },
  messageInput: {
    ...theme.messageInput,
    padding: "5%",
    [theme.breakpoints.down("md")]: {
      fontWeight: "normal",
      fontFamily: "Roboto"
    }
  },
  messageInputConfirm: {
    ...theme.messageInput,
    padding: "5%",
    marginTop: "10%",
    [theme.breakpoints.down("md")]: {
      fontWeight: "normal",
      fontFamily: "Roboto"
    }
  },
  messageContainer: {
    marginTop: "20%",
    borderBottom: "none !important"
  },
  buttonStyle: {
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    },
    borderRadius: "50px",
    fontFamily: "Pacifico",
    textTransform: "none",
    marginTop: "10%",
    fontSize: "15px",
    height: "45px",
    width: "250px",
    [theme.breakpoints.down("md")]: {
      width: "200px",
      marginBottom: "100%"
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "5%"
    }
  },
  buttonConfirm: {
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    },
    borderRadius: "50px",
    fontFamily: "Pacifico",
    textTransform: "none",
    fontSize: "15px",
    height: "45px",
    width: "14vw",
    [theme.breakpoints.down("md")]: {
      width: "35vw"
    },
    [theme.breakpoints.down("xs")]: {
      width: "50vw"
    }
  },
  send: {
    paddingLeft: "10%",
    verticalAlign: "middle"
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
    fontSize: "25px",
    height: "80px",
    width: "205px",
    marginLeft: "20%",
    marginTop: "50%",
    [theme.breakpoints.down("md")]: {
      marginLeft: "-2%"
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0%",
      width: "160px",
      height: "60px",
      fontSize: "20px"
    }
  },
  dialog: {
    maxHeight: "100%",
    height: "55vh",
    [theme.breakpoints.down("md")]: {
      height: "60vh"
    },
    [theme.breakpoints.down("sm")]: {
      height: "60vh"
    },
    [theme.breakpoints.down("xs")]: {
      height: "70vh"
    }
  },
  dialogContent: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  buttonContainer: {
    marginTop: "25%"
  },
  cancelButton: {
    marginTop: "2%"
  },
  inputContainer: {
    marginTop: "2.5%",
    marginBottom: "2.5%"
  },
  phoneIcon: {
    marginRight: "10px"
  }
}));

export default function ContactPage() {
  const classes = useStyles();

  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const [messageField, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const defaultState = [
    {
      id: "name",
      label: "Name",
      value: "",
      error: false,
      type: "default",
      helperText: null,
      getHelperText: error => (error ? null : null),
      isValid: value => true
    },
    {
      id: "phone",
      label: "Phone",
      value: "",
      error: false,
      type: "tel",
      helperText: null,
      getHelperText: error => (error ? "Phone number invalid" : null),
      isValid: value =>
        /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(value)
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      value: "",
      error: false,
      helperText: null,
      getHelperText: error => (error ? "Email invalid" : null),
      isValid: value => /\S+@\S+\.\S+/.test(value)
    }
  ];

  const [inputs, setInputs] = useState(defaultState);

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
    setLoading(true);

    axios
      .post(
        `https://us-central1-arc-development-website.cloudfunctions.net/sendMail?dest=zachary@arcsoftwaredevelopment.com&name=${inputs[0].value}&number=${inputs[1].value}&email=${inputs[2].value}&message=${messageField}`
      )
      .then(function(response) {
        setDialogOpen(false);
        setMessage("");
        setInputs(defaultState);
        setSnackbarOpen(true);
        setSnackbarMessage("Message sent successfully");
        setLoading(false);
        ReactGA.event({
          category: "Contact Us",
          action: `Message Sent`
        });

        axios
          .post(
            `https://us-central1-arc-development-website.cloudfunctions.net/sendMail?dest=${inputs[2].value}&name=${inputs[0].value}&number=${inputs[1].value}&email=${inputs[2].value}&message=${messageField}`
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
  };

  const onSnackbarClose = (e, reason) => {
    if (reason === "clickaway") {
      setSnackbarOpen(false);
      setSnackbarMessage("");
    }

    setSnackbarOpen(false);
    setSnackbarMessage("");
  };

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

  const handleContactEstimate = () => {
    ReactGA.event({
      category: "Estimate Button",
      action: `Estimate Button Contact Page Pressed`
    });
  };

  const paperAirPlaneIcon = (
    <React.Fragment>
      Send Message
      <img className={classes.send} alt="paper airplane" src={send} />
    </React.Fragment>
  );

  return (
    <Grid
      container
      justify={matchesXS ? "center" : "space-between"}
      direction="row"
    >
      <Head>
        <title>Contact Us | Arc Development</title>
        <meta
          name="description"
          content="We would love to hear from you! Send us a message, email, or give us a call so we can talk about how Arc Development will help your business with custom software. | Wichita, KS"
        />
        <link
          href="https://arcsoftwaredevelopment.com/contact"
          rel="canonical"
          key="canonical"
        />
      </Head>
      <Grid className={classes.container} item>
        <Grid container spacing={1} direction="column">
          <Grid
            align={matchesMD ? "center" : null}
            className={classes.titleContainer}
            item
          >
            <div className={classes.title}>Contact Us</div>
            <div className={classes.subtitle}>We're waiting.</div>
          </Grid>
          <Grid className={classes.phoneContainer} item>
            <Grid container direction="row">
              <Grid item>
                <img
                  alt="phone icon"
                  src={phone}
                  className={classes.phoneIcon}
                />
              </Grid>
              <Grid className={classes.info} item>
                <a
                  style={{ textDecoration: "none", color: "inherit" }}
                  href="tel:(316) 358-9320"
                >
                  (316) 358-9320
                </a>
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.emailContainer} item>
            <Grid container direction="row">
              <Grid xs={1} item>
                <img
                  style={{ verticalAlign: "middle" }}
                  alt="email icon"
                  className={classes.emailIcon}
                  src={email}
                />
              </Grid>
              <Grid className={classes.info} xs={11} item>
                <a
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    marginLeft: "5px"
                  }}
                  href="mailto:zachary@arcsoftwaredevelopment.com"
                >
                  zachary@arcsoftwaredevelopment.com
                </a>
              </Grid>
            </Grid>
          </Grid>
          <div>
            {inputs.map(input => (
              <Grid item className={classes.inputContainer} key={input.id}>
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
          </div>
          <Grid className={classes.messageContainer} item>
            <TextField
              InputProps={{
                classes: {
                  input: classes.messageInput
                },
                disableUnderline: true
              }}
              multiline
              rows={8}
              fullWidth
              value={messageField}
              onChange={e => setMessage(e.target.value)}
            />
          </Grid>
          <Grid align="center" item>
            <Button
              disabled={messageField === "" ? true : false}
              onClick={onDialogOpen}
              className={classes.buttonStyle}
              variant="contained"
            >
              {paperAirPlaneIcon}
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        classes={{
          paper: classes.dialog
        }}
        open={dialogOpen}
        fullWidth={true}
        maxWidth="md"
        onClose={onDialogClose}
      >
        <div className={classes.confirmTitle} style={{ textAlign: "center" }}>
          Confirm Message
        </div>
        <DialogContent className={classes.dialogContent}>
          <Grid container direction="column">
            {inputs.map(input => (
              <Grid item className={classes.inputContainer} key={input.id}>
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
                rows={4}
                fullWidth
                value={messageField}
                onChange={e => setMessage(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid className={classes.buttonContainer} item>
            <Grid container direction="row" justify="space-around">
              <Grid className={classes.cancelButton} item>
                <Button onClick={onDialogClose} color="primary">
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button
                  onClick={onDialogSend}
                  className={classes.buttonConfirm}
                  variant="contained"
                >
                  {loading ? <CircularProgress /> : paperAirPlaneIcon}
                </Button>
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
      <Grid className={classes.backgroundContainer} item>
        <Grid
          className={classes.backgroundText}
          justify={matchesMD ? "center" : null}
          container
        >
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <div className={classes.title}>Simple Software.</div>
                <div className={classes.title}>Revolutionary Results.</div>
              </Grid>
              <Grid item>
                <div className={classes.subtitleWhite}>
                  Take advantage of the 21st Century.
                </div>
              </Grid>
              <Grid item>
                <Button
                  component={Link}
                  href="/revolution"
                  className={classes.learnButton}
                  variant="outlined"
                >
                  <span style={{ marginRight: 5 }}>Learn More</span>
                  {arrowSVG}
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Button
              component={Link}
              href="/estimate"
              className={classes.estimateButton}
              variant="contained"
              onClick={handleContactEstimate}
            >
              {"Free Estimate   "}
            </Button>
          </Grid>
        </Grid>
        <div className={classes.background} />
      </Grid>
    </Grid>
  );
}
