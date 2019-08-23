import { makeStyles } from "@material-ui/core/styles";

import repeatingBackground from "../../static/pictures/repeatingBackgroundLarge.svg";
import infoBackground from "../../static/pictures/infoBackground.svg";

export default makeStyles(theme => ({
  container: {
    width: "100%"
  },
  subContainer: {
    paddingLeft: "5%",
    [theme.breakpoints.down("md")]: {
      padding: "0%"
    }
  },
  subContainerRight: {
    paddingRight: "5%",
    [theme.breakpoints.down("md")]: {
      padding: "0%"
    }
  },
  gridItem: {
    height: "400px",
    [theme.breakpoints.down("md")]: {
      height: "600px"
    }
  },
  gridItemIOS: {
    height: "400px",
    [theme.breakpoints.down("md")]: {
      height: "600px"
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "15%",
      marginTop: "10%"
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "30%",
      marginTop: "10%"
    }
  },
  landingAnimation: {
    marginLeft: "8%",
    maxWidth: "800px",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto"
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
    fontSize: "15px",
    marginTop: "20%",
    height: "45px",
    width: "145px"
  },
  learnButtonHero: {
    borderColor: theme.palette.primary.main,
    borderWidth: 2,
    textTransform: "none",
    color: theme.palette.primary.main,
    borderRadius: "50px",
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "15px",
    marginTop: "20%",
    height: "45px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "40%"
    }
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
  learnButtonRevolution: {
    borderColor: theme.palette.primary.main,
    borderWidth: 2,
    textTransform: "none",
    color: theme.palette.primary.main,
    borderRadius: "50px",
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "15px",
    height: "45px"
  },
  learnButtonInfo: {
    borderColor: "white",
    borderWidth: 2,
    textTransform: "none",
    color: "white",
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
  softwareIcon: {
    backfaceVisibility: "hidden",
    marginLeft: "20%",
    [theme.breakpoints.down("md")]: {
      marginLeft: "50px"
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "50px",
      marginLeft: "0px"
    }
  },
  websiteIcon: {
    backfaceVisibility: "hidden",
    marginLeft: "20%",
    [theme.breakpoints.down("md")]: {
      marginLeft: "50px"
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "50px",
      marginLeft: "0px"
    }
  },
  mobileIcon: {
    backfaceVisibility: "hidden",
    marginLeft: "15%",
    [theme.breakpoints.down("md")]: {
      marginLeft: "50px"
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "50px",
      marginLeft: "0px"
    }
  },
  heroText: {
    ...theme.typography.heroText,
    marginLeft: "20%",
    [theme.breakpoints.down("md")]: {
      marginLeft: "0%"
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "5%",
      marginRight: "5%",
      fontSize: "2.25em"
    }
  },
  heroContainer: {
    marginBottom: "15%",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "25%"
    }
  },
  headline: {
    ...theme.typography.main
  },
  subtitle: {
    ...theme.typography.secondary,
    marginTop: "1%",
    [theme.breakpoints.down("md")]: {
      fontFamily: "Roboto",
      fontWeight: "normal"
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "95%"
    }
  },
  subtext: {
    ...theme.typography.secondary,
    marginTop: "6%",
    [theme.breakpoints.down("md")]: {
      fontFamily: "Roboto",
      fontWeight: "normal"
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "95%"
    }
  },
  specialText: {
    fontFamily: "Pacifico",
    fontWeight: 1,
    color: theme.palette.secondary.main
  },
  repeatingContainer: {
    height: "1400px",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      marginTop: "40%"
    }
  },
  repeatingBackground: {
    backgroundImage: `url(${repeatingBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%"
  },
  revolutionCard: {
    maxWidth: "1000px",
    position: "absolute",
    borderRadius: "30px",
    boxShadow: theme.shadows[10],
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "7%",
    [theme.breakpoints.down("md")]: {
      padding: "15%",
      maxWidth: "100%",
      width: "150vw",
      borderRadius: 0
    }
  },
  revolutionTitle: {
    ...theme.typography.main,
    fontWeight: "none",
    fontFamily: "Pacifico",
    textAlign: "center",
    fontSize: 40,
    marginBottom: "5%",
    [theme.breakpoints.down("md")]: {
      lineHeight: "1.25em"
    }
  },
  revolutionSubtitle: {
    ...theme.typography.secondary,
    textAlign: "center",
    marginBottom: "2%",
    [theme.breakpoints.down("md")]: {
      fontWeight: "normal",
      marginTop: "5%",
      marginBottom: "5%"
    },
    [theme.breakpoints.down("sm")]: {
      fontWeight: "normal",
      marginTop: "10%",
      marginBottom: "20%"
    }
  },
  infoContainer: {
    height: "1400px",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      height: "1200px"
    },
    [theme.breakpoints.down("xs")]: {
      height: "1000px"
    }
  },
  infoSubcontainer: {
    position: "absolute",
    top: "50%",
    paddingLeft: "5%",
    paddingRight: "5%",
    [theme.breakpoints.down("sm")]: {
      top: "40%"
    }
  },
  infoTitle: {
    ...theme.typography.main,
    color: "white",
    fontSize: 40
  },
  infoSubtitle: {
    ...theme.typography.secondary,
    fontSize: 20,
    fontWeight: "none",
    color: "white",
    marginTop: "5%",
    marginBottom: "5%"
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%"
  },
  aboutContainer: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: "50%"
    }
  },
  softwareContainer: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%"
    }
  }
}));
