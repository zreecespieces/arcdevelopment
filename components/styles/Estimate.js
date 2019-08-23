import {makeStyles} from "@material-ui/core/styles";

export default makeStyles(theme => ({
  title: {
    ...theme.typography.heroText
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
    ...theme.typography.mainGrey,
    fontWeight: "none",
    textTransform: "none",
    fontSize: 20,
    marginTop: "2%",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "-20%"
    }
  },
  confirmTitle: {
    ...theme.typography.heroText,
    fontSize: 32,
    marginTop: "5%"
  },
  input: {
    ...theme.input
  },
  heading: {
    ...theme.typography.main,
    fontWeight: "none",
    fontSize: 40
  },
  subheading: {
    ...theme.typography.secondary,
    fontSize: 16,
    textTransform: "none",
    [theme.breakpoints.down("md")]: {
      fontWeight: "normal"
    }
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
    fontSize: "20px",
    marginTop: "50%",
    marginBottom: "155%",
    height: "60px",
    width: "200px"
  },
  animation: {
    marginTop: "10%",
    [theme.breakpoints.down("md")]: {
      marginBottom: "20%"
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "50%"
    }
  },
  questions: {
    marginTop: "15%",
    marginBottom: "10%"
  },
  optionTitle: {
    ...theme.typography.main,
    fontWeight: "none",
    textTransform: "none",
    fontSize: 20,
    marginBottom: "5%"
  },
  questionIcon: {
    width: "150px",
    height: "150px"
  },
  questionContainer: {
    width: "375px",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.1)"
    },
    borderRadius: "0px !important",
    [theme.breakpoints.down("xs")]: {
      marginTop: "30%",
      width: "300px"
    }
  },
  selectedContainer: {
    width: "375px",
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark
    },
    borderRadius: "0px !important",
    [theme.breakpoints.down("xs")]: {
      marginTop: "30%",
      width: "300px"
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
    height: "50em",
    width: "80em",
    [theme.breakpoints.down("sm")]: {
      width: "35em",
      height: "50em"
    }
  },
  messageInputConfirm: {
    ...theme.messageInput,
    padding: "5%",
    marginTop: "10%"
  },
  buttonContainer: {
    marginTop: "40%",
    marginLeft: "20%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0%",
      marginTop: "25%",
      marginBottom: "25%"
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
    fontSize: "20px",
    height: "60px",
    width: "200px"
  },
  paragraph: {
    ...theme.typography.secondary,
    fontSize: 16,
    maxWidth: "350px"
  },
  paragraphContainer: {
    marginTop: "10%"
  },
  choices: {
    ...theme.typography.secondary,
    fontSize: 16,
    maxWidth: "350px",
    minWidth: "350px",
    width: "100%",
    marginLeft: "10%"
  },
  special: {
    color: theme.palette.secondary.main,
    fontFamily: "Raleway",
    fontSize: 32,
    marginLeft: "5%"
  },
  inputContainer: {
    marginTop: "3%"
  },
  choicesContainer: {
    marginTop: "5%"
  },
  questionsContainer: {
    [theme.breakpoints.down("lg")]: {
      maxWidth: "50%"
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%"
    }
  }
}));
