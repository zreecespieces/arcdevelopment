import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  title: {
    ...theme.typography.heroText,
    marginTop: "-1%"
  },
  heading: {
    ...theme.typography.main,
    [theme.breakpoints.down("md")]: {
      marginLeft: "0%"
    }
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
    maxWidth: "300px",
    [theme.breakpoints.down("md")]: {
      maxWidth: "400px",
      paddingLeft: "5%",
      paddingRight: "5%",
      fontWeight: "normal"
    }
  },
  middleIcons: {
    marginTop: "15%",
    marginBottom: "20%",
    [theme.breakpoints.down("md")]: {
      marginTop: "-40%",
      marginBottom: "-600px"
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "-20%",
      marginBottom: "35%"
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "0%",
      marginBottom: "35%"
    }
  },
  middleIconSpace: {
    marginLeft: "-2.25%",
    marginRight: "-2.25%",
    [theme.breakpoints.down("md")]: {
      marginTop: "50%",
      marginBottom: "30%",
      "@media (orientation: landscape) and (max-device-width: 1024px)": {
        marginBottom: "-10%"
      }
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "35%",
      "@media (orientation: landscape) and (max-device-width: 1024px)": {
        marginBottom: "30%"
      }
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
      marginTop: "15%",
      marginBottom: "15%"
    }
  },
  arrow: {
    marginRight: "2%"
  },
  automationAnimation: {
    marginLeft: "-85%",
    [theme.breakpoints.down("lg")]: {
      marginTop: "2%",
      marginLeft: "-75%"
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "0%",
      marginLeft: "-12%"
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "5%",
      marginLeft: "-25%"
    }
  },
  rootsImage: {
    height: "30em",
    width: "30em",
    marginBottom: "10%",
    marginTop: "300px",
    [theme.breakpoints.down("md")]: {
      marginTop: "0%"
    },
    [theme.breakpoints.down("xs")]: {
      height: "20em",
      width: "20em",
      marginTop: "50%"
    }
  },
  uxAnimation: {
    marginTop: "-45%",
    [theme.breakpoints.down("lg")]: {
      marginTop: "-35%"
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "0%",
      marginRight: "0%",
      marginBottom: "-40%"
    }
  },
  lastRow: {
    marginTop: "350px",
    marginBottom: "15%",
    [theme.breakpoints.down("md")]: {
      marginTop: "90px"
    }
  },
  scaleAnimationContainer: {
    marginTop: "-5%",
    [theme.breakpoints.down("lg")]: {
      marginTop: "5%",
      marginLeft: "10%"
    },
    [theme.breakpoints.down("md")]: {
      marginRight: "0%",
      marginTop: "-10%",
      marginLeft: "0%"
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "-10%"
    }
  },
  documentsAnimationContainer: {
    [theme.breakpoints.down("lg")]: {
      marginTop: "10%"
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "-5%"
    }
  },
  uxTextContainer: {
    [theme.breakpoints.down("md")]: {
      marginLeft: "5%"
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0%",
      marginRight: "6%",
      maxWidth: "60%"
    },
    [theme.breakpoints.down("xs")]: {
      padding: "2%",
      maxWidth: "100%",
      marginBottom: "50%",
      marginRight: "0%"
    }
  },
  scaleContainer: {
    [theme.breakpoints.down("lg")]: {
      marginLeft: "-5%"
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: "30%",
      marginLeft: "auto",
      marginRight: "auto"
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "30%"
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "15%"
    }
  },
  documentsContainer: {
    [theme.breakpoints.down("md")]: {
      marginBottom: "30%",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "100%"
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "30%",
      marginTop: "0%"
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "0%",
      marginTop: "50%"
    }
  },
  automationContainer: {
    [theme.breakpoints.down("md")]: {
      marginBottom: "50%",
      marginTop: "30%"
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "50%",
      marginLeft: "-6%"
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "0%",
      marginLeft: "0%"
    }
  },
  uxContainer: {
    [theme.breakpoints.down("lg")]: {
      marginLeft: "-15%"
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: "30%",
      marginLeft: "auto",
      marginRight: "auto"
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "0%",
      marginTop: "10%"
    }
  },
  headingContainer: {
    [theme.breakpoints.down("md")]: {
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  automationText: {
    [theme.breakpoints.down("lg")]: {
      maxWidth: "75%"
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%"
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "75%"
    }
  },
  scaleText: {
    [theme.breakpoints.down("lg")]: {
      maxWidth: "55%",
      marginRight: "4%"
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%"
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: "5%"
    },
    [theme.breakpoints.down("xs")]: {
      marginRight: "0%"
    }
  },
  documentsText: {
    [theme.breakpoints.down("lg")]: {
      maxWidth: "90%",
      marginLeft: "9%"
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
      marginLeft: "0%"
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "5%"
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0%"
    }
  },
  rootsContainer: {
    [theme.breakpoints.down("md")]: {
      marginLeft: "5%"
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0%"
    }
  }
}));
