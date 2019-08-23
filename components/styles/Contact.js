import { makeStyles } from "@material-ui/core/styles";
import background from "../../static/pictures/background.jpg";
import mobileBackground from "../../static/pictures/mobileBackground.jpg";

export default makeStyles(theme => ({
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
