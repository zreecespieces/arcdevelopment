import React from "react";
import Grid from "@material-ui/core/Grid";
import CustomTheme from "../components/ui/CustomTheme";
import { makeStyles } from "@material-ui/core/styles";

import vision from "../assets/vision.svg";
import consultationBackground from "../assets/consultation.svg";
import mockupBackground from "../assets/mockup.svg";
import reviewBackground from "../assets/review.svg";
import designBackground from "../assets/design.svg";
import buildBackground from "../assets/construction.svg";
import launchBackground from "../assets/launch.svg";
import iterateBackground from "../assets/iterate.svg";
import maintainBackground from "../assets/maintain.svg";

const useStyles = makeStyles(theme => ({
  title: {
    ...CustomTheme.typography.heroText,
    fontFamily: "Pacifico",
    fontSize: 50
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
  technologyContainer: {
    marginTop: "15%",
    marginBottom: "15%"
  },
  visionContainer: {
    marginTop: "10%"
  },
  imageContainer: {
    marginTop: "4%"
  },
  imageContainer2: {
    marginTop: "10%"
  },
  processHeading: {
    marginBottom: "50%"
  },
  consultationBackground: {
    backgroundImage: `url(${consultationBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%"
  },
  mockupBackground: {
    backgroundImage: `url(${mockupBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%"
  },
  reviewBackground: {
    backgroundImage: `url(${reviewBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%"
  },
  designBackground: {
    backgroundImage: `url(${designBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%"
  },
  buildBackground: {
    backgroundImage: `url(${buildBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%"
  },
  launchBackground: {
    backgroundImage: `url(${launchBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%"
  },
  maintainBackground: {
    backgroundImage: `url(${maintainBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%"
  },
  iterateBackground: {
    backgroundImage: `url(${iterateBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%"
  },
  sectionContainer: {
    height: "1400px",
    position: "relative"
  }
}));

export default function TheRevolution() {
  const classes = useStyles();

  return (
    <Grid className={classes.mainContainer} container direction="column">
      <Grid className={classes.titleContainer} item>
        <Grid container>
          <Grid item>
            <div className={classes.title}>The Revolution</div>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.visionContainer} item>
        <Grid container justify="space-around" direction="row">
          <Grid className={classes.imageContainer} item>
            <img alt="mountain viewed through binoculars" src={vision} />
          </Grid>
          <Grid item>
            <Grid container align="right" direction="column">
              <Grid item>
                <div className={classes.heading}>Vision</div>
              </Grid>
              <Grid item>
                <p className={classes.paragraphMain}>
                  The rise of computers, and subsequently the Internet, has
                  completely altered every aspect of human life. This has
                  increased our comfort, broadened our connections, and reshaped
                  how we view the world.
                </p>
                <p className={classes.paragraphMain}>
                  What once was confined to huge rooms and teams of engineers
                  now resides in every single one of our hands. Harnessing this
                  unlimited potential by using it to solve problems and better
                  lives is at the heart of everything we do.
                </p>
                <p className={classes.paragraphMain}>
                  We want to help businesses capitalize on the latest and
                  greatest technology. The best way to predict the future is to
                  be the one building it, and we want to help guide the world
                  into this next chapter of technological expansion,
                  exploration, and innovation.
                </p>
                <p className={classes.paragraphMain}>
                  By holding ourselves to rigorous standards and pristine
                  quality, we can ensure you have the absolute best tools
                  necessary to thrive in this new frontier.
                </p>
                <p className={classes.paragraphMain}>
                  We see a future where every individual has personalized
                  software custom tailored to their lifestyle, culture, and
                  interests, helping them overcome life’s obstacles. Each
                  project is a step towards that goal.
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          className={classes.technologyContainer}
          container
          justify="space-around"
          direction="row"
        >
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <div className={classes.heading}>Technology</div>
              </Grid>
              <Grid item>
                <p className={classes.paragraphMain}>
                  In 2013, Facebook invented a new way of building websites.
                  This new system, React.js, completely revolutionizes the
                  process and practice of website development.
                </p>
                <p className={classes.paragraphMain}>
                  Instead of chaining together long individual pages, like
                  traditional websites, React websites are built with little
                  chunks of code called components. These components are faster,
                  easier to maintain, and are easily reused and customized, each
                  serving a singular purpose.
                </p>
                <p className={classes.paragraphMain}>
                  Two years later they shocked the world by releasing a similar
                  system, React Native, for producing iOS and Android apps.
                  Instead of having to master two completely separate
                  development platforms, you can leverage the knowledge you
                  already possessed from building websites and reapply it
                  directly! This was a <strong>huge</strong> leap forward.
                </p>
                <p className={classes.paragraphMain}>
                  This technology is now being used by companies like AirBnB,
                  Microsoft, Netflix, Pinterest, Skype, Tesla, UberEats, and
                  when Facebook purchased Instagram large portions of it were
                  even rebuilt using React.
                </p>
                <p className={classes.paragraphMain}>
                  Developers have since built on top of these systems by
                  automating project setup and deployment, allowing creators to
                  focus as much as possible on their work itself.
                </p>
                <p className={classes.paragraphMain}>
                  These technical advancements translate into savings by
                  significantly reducing the workload and streamlining the
                  workflow for developing new pieces of software, while also
                  lowering the barrier to entry for mobile app development.
                </p>
                <p className={classes.paragraphMain}>
                  This puts personalization in your pocket — faster, better, and
                  more affordable than ever before.
                </p>
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.imageContainer2} item>
            <img alt="mountain viewed through binoculars" src={vision} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container justify="center" align="center">
          <Grid className={classes.processHeading} item>
            <div className={classes.heading}>Process</div>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.sectionContainer} item>
        <div className={classes.consultationBackground} />
      </Grid>
      <Grid className={classes.sectionContainer} item>
        <div className={classes.mockupBackground} />
      </Grid>
      <Grid className={classes.sectionContainer} item>
        <div className={classes.reviewBackground} />
      </Grid>
      <Grid className={classes.sectionContainer} item>
        <div className={classes.designBackground} />
      </Grid>
      <Grid className={classes.sectionContainer} item>
        <div className={classes.reviewBackground} />
      </Grid>
      <Grid className={classes.sectionContainer} item>
        <div className={classes.buildBackground} />
      </Grid>
      <Grid className={classes.sectionContainer} item>
        <div className={classes.launchBackground} />
      </Grid>
      <Grid className={classes.sectionContainer} item>
        <div className={classes.maintainBackground} />
      </Grid>
      <Grid className={classes.sectionContainer} item>
        <div className={classes.iterateBackground} />
      </Grid>
    </Grid>
  );
}
