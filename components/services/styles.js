import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  gridItem: {
    height: "400px",
    marginLeft: "50%",
    [theme.breakpoints.down("md")]: {
      marginLeft: "0%"
    },
    [theme.breakpoints.down("sm")]: {
      height: "700px"
    }
  },
  gridItemSoftware: {
    height: "400px",
    marginLeft: "5%",
    [theme.breakpoints.down("md")]: {
      marginLeft: "0%"
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0%",
      height: "630px"
    }
  },
  gridItemIos: {
    height: "400px",
    marginLeft: "50%",
    [theme.breakpoints.down("lg")]: {
      marginTop: "2%"
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "0%",
      marginTop: "-3%"
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "0%",
      height: "700px"
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
  icon: {
    backfaceVisibility: "hidden",
    marginLeft: "10%",
    maxWidth: "85%",
    [theme.breakpoints.down("md")]: {
      marginLeft: "50px",
      maxWidth: "100%",
      marginTop: "5%"
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px",
      marginTop: "50px"
    }
  },
  softwareIcon: {
    backfaceVisibility: "hidden",
    marginLeft: "50%",
    [theme.breakpoints.down("md")]: {
      marginTop: "10%",
      marginLeft: "50px"
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px",
      marginTop: "50px"
    }
  },
  websiteIcon: {
    backfaceVisibility: "hidden",
    marginLeft: "5%",
    marginTop: "2%",
    [theme.breakpoints.down("md")]: {
      marginLeft: "50px"
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px",
      marginTop: "50px"
    }
  },
  headline: {
    ...theme.typography.main
  },
  subtitle: {
    ...theme.typography.secondary,
    marginTop: "1%",
    [theme.breakpoints.down("md")]: {
      fontWeight: "normal"
    },
    [theme.breakpoints.down("xs")]: {}
  },
  subtext: {
    ...theme.typography.secondary,
    marginTop: "6%",
    [theme.breakpoints.down("md")]: {
      fontWeight: "normal"
    },
    [theme.breakpoints.down("xs")]: {}
  },
  specialText: {
    fontFamily: "Pacifico",
    fontWeight: 1,
    color: theme.palette.secondary.main
  },
  websiteContainer: {
    [theme.breakpoints.down("xs")]: {
      maxWidth: "95%",
      marginLeft: "0%"
    }
  }
}));
