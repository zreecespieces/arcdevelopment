import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  title: {
    ...theme.typography.heroText
  },
  titleContainer: {
    marginLeft: "5%",
    [theme.breakpoints.down("md")]: {
      marginLeft: "0%"
    }
  },
  heading: {
    ...theme.typography.main
  },
  paragraphMain: {
    ...theme.typography.secondary,
    fontSize: 20,
    maxWidth: "700px",
    [theme.breakpoints.down("md")]: {
      fontWeight: "normal"
    }
  },
  mission: {
    ...theme.typography.mission,
    maxWidth: "1300px",
    [theme.breakpoints.down("lg")]: {
      paddingLeft: "5%",
      paddingRight: "5%"
    }
  },
  missionContainer: {
    marginTop: "5%",
    marginBottom: "10%",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "50%"
    }
  },
  boldLine: {
    ...theme.typography.secondary,
    fontWeight: "bold",
    fontStyle: "italic",
    fontFamily: "Roboto"
  },
  historyContainer: {
    marginBottom: "25%",
    [theme.breakpoints.down("sm")]: {
      padding: "5%"
    }
  },
  historyImageContainer: {
    marginTop: "3%",
    [theme.breakpoints.down("md")]: {
      marginTop: "10%",
      marginLeft: "2.5%",
      marginRight: "2.5%"
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "3%"
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "-5%",
      marginBottom: "50%"
    }
  },
  historyHeading: {
    marginBottom: "3%"
  },
  avatar: {
    width: "500px",
    height: "500px",
    [theme.breakpoints.down("xs")]: {
      width: "350px",
      height: "350px"
    }
  },
  puppyContainer: {
    marginRight: "8%",
    marginBottom: "30%",
    [theme.breakpoints.down("md")]: {
      marginBottom: "0%"
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: "1%",
      marginBottom: "50%"
    },
    [theme.breakpoints.down("xs")]: {
      marginRight: "0%"
    }
  },
  yearbookContainer: {
    marginLeft: "8%",
    [theme.breakpoints.down("sm")]: {
      marginRight: "8%",
      marginTop: "20%"
    }
  },
  bioContainer: {
    marginLeft: "10%",
    marginRight: "10%",
    [theme.breakpoints.down("md")]: {
      marginLeft: "0%",
      marginRight: "0%"
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "2.5%",
      paddingRight: "2.5%"
    }
  },
  caption: {
    marginTop: "-3%"
  }
}));
