import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  title: {
    ...theme.typography.heroText,
    marginTop: "-1%"
  },
  heading: {
    ...theme.typography.main
  },
  paragraphMain: {
    ...theme.typography.secondary,
    fontSize: 20,
    maxWidth: "800px",
    [theme.breakpoints.down("md")]: {
      fontWeight: "normal",
      paddingLeft: "5%",
      paddingRight: "5%"
    }
  },
  paragraph: {
    ...theme.typography.secondary,
    fontSize: 20,
    maxWidth: "450px",
    [theme.breakpoints.down("md")]: {
      fontWeight: "normal"
    }
  },
  middleIcons: {
    marginTop: "15%",
    marginBottom: "10%"
  },
  middleIconMiddle: {
    marginLeft: "1%",
    marginRight: "1%",
    marginTop: "-10%",
    [theme.breakpoints.down("lg")]: {
      marginLeft: "-5%",
      marginRight: "-5%",
      marginTop: "-5%"
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "-20%",
      marginRight: "-20%",
      marginTop: "-5%",
      zIndex: 0
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "-5%",
      marginLeft: "20%",
      marginRight: "20%"
    }
  },
  bottomIcons: {
    marginBottom: "25%",
    marginTop: "-5%",
    [theme.breakpoints.down("lg")]: {
      marginTop: "15%"
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "0%"
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "50%"
    }
  },
  arrow: {
    marginRight: "2%"
  },
  extendAccess: {
    marginTop: "5%",
    [theme.breakpoints.down("lg")]: {
      marginTop: "2%"
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "20%"
    }
  },
  integrationContainer: {
    [theme.breakpoints.down("md")]: {
      maxWidth: "30%",
      zIndex: 1
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "25%",
      padding: "5%",
      maxWidth: "100%"
    }
  },
  platformContainer: {
    [theme.breakpoints.down("md")]: {
      marginBottom: "20%",
      maxWidth: "30%",
      zIndex: 1
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "40%",
      marginTop: "0%"
    },
    [theme.breakpoints.down("xs")]: {
      padding: "5%",
      marginBottom: "75%",
      maxWidth: "100%"
    }
  },
  extendContainer: {
    [theme.breakpoints.down("md")]: {
      marginLeft: "-5%",
      marginRight: "-5%"
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "100%",
      marginRight: "100%",
      marginTop: "40%",
      marginBottom: "40%"
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "50%",
      marginBottom: "50%"
    }
  },
  headingContainer: {
    [theme.breakpoints.down("md")]: {
      marginLeft: "auto",
      marginRight: "auto"
    }
  }
}));
