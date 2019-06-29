import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#0B72B9";
const arcGrey = "#868686";

export default createMuiTheme({
  palette: {
    primary: {
      main: `${arcBlue}`
    },
    secondary: {
      main: "#FFBA60"
    }
  },
  typography: {
    main: {
      fontFamily: "Raleway",
      fontSize: 32,
      color: `${arcBlue}`,
      fontWeight: "bold"
    },
    secondary: {
      fontFamily: "Roboto-Light",
      fontSize: 24,
      fontWeight: "bold",
      color: `${arcGrey}`
    },
    heroText: {
      fontFamily: "Raleway",
      fontWeight: "bold",
      fontSize: "40px",
      color: `${arcBlue}`
    }
  }
});
