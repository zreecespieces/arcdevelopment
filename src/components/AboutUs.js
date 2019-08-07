import React from "react";
import Grid from "@material-ui/core/Grid";
import CustomTheme from "../components/ui/CustomTheme";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Avatar from "@material-ui/core/Avatar";
import CallToAction from "./ui/CallToAction";
import Hidden from "@material-ui/core/Hidden";
import history from "../assets/history.svg";
import founder from "../assets/founder.jpg";
import yearbook from "../assets/yearbook.svg";
import puppy from "../assets/puppy.svg";

const useStyles = makeStyles(theme => ({
  title: {
    ...CustomTheme.typography.heroText
  },
  titleContainer: {
    marginLeft: "7%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0%"
    }
  },
  heading: {
    ...CustomTheme.typography.main
  },
  paragraphMain: {
    ...CustomTheme.typography.secondary,
    fontSize: 20,
    maxWidth: "700px",
    [theme.breakpoints.down("md")]: {
      fontWeight: "normal"
    }
  },
  mission: {
    ...CustomTheme.typography.mission,
    maxWidth: "1300px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "5%",
      paddingRight: "5%"
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "2.5%",
      paddingRight: "2.5%"
    }
  },
  missionContainer: {
    marginTop: "5%",
    marginBottom: "10%",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "50%"
    }
  },
  boldLine: {
    ...CustomTheme.typography.secondary,
    fontWeight: "bold",
    fontStyle: "italic",
    fontFamily: "Roboto"
  },
  historyContainer: {
    marginBottom: "10%",
    [theme.breakpoints.down("xs")]: {
      padding: "5%"
    }
  },
  historyImageContainer: {
    marginTop: "3%",
    [theme.breakpoints.down("xs")]: {
      marginTop: "-5%",
      marginBottom: "50%"
    }
  },
  historyHeading: {
    marginBottom: "3%"
  },
  avatar: {
    width: "40%",
    height: "40%",
    [theme.breakpoints.down("xs")]: {
      width: "80%",
      height: "80%"
    }
  },
  puppyContainer: {
    marginRight: "8%",
    [theme.breakpoints.down("sm")]: {
      marginRight: "1%",
      marginBottom: "50%"
    },
    [theme.breakpoints.down("xs")]: {
      marginRight: "0%",
      marginBottom: "50%"
    }
  },
  yearbookContainer: {
    marginLeft: "8%",
    [theme.breakpoints.down("sm")]: {
      marginRight: "8%",
      marginTop: "20%"
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "20%"
    }
  },
  bioContainer: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "2.5%",
      paddingRight: "2.5%"
    }
  },
  caption: {
    marginTop: "-5%"
  }
}));

export default function AboutUs() {
  const classes = useStyles();

  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="column">
      <Grid className={classes.titleContainer} item>
        <Grid justify={matchesMD ? "center" : null} container>
          <Grid item>
            <div className={classes.title}>About Us</div>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.missionContainer} item>
        <Grid container justify="center" align="center">
          <Grid item>
            <p className={classes.mission}>
              Whether it be person to person, business to consumer, or an
              individual to their interests, technology is meant to bring us
              closer to what we care about in the best way possible. Arc
              Development will use that principle to provide fast, modern,
              affordable, and aesthetic software to the Midwest and beyond.
            </p>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          className={classes.historyContainer}
          container
          justify="space-around"
          align={matchesMD ? "center" : null}
          direction="row"
        >
          <Grid item>
            <Grid container direction="column">
              <Grid className={classes.historyHeading} item>
                <div className={classes.heading}>History</div>
              </Grid>
              <Grid item>
                <div className={classes.boldLine}>
                  We're the new kid on the block
                </div>
                <p className={classes.paragraphMain}>
                  Founded in 2019, we're ready to get our hands on the world's
                  business problems.
                </p>
                <p className={classes.paragraphMain}>
                  It all started with one question: Why aren’t all businesses
                  using available technology? There are many different answers
                  to that question: economic barriers, social barriers,
                  educational barriers, and sometimes institutional barriers.
                </p>
                <p className={classes.paragraphMain}>
                  We aim to be a powerful force in overcoming these obstacles.
                  Recent developments in software engineering and computing
                  power, compounded by the proliferation of smart phones, has
                  opened up infinite worlds of possibility. Things that have
                  always been done by hand can now be done digitally and
                  automatically, and completely new methods of interaction are
                  created daily. Taking full advantage of these advancements is
                  the name of the game.
                </p>
                <p className={classes.paragraphMain}>
                  All this change can be a lot to keep up with, and that’s where
                  we come in.
                </p>
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.historyImageContainer} item>
            <img
              alt="open book with feather quill laying on top"
              height={matchesMD ? 300 : null}
              width={matchesMD ? 300 : null}
              src={history}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container justify="center" align="center" direction="column">
          <Grid item>
            <div className={classes.heading}>Team</div>
          </Grid>
          <Grid item>
            <p className={classes.paragraphMain}>Zachary Reece, Founder</p>
            <p className={classes.paragraphMain}>
              I started coding when I was 9 years old.
            </p>
          </Grid>
          <Grid item>
            <Avatar alt="founder" src={founder} className={classes.avatar} />
          </Grid>
          <Hidden lgUp>
            <Grid className={classes.bioContainer} item>
              <Grid container align="center" direction="column">
                <Grid item>
                  <p className={classes.paragraphMain}>
                    I taught myself basic coding from a library book in third
                    grade, and ever since then my passion has solely been set on
                    learning — learning about computers, learning mathematics
                    and philosophy, studying design, always just learning.
                  </p>
                  <p className={classes.paragraphMain}>
                    Now I’m ready to apply everything I’ve learned, and to help
                    others with the intuition I have developed.
                  </p>
                </Grid>
              </Grid>
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          justify="space-around"
          align={matchesMD ? "center" : null}
          direction="row"
        >
          <Grid className={classes.yearbookContainer} item>
            <Grid container direction="column">
              <Grid item>
                <img
                  alt="story titled 'Techno Guru: Computer Expertise Helps Teen Assist Tech Department'"
                  height={matchesXS ? 300 : matchesMD ? 400 : null}
                  width={matchesXS ? 300 : matchesMD ? 400 : null}
                  src={yearbook}
                />
              </Grid>
              <Grid className={classes.caption} item>
                <p className={classes.paragraphMain}>
                  a page from my Sophomore yearbook
                </p>
              </Grid>
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid item>
              <Grid container align="center" direction="column">
                <Grid item>
                  <p className={classes.paragraphMain}>
                    I taught myself basic coding from a library book in third
                    grade, and ever since then my passion has solely been set on
                    learning — learning about computers, learning mathematics
                    and philosophy, studying design, always just learning.
                  </p>
                  <p className={classes.paragraphMain}>
                    Now I’m ready to apply everything I’ve learned, and to help
                    others with the intuition I have developed.
                  </p>
                </Grid>
              </Grid>
            </Grid>
          </Hidden>
          <Grid className={classes.puppyContainer} item>
            <Grid
              container
              align={matchesMD ? "center" : "right"}
              direction="column"
            >
              <Grid item>
                <img alt="multi-colored dachshund puppy sleeping" src={puppy} />
              </Grid>
              <Grid className={classes.caption} item>
                <p className={classes.paragraphMain}>
                  my miniature dapple dachshund, Sterling
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction />
      </Grid>
    </Grid>
  );
}
