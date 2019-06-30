import React from "react";
import Grid from "@material-ui/core/Grid";
import CustomTheme from "../components/ui/CustomTheme";
import { makeStyles } from "@material-ui/core/styles";
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import cash from "../assets/cash.svg";
import bulb from "../assets/bulb.svg";
import stopwatch from "../assets/stopwatch.svg";

const useStyles = makeStyles(theme => ({
  title: {
    ...CustomTheme.typography.heroText
  },
  heading: {
    ...CustomTheme.typography.main
  },
  paragraphMain: {
    ...CustomTheme.typography.secondary,
    fontSize: 20,
    maxWidth: "800px"
  },
  paragraph: {
    ...CustomTheme.typography.secondary,
    fontSize: 20,
    maxWidth: "300px"
  },
  middleIcons: {
    marginTop: "15%",
    marginBottom: "10%"
  },
  middleIconSpace: {
    marginLeft: "5%",
    marginRight: "5%"
  },
  arrow: {
    marginTop: "1.25%"
  },
  arrowRight: {
    marginTop: "1.25%"
  },
  mainContainer: {
    paddingLeft: "5%",
    paddingRight: "5%"
  }
}));

export default function CustomSoftware() {
  const classes = useStyles();

  return (
    <Grid className={classes.mainContainer} container direction="column">
      <Grid item>
        <Grid container direction="row">
          <Grid item>
            <Grid container>
              <Grid className={classes.arrow} item>
                <img alt="Back Arrow" src={backArrow} />
              </Grid>
              <Grid item>
                <Grid container direction="column">
                  <Grid item>
                    <div className={classes.title}>
                      Custom Software Development
                    </div>
                  </Grid>
                  <Grid item>
                    <p className={classes.paragraphMain}>
                      Whether we’re replacing old software or inventing new
                      solutions, Arc Development is here to help your business
                      tackle technology.
                    </p>
                    <p className={classes.paragraphMain}>
                      Using regular commercial software leaves you with a lot of
                      stuff you don’t need, without some of the stuff you do
                      need, and ultimately controls the way you work. Without
                      using any software at all you risk falling behind
                      competitors and missing out on huge savings from increased
                      efficiency.
                    </p>
                    <p className={classes.paragraphMain}>
                      Our custom solutions are designed from the ground up with
                      your needs, wants, and goals at the core. This
                      collaborative process produces finely tuned software that
                      is much more effective at improving your workflow and
                      reducing costs than generalized options.
                    </p>
                    <p className={classes.paragraphMain}>
                      We create exactly what you what, exactly how you want it.
                    </p>
                  </Grid>
                </Grid>
              </Grid>
              <Grid className={classes.arrowRight} item>
                <img alt="Forward Arrow" src={forwardArrow} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.middleIcons} item>
        <Grid container justify="center" align="center" direction="row">
          <Grid className={classes.middleIconSpace} item>
            <Grid container spacing={3} direction="column">
              <Grid item>
                <div className={classes.heading}>Save Energy</div>
              </Grid>
              <Grid item>
                <img alt="Lightbulb Icon" src={bulb} />
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.middleIconSpace} item>
            <Grid container spacing={3} direction="column">
              <Grid item>
                <div className={classes.heading}>Save Time</div>
              </Grid>
              <Grid item>
                <img alt="Stopwatch Icon" src={stopwatch} />
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.middleIconSpace} item>
            <Grid container spacing={3} direction="column">
              <Grid item>
                <div className={classes.heading}>Save Money</div>
              </Grid>
              <Grid item>
                <img alt="Money Icon" src={cash} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container justify="space-between" direction="row">
          <Grid item>
            <Grid container>
              <Grid item>
                <Grid container direction="column">
                  <Grid item>
                    <div className={classes.heading}>
                      Digital Documents & Data
                    </div>
                  </Grid>
                  <Grid item>
                    <p className={classes.paragraph}>
                      Reduce Errors. Reduce Waste. Reduce Costs.
                    </p>
                    <p className={classes.paragraph}>
                      Billions are spent annually on the purchasing, printing,
                      and distribution of paper. On top of the massive
                      environmental impact this has, it causes harm to your
                      bottom line as well.
                    </p>
                    <p className={classes.paragraph}>
                      By utilizing digital forms and documents you can remove
                      these obsolete expenses, accelerate your communication,
                      and help the Earth.
                    </p>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <div>Digital Documents Icon</div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid align="right" container>
              <Grid item>
                <div>Scale Icon</div>
              </Grid>
              <Grid item>
                <Grid container direction="column">
                  <Grid item>
                    <div className={classes.heading}>Scale</div>
                  </Grid>
                  <Grid item>
                    <p className={classes.paragraph}>
                      Whether you're a large brand, just getting started, or
                      taking off right now, our application architecture ensures
                      pain-free growth and reliability.
                    </p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container justify="center" direction="row">
          <Grid item>
            <Grid container align="center" direction="column">
              <Grid item>
                <div>Root Cause Analysis Icon</div>
              </Grid>
              <Grid item>
                <div className={classes.heading}>Root-Cause Analysis</div>
              </Grid>
              <Grid item>
                <p className={classes.paragraph}>
                  Many problems are merely symptoms of larger, underlying
                  issues.
                </p>
                <p className={classes.paragraph}>
                  We can help you thoroughly examine all areas of your business
                  to develop a holistic plan for the most effective
                  implementation of technology.
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container justify="space-between" direction="row">
          <Grid item>
            <Grid container>
              <Grid item>
                <Grid container direction="column">
                  <Grid item>
                    <div className={classes.heading}>Automation</div>
                  </Grid>
                  <Grid item>
                    <p className={classes.paragraph}>
                      Why waste time when you don’t have to?
                    </p>
                    <p className={classes.paragraph}>
                      We can help you identify processes with time or event
                      based actions which can now easily be automated.
                    </p>
                    <p className={classes.paragraph}>
                      Increasing efficiency increases profits, leaving you more
                      time to focus on your business, not busywork.
                    </p>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <div>Automation Icon</div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid align="right" container>
              <Grid item>
                <div>User Experience Icon</div>
              </Grid>
              <Grid item>
                <Grid container direction="column">
                  <Grid item>
                    <div className={classes.heading}>
                      User Experience Design
                    </div>
                  </Grid>
                  <Grid item>
                    <p className={classes.paragraph}>
                      A good design that isn’t usable isn’t a good design.
                    </p>
                    <p className={classes.paragraph}>
                      So why are so many pieces of software complicated,
                      confusing, and frustrating?
                    </p>
                    <p className={classes.paragraph}>
                      By prioritizing users and the real ways they interact with
                      technology we’re able to develop unique, personable
                      experiences that solve problems rather than create new
                      ones.
                    </p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
