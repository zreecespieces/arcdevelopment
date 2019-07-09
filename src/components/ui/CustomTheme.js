import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#0B72B9";
const arcGrey = "#868686";

export default createMuiTheme({
  palette: {
    primary: {
      main: `${arcBlue}`
    },
    secondary: {
      main: "#FFBA60",
      dark: "#FF9000"
    }
  },
  typography: {
    main: {
      fontFamily: "Raleway",
      fontSize: "2em",
      color: `${arcBlue}`,
      fontWeight: "bold"
    },
    mainGrey: {
      fontFamily: "Raleway",
      fontSize: "2em",
      color: `${arcGrey}`,
      fontWeight: "bold"
    },
    secondary: {
      fontFamily: "Roboto-Light",
      fontSize: "1.5em",
      fontWeight: "bold",
      color: `${arcGrey}`
    },
    blueSecondary: {
      fontFamily: "Roboto-Light",
      fontSize: "1.25em",
      fontWeight: "bold",
      color: `${arcBlue}`
    },
    heroText: {
      fontFamily: "Raleway",
      fontWeight: "bold",
      fontSize: "2.5em",
      color: `${arcBlue}`
    },
    mission: {
      fontFamily: "Raleway",
      fontSize: "1.5em",
      fontStyle: "italic",
      color: `${arcBlue}`
    }
  },
  input: {
    fontFamily: "Roboto-Light",
    fontWeight: "bold",
    color: `${arcGrey}`,
    underline: `${arcBlue}`
  },
  messageInput: {
    fontFamily: "Roboto-Light",
    fontWeight: "bold",
    color: `${arcGrey}`,
    underline: `${arcBlue}`,
    border: `2px solid ${arcBlue}`,
    borderRadius: "5px"
  },
  overrides: {
    MuiFormLabel: {
      root: {
        color: `${arcBlue}`
      }
    },
    MuiInput: {
      underline: {
        "&:before": {
          //underline color when textfield is inactive
          borderBottom: `2px solid ${arcBlue}`
        },
        "&:hover:not($disabled):before": {
          //underline color when hovered
          borderBottom: `2px solid ${arcBlue}`
        }
      }
    }
  }
});
