import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#0B72B9";
const arcGrey = "#868686";

export default createMuiTheme({
  props: {
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true // No more ripple, on the whole application 💣!
    }
  },
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
      fontFamily: "Raleway, sans-serif",
      fontSize: "2em",
      color: `${arcBlue}`,
      fontWeight: "bold"
    },
    mainGrey: {
      fontFamily: "Raleway, sans-serif",
      fontSize: "2em",
      color: `${arcGrey}`,
      fontWeight: "bold"
    },
    secondary: {
      fontFamily: "Roboto, sans-serif",
      fontSize: "1.5em",
      fontWeight: "bold, 300",
      color: `${arcGrey}`
    },
    blueSecondary: {
      fontFamily: "Roboto, sans-serif",
      fontSize: "1.25em",
      fontWeight: "bold, 300",
      color: `${arcBlue}`
    },
    heroText: {
      fontFamily: "Raleway, sans-serif",
      fontWeight: "bold",
      fontSize: "3em",
      color: `${arcBlue}`
    },
    mission: {
      fontFamily: "Raleway, sans-serif",
      fontSize: "1.75em",
      fontStyle: "italic",
      color: `${arcBlue}`
    }
  },
  input: {
    fontFamily: "Roboto, sans-serif",
    fontWeight: "bold, 300",
    color: `${arcGrey}`,
    underline: `${arcBlue}`
  },
  messageInput: {
    fontFamily: "Roboto, sans-serif",
    fontWeight: "bold, 300",
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
