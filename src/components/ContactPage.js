import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CustomTheme from "../components/ui/CustomTheme";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Snackbar from "@material-ui/core/Snackbar";
import { MuiThemeProvider } from "@material-ui/core/styles";

import background from "../assets/background.jpg";
import phone from "../assets/phone.svg";
import email from "../assets/email.svg";
import send from "../assets/send.svg";

const useStyles = makeStyles(theme => ({
  title: {
    ...CustomTheme.typography.heroText
  },
  confirmTitle: {
    ...CustomTheme.typography.heroText,
    fontSize: 32,
    marginTop: "5%",
    marginBottom: "2%"
  },
  subtitle: {
    ...CustomTheme.typography.blueSecondary
  },
  subtitleWhite: {
    ...CustomTheme.typography.secondary,
    fontWeight: "none",
    color: "white"
  },
  titleContainer: {
    paddingLeft: "5%",
    paddingRight: "3%"
  },
  heading: {
    ...CustomTheme.typography.main
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%"
  },
  backgroundContainer: {
    height: "74vh",
    width: "75%",
    position: "relative",
    marginTop: "-3%"
  },
  backgroundText: {
    position: "absolute",
    marginTop: "20%",
    paddingLeft: "5%"
  },
  phoneContainer: {
    marginTop: "10%"
  },
  info: {
    ...CustomTheme.typography.blueSecondary,
    fontSize: 16
  },
  emailContainer: {
    marginBottom: "10%"
  },
  input: {
    ...CustomTheme.input
  },
  messageInput: {
    ...CustomTheme.messageInput,
    padding: "5%"
  },
  messageInputConfirm: {
    ...CustomTheme.messageInput,
    padding: "5%",
    marginTop: "10%"
  },
  messageContainer: {
    marginTop: "20%",
    borderBottom: "none !important"
  },
  buttonStyle: {
    backgroundColor: CustomTheme.palette.secondary.main,
    color: "white",
    "&:hover": {
      backgroundColor: CustomTheme.palette.secondary.light
    },
    borderRadius: "50px",
    fontFamily: "Pacifico",
    textTransform: "none",
    marginTop: "10%",
    fontSize: "15px",
    height: "45px"
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
    fontSize: "15px",
    height: "45px",
    width: "10vw"
  },
  send: {
    paddingLeft: "10%",
    verticalAlign: "middle"
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
    fontSize: "25px",
    height: "80px",
    width: "205px",
    marginLeft: "20%",
    marginTop: "50%"
  },
  dialog: {
    maxHeight: "100%",
    height: "45vh"
  },
  dialogContent: {
    paddingLeft: "35%",
    paddingRight: "35%"
  },
  buttonContainer: {
    marginTop: "25%"
  },
  cancelButton: {
    marginTop: "2%"
  }
}));

export default function ContactPage() {
  const classes = useStyles();

  const [messageField, setMessage] = useState("");
  const subject = "Message recieved.";
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const defaultState = [
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
    axios
      .post(
        `https://us-central1-arc-development-website.cloudfunctions.net/sendMail?dest=zachary@arcsoftwaredevelopment.com&subj=${subject}&name=${
          inputs[0].value
        }&number=${inputs[1].value}&email=${
          inputs[2].value
        }&message=${messageField}`
      )
      .then(function(response) {
        setDialogOpen(false);
        setMessage("");
        setInputs(defaultState);
      })
      .catch(function(error) {
        console.log(error);
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

  const onMessageSend = () => {
    setSnackbarOpen(true);
    setSnackbarMessage("Message sent successfully");
    onDialogSend();
  };

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
    <MuiThemeProvider theme={CustomTheme}>
      <Grid container justify="space-between" direction="row">
        <Grid className={classes.titleContainer} item>
          <Grid container spacing={1} direction="column">
            <Grid item>
              <div className={classes.title}>Contact Us</div>
              <div className={classes.subtitle}>We're waiting.</div>
            </Grid>
            <Grid className={classes.phoneContainer} item>
              <Grid container spacing={2} direction="row">
                <Grid item>
                  <img alt="phone icon" src={phone} />
                </Grid>
                <Grid className={classes.info} item>
                  <div>(316) 358-9320</div>
                </Grid>
              </Grid>
            </Grid>
            <Grid className={classes.emailContainer} item>
              <Grid container spacing={2} direction="row">
                <Grid item>
                  <img
                    style={{ verticalAlign: "bottom" }}
                    alt="email icon"
                    src={email}
                  />
                </Grid>
                <Grid className={classes.info} item>
                  <div>zachary@arcsoftwaredevelopment.com</div>
                </Grid>
              </Grid>
            </Grid>
            {inputs.map(input => (
              <Grid item key={input.id}>
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
                Send Message
                <img className={classes.send} alt="paper airplane" src={send} />
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
                <Grid item key={input.id}>
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
                    onClick={onMessageSend}
                    className={classes.buttonConfirm}
                    variant="contained"
                  >
                    Send Message
                    <img
                      className={classes.send}
                      alt="paper airplane"
                      src={send}
                    />
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
          autoHideDuration={35}
        />
        <Grid className={classes.backgroundContainer} item>
          <Grid className={classes.backgroundText} container>
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
                    to="/revolution"
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
                to="/estimate"
                className={classes.estimateButton}
                variant="contained"
              >
                {"Free Estimate   "}
              </Button>
            </Grid>
          </Grid>
          <div className={classes.background} />
        </Grid>
      </Grid>
    </MuiThemeProvider>
  );
}
