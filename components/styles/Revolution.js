import { makeStyles } from "@material-ui/core/styles";
import consultationBackground from "../../static/icons/consultation.svg";
import consultationLarge from "../../static/icons/consultation_large.svg";
import consultationMobile from "../../static/icons/consultation_mobile.svg";
import mockupBackground from "../../static/icons/mockup.svg";
import mockupLarge from "../../static/icons/mockup_large.svg";
import mockupMobile from "../../static/icons/mockup_mobile.svg";
import reviewBackground from "../../static/icons/review.svg";
import reviewLarge from "../../static/icons/review_large.svg";
import reviewMobile from "../../static/icons/review_mobile.svg";
import designBackground from "../../static/icons/design.svg";
import designMobile from "../../static/icons/design_mobile.svg";
import buildBackground from "../../static/icons/construction.svg";
import buildLarge from "../../static/icons/construction_large.svg";
import buildMedium from "../../static/icons/construction_medium.svg";
import buildMobile from "../../static/icons/construction_mobile.svg";
import launchBackground from "../../static/icons/launch.svg";
import launchMedium from "../../static/icons/launch_medium.svg";
import launchMobile from "../../static/icons/launch_mobile.svg";
import iterateBackground from "../../static/icons/iterate.svg";
import iterateLarge from "../../static/icons/iterate_large.svg";
import iterateMedium from "../../static/icons/iterate_medium.svg";
import iterateMobile from "../../static/icons/iterate_mobile.svg";
import maintainBackground from "../../static/icons/maintain.svg";
import maintainLarge from "../../static/icons/maintain_large.svg";
import maintainMedium from "../../static/icons/maintain_medium.svg";
import maintainMobile from "../../static/icons/maintain_mobile.svg";

export default makeStyles(theme => ({
  title: {
    ...theme.typography.heroText,
    fontFamily: "Pacifico",
    fontSize: 50,
    [theme.breakpoints.down("xs")]: {
      lineHeight: 1
    }
  },
  titleContainer: {
    marginLeft: "7%",
    [theme.breakpoints.down("md")]: {
      marginLeft: "0%",
      marginTop: "-3%"
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0%",
      marginTop: "5%"
    }
  },
  heading: {
    ...theme.typography.main
  },
  headingDark: {
    ...theme.typography.main,
    color: "black"
  },
  paragraphMain: {
    ...theme.typography.secondary,
    fontSize: 20,
    maxWidth: "700px",
    [theme.breakpoints.down("md")]: {
      fontWeight: "normal"
    }
  },
  paragraphSmall: {
    ...theme.typography.secondary,
    color: "white",
    maxWidth: "410px",
    [theme.breakpoints.down("md")]: {
      fontWeight: "normal"
    }
  },
  paragraphSmallBuild: {
    ...theme.typography.secondary,
    color: "white",
    fontSize: "1.5em",
    maxWidth: "410px",
    [theme.breakpoints.down("md")]: {
      fontWeight: "normal",
      fontSize: "1.25em"
    }
  },
  paragraphContainer: {
    position: "absolute",
    paddingTop: "10%",
    paddingLeft: "5%",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "0%"
    },
    [theme.breakpoints.down("xs")]: {
      padding: "5%"
    }
  },
  technologyContainer: {
    marginTop: "15%",
    marginBottom: "40%"
  },
  visionContainer: {
    marginTop: "10%",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "20%"
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "50%"
    }
  },
  mobileText: {
    [theme.breakpoints.down("lg")]: {
      maxWidth: "40%"
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%"
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "90%"
    }
  },
  imageContainer: {
    marginTop: "4%",
    [theme.breakpoints.down("lg")]: {
      marginTop: "-8%"
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "-20%"
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "-5%"
    }
  },
  processHeading: {
    marginBottom: "75px",
    [theme.breakpoints.down("md")]: {
      marginBottom: "0%"
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0%"
    }
  },
  consultationBackground: {
    backgroundImage: `url(${consultationBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    [theme.breakpoints.down("lg")]: {
      backgroundImage: `url(${consultationLarge})`
    },
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${consultationMobile})`
    }
  },
  mockupBackground: {
    backgroundImage: `url(${mockupBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    [theme.breakpoints.down("lg")]: {
      backgroundImage: `url(${mockupLarge})`
    },
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mockupMobile})`
    }
  },
  reviewBackground: {
    backgroundImage: `url(${reviewBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    [theme.breakpoints.down("lg")]: {
      backgroundImage: `url(${reviewLarge})`
    },
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${reviewMobile})`
    }
  },
  designBackground: {
    backgroundImage: `url(${designBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${designMobile})`
    }
  },
  buildBackground: {
    backgroundImage: `url(${buildBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    [theme.breakpoints.down("lg")]: {
      backgroundImage: `url(${buildLarge})`
    },
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${buildMedium})`
    },
    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${buildMobile})`
    }
  },
  launchBackground: {
    backgroundImage: `url(${launchBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${launchMedium})`
    },
    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${launchMobile})`
    }
  },
  maintainBackground: {
    backgroundImage: `url(${maintainBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    [theme.breakpoints.down("lg")]: {
      backgroundImage: `url(${maintainLarge})`
    },
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${maintainMedium})`
    },
    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${maintainMobile})`
    }
  },
  iterateBackground: {
    backgroundImage: `url(${iterateBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    [theme.breakpoints.down("lg")]: {
      backgroundImage: `url(${iterateLarge})`
    },
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${iterateMedium})`
    },
    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${iterateMobile})`
    }
  },
  sectionContainer: {
    height: "1400px",
    position: "relative"
  },
  consultationContainer: {
    height: "1400px",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      marginTop: "10%"
    }
  },
  animationContainer: {
    [theme.breakpoints.down("xs")]: {
      marginBottom: "30%"
    }
  }
}));
