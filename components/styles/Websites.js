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
    maxWidth: "700px",
    [theme.breakpoints.down("md")]: {
      fontWeight: "normal"
    }
  },
  paragraphAnalytics: {
    ...theme.typography.secondary,
    fontSize: 20,
    maxWidth: "450px",
    marginTop: "22%",
    [theme.breakpoints.down("md")]: {
      fontWeight: "normal",
      marginTop: "15%"
    }
  },
  paragraphEcommerce: {
    ...theme.typography.secondary,
    fontSize: 20,
    maxWidth: "500px",
    marginTop: "22%",
    marginLeft: "10%",
    [theme.breakpoints.down("md")]: {
      fontWeight: "normal",
      maxWidth: "300px"
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0%"
    }
  },
  paragraphSEOFirst: {
    ...theme.typography.secondary,
    fontSize: 20,
    maxWidth: "500px",
    marginTop: "10%",
    marginLeft: "10%",
    [theme.breakpoints.down("md")]: {
      fontWeight: "normal",
      marginLeft: "0%"
    }
  },
  paragraphSEO: {
    ...theme.typography.secondary,
    fontSize: 20,
    maxWidth: "500px",
    marginLeft: "10%",
    [theme.breakpoints.down("md")]: {
      fontWeight: "normal",
      marginLeft: "0%"
    }
  },
  paragraphOutreach: {
    ...theme.typography.secondary,
    fontSize: 20,
    maxWidth: "450px",
    marginTop: "15%",
    marginLeft: "10%",
    [theme.breakpoints.down("md")]: {
      fontWeight: "normal",
      marginLeft: "0%"
    }
  },
  arrow: {
    marginRight: "2%"
  },
  analytics: {
    marginLeft: "-13%",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0%"
    }
  },
  analyticsContainer: {
    marginLeft: "5%",
    marginTop: "15%",
    marginBottom: "15%",
    [theme.breakpoints.down("md")]: {
      marginBottom: "30%"
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "2%",
      marginBottom: "50%"
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0%"
    }
  },
  ecommerceContainer: {
    marginBottom: "15%",
    marginRight: "5%",
    [theme.breakpoints.down("md")]: {
      marginRight: "0%",
      marginBottom: "30%"
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: "0%",
      marginBottom: "50%"
    },
    [theme.breakpoints.down("xs")]: {
      marginRight: "0%"
    }
  },
  outreachContainer: {
    marginLeft: "5%",
    marginBottom: "15%",
    [theme.breakpoints.down("md")]: {
      marginLeft: "0%",
      marginBottom: "30%"
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "50%"
    }
  },
  seo: {
    marginLeft: "20%",
    [theme.breakpoints.down("md")]: {
      marginLeft: "0%"
    }
  },
  seoContainer: {
    marginBottom: "15%",
    marginRight: "5%",
    [theme.breakpoints.down("md")]: {
      marginRight: "0%",
      marginBottom: "30%"
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0%",
      marginBottom: "50%"
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "100%"
    }
  },
  mainTextContainer: {
    [theme.breakpoints.down("md")]: {
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "10%"
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "2.5%",
      paddingRight: "2.5%",
      marginBottom: "50%"
    }
  },
  outreach: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "5%",
      marginTop: "10%",
      marginBottom: "-10%"
    }
  }
}));
