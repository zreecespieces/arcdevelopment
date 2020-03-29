import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Link from "../../ui/Link";
import ButtonArrow from "../../ui/ButtonArrow";
const revolutionBackground = "static/assets/repeatingBackground.svg";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const useStyles = makeStyles(theme => ({
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%"
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "10em",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "8em",
      paddingBottom: "8em",
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: "100%"
    }
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145
  }
}));

export default function RevolutionBlock(props) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid item>
      {/*-----The Revolution Block-----*/}
      <Grid
        container
        style={{ height: "100em", marginTop: "12em" }}
        alignItems="center"
        justify="center"
      >
        <Card className={classes.revolutionCard}>
          <CardContent>
            <Grid container direction="column" style={{ textAlign: "center" }}>
              <Grid item>
                <Typography variant="h3" gutterBottom>
                  The Revolution
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  Visionary insights coupled with cutting-edge technology is a
                  recipe for revolution.
                </Typography>
                <Button
                  component={Link}
                  href="/revolution"
                  className={classes.learnButtonHero}
                  variant="outlined"
                  onClick={() => props.setValue(2)}
                >
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <LazyLoadComponent threshold={matchesSM ? 200 : matchesXS ? 100 : 750}>
          <div className={classes.revolutionBackground} />
        </LazyLoadComponent>
      </Grid>
    </Grid>
  );
}
