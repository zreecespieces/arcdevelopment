import React from "react";
import Grid from "@material-ui/core/Grid";
import CustomTheme from "../components/ui/CustomTheme";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import CallToAction from "./ui/CallToAction";

import history from "../assets/history.svg";
import founder from "../assets/founder.jpg";
import yearbook from "../assets/yearbook.svg";
import puppy from "../assets/puppy.svg";

const useStyles = makeStyles(theme => ({
  title: {
    ...CustomTheme.typography.heroText
  },
  titleContainer: {
    marginLeft: "7%"
  },
  heading: {
    ...CustomTheme.typography.main
  },
  paragraphMain: {
    ...CustomTheme.typography.secondary,
    fontSize: 20,
    maxWidth: "700px"
  },
  mission: {
    ...CustomTheme.typography.mission,
    maxWidth: "1300px"
  },
  missionContainer: {
    marginTop: "5%",
    marginBottom: "10%"
  },
  boldLine: {
    ...CustomTheme.typography.secondary,
    fontWeight: "bold",
    fontStyle: "italic",
    fontFamily: "Roboto"
  },
  historyContainer: {
    marginBottom: "10%"
  },
  historyImageContainer: {
    marginTop: "3%"
  },
  historyHeading: {
    marginBottom: "3%"
  },
  avatar: {
    width: "40%",
    height: "40%"
  },
  puppyContainer: {
    marginRight: "8%"
  },
  yearbookContainer: {
    marginLeft: "8%"
  }
}));

export default function AboutUs() {
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid className={classes.titleContainer} item>
        <Grid container>
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
              inexpensive, and aesthetic software to the Midwest and beyond.
            </p>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          className={classes.historyContainer}
          container
          justify="space-around"
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
              </Grid>
              <Grid item>
                <p className={classes.paragraphMain}>
                  Founded in 2019, we're ready to get our hands on the world's
                  business problems.
                </p>
              </Grid>
              <Grid item>
                <p className={classes.paragraphMain}>
                  There are many different answers to that question: economic
                  barriers, social barriers, educational barriers, and sometimes
                  institutional barriers.
                </p>
              </Grid>
              <Grid item>
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
              </Grid>
              <Grid item>
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
        </Grid>
      </Grid>
      <Grid item>
        <Grid container justify="space-around" direction="row">
          <Grid className={classes.yearbookContainer} item>
            <Grid container direction="column">
              <Grid item>
                <img
                  alt="story titled 'Techno Guru: Computer Expertise Helps Teen Assist Tech Department'"
                  src={yearbook}
                />
              </Grid>
              <Grid item>
                <p className={classes.paragraphMain}>
                  a page from my Sophomore yearbook
                </p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container align="center" direction="column">
              <Grid item>
                <p className={classes.paragraphMain}>
                  I taught myself basic coding from a library book in third
                  grade, and ever since then my passion has solely been set on
                  learning — learning about computers, learning mathematics and
                  philosophy, studying design, always just learning.
                </p>
                <p className={classes.paragraphMain}>
                  Now I’m ready to apply everything I’ve learned, and to help
                  others with the intuition I have developed.
                </p>
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.puppyContainer} item>
            <Grid container align="right" direction="column">
              <Grid item>
                <img alt="multi-colored dachshund puppy sleeping" src={puppy} />
              </Grid>
              <Grid item>
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
