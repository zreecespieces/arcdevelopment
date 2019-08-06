import React from "react";
import Lottie from "react-lottie";

import Grid from "@material-ui/core/Grid";
import CustomTheme from "../components/ui/CustomTheme";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import vision from "../assets/vision.svg";
import consultationBackground from "../assets/consultation.svg";
import consultationMobile from "../assets/consultation_mobile.svg";
import mockupBackground from "../assets/mockup.svg";
import mockupMobile from "../assets/mockup_mobile.svg";
import reviewBackground from "../assets/review.svg";
import reviewMobile from "../assets/review_mobile.svg";
import designBackground from "../assets/design.svg";
import designMobile from "../assets/design_mobile.svg";
import buildBackground from "../assets/construction.svg";
import buildMobile from "../assets/construction_mobile.svg";
import launchBackground from "../assets/launch.svg";
import launchMobile from "../assets/launch_mobile.svg";
import iterateBackground from "../assets/iterate.svg";
import iterateMobile from "../assets/iterate_mobile.svg";
import maintainBackground from "../assets/maintain.svg";
import maintainMobile from "../assets/maintain_mobile.svg";
import technologyAnimation from "./animations/technologyAnimation/data.json";

import CallToAction from "./ui/CallToAction";

const useStyles = makeStyles(theme => ({
  title: {
    ...CustomTheme.typography.heroText,
    fontFamily: "Pacifico",
    fontSize: 50,
    [theme.breakpoints.down("xs")]: {
      lineHeight: 1
    }
  },
  titleContainer: {
    marginLeft: "7%",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0%",
      marginTop: "5%"
    }
  },
  heading: {
    ...CustomTheme.typography.main
  },
  headingDark: {
    ...CustomTheme.typography.main,
    color: "black"
  },
  paragraphMain: {
    ...CustomTheme.typography.secondary,
    fontSize: 20,
    maxWidth: "700px",
    [theme.breakpoints.down("md")]: {
      fontWeight: "normal"
    }
  },
  paragraphSmall: {
    ...CustomTheme.typography.secondary,
    color: "white",
    maxWidth: "410px",
    [theme.breakpoints.down("md")]: {
      fontWeight: "normal"
    }
  },
  paragraphSmallBuild: {
    ...CustomTheme.typography.secondary,
    color: "white",
    fontSize: "1.5em",
    maxWidth: "410px",
    [theme.breakpoints.down("md")]: {
      fontWeight: "normal",
      fontSize: "1.25em"
    }
  },
  paragraphContainer: {
    position: "absolute",
    paddingTop: "10%",
    paddingLeft: "5%",
    [theme.breakpoints.down("xs")]: {
      padding: "5%",
      paddingTop: "10%"
    }
  },
  technologyContainer: {
    marginTop: "15%",
    marginBottom: "25%"
  },
  visionContainer: {
    marginTop: "10%",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "50%"
    }
  },
  mobileText: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "2.5%",
      paddingRight: "2.5%"
    }
  },
  imageContainer: {
    marginTop: "4%",
    [theme.breakpoints.down("xs")]: {
      marginTop: "-5%"
    }
  },
  processHeading: {
    marginBottom: "50%",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "10%",
      marginTop: "40%"
    }
  },
  consultationBackground: {
    backgroundImage: `url(${consultationBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${consultationMobile})`
    }
  },
  mockupBackground: {
    backgroundImage: `url(${mockupBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mockupMobile})`
    }
  },
  reviewBackground: {
    backgroundImage: `url(${reviewBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${reviewMobile})`
    }
  },
  designBackground: {
    backgroundImage: `url(${designBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${designMobile})`
    }
  },
  buildBackground: {
    backgroundImage: `url(${buildBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${buildMobile})`
    }
  },
  launchBackground: {
    backgroundImage: `url(${launchBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${launchMobile})`
    }
  },
  maintainBackground: {
    backgroundImage: `url(${maintainBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${maintainMobile})`
    }
  },
  iterateBackground: {
    backgroundImage: `url(${iterateBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${iterateMobile})`
    }
  },
  sectionContainer: {
    height: "1400px",
    position: "relative"
  }
}));

export default function TheRevolution() {
  const classes = useStyles();

  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: technologyAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <Grid container direction="column">
      <Grid className={classes.titleContainer} item>
        <Grid justify={matchesMD ? "center" : null} container>
          <Grid item>
            <div className={classes.title}>The Revolution</div>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.visionContainer} item>
        <Grid container justify="space-around" direction="row">
          <Grid className={classes.imageContainer} item>
            <img
              alt="mountain viewed through binoculars"
              height={matchesMD ? 400 : null}
              width={matchesMD ? 300 : null}
              src={vision}
            />
          </Grid>
          <Grid item className={classes.mobileText}>
            <Grid
              container
              align={matchesMD ? "center" : "right"}
              direction="column"
            >
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
          <Grid className={classes.mobileText} item>
            <Grid
              container
              align={matchesMD ? "center" : null}
              direction="column"
            >
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
                  directly! This was a huge leap forward.
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
          <Grid className={classes.animationContainer} item>
            <Lottie
              options={defaultOptions}
              height={matchesMD ? 300 : 800}
              width={matchesMD ? 250 : 800}
            />
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
        <Grid
          className={classes.paragraphContainer}
          container
          align={matchesMD ? "center" : null}
          direction="column"
        >
          <Grid item>
            <div className={classes.headingDark}>Consultation</div>
          </Grid>
          <Grid item>
            <p className={classes.paragraphSmall}>
              Our process begins the moment you realize you need a piece of
              technology for your business. Whether you already have an idea for
              where to start and what to do, or if you just know you want to
              step things up, our initial consultation will help you examine
              your business holistically to find the best solutions.
            </p>
            <p className={classes.paragraphSmall}>
              Detailed notes will be taken on your requirements and constraints,
              while taking care to identify other potential areas for
              consideration.
            </p>
            <p className={classes.paragraphSmall}>
              Cutting-edge advancements in machine learning like object
              detection and natural language processing allow computers to do
              things previously unimaginable, and our expertise and intuition
              will help usher you into this new future of possibilities.
            </p>
          </Grid>
        </Grid>
        <div className={classes.consultationBackground} />
      </Grid>
      <Grid className={classes.sectionContainer} item>
        <Grid
          className={classes.paragraphContainer}
          align={matchesMD ? "center" : null}
          container
          direction="column"
        >
          <Grid item>
            <div className={classes.headingDark}>Mockup</div>
          </Grid>
          <Grid item>
            <p className={classes.paragraphSmall}>
              After we settle on the best path forward and decide on a solution
              to pursue, details like the cost and timeline will be finalized.
            </p>
            <p className={classes.paragraphSmall}>
              Then it’s time for us to start on your minimum viable product.
              That’s just a fancy term for a mockup, which doesn’t include
              colors, images, or any other polished design elements, but
              captures the essential layout structure and functionality.
            </p>
            <p className={classes.paragraphSmall}>
              This helps us understand and refine the solution itself before
              getting distracted by specifics and looks.
            </p>
          </Grid>
        </Grid>
        <div className={classes.mockupBackground} />
      </Grid>
      <Grid className={classes.sectionContainer} item>
        <Grid
          className={classes.paragraphContainer}
          align={matchesMD ? "center" : null}
          container
          direction="column"
        >
          <Grid item>
            <div className={classes.headingDark}>Review</div>
          </Grid>
          <Grid item>
            <p className={classes.paragraphSmall}>
              Before moving any farther we come back to you with our progress.
              This gives you the freedom to discuss any changes you may want or
              any ideas you may have come up with before any heavy lifting has
              been done.
            </p>
            <p className={classes.paragraphSmall}>
              We give you an interactive demonstration of the mockups,
              thoroughly explaining the thought process that went into each
              screen and every anticipated feature.
            </p>
            <p className={classes.paragraphSmall}>
              Once you’re completely satisfied with the vision for our solution
              we get down to the nitty gritty, fine-details of design.
            </p>
          </Grid>
        </Grid>
        <div className={classes.reviewBackground} />
      </Grid>
      <Grid className={classes.sectionContainer} item>
        <Grid
          className={classes.paragraphContainer}
          align={matchesMD ? "center" : null}
          container
          direction="column"
        >
          <Grid item>
            <div className={classes.headingDark}>Design</div>
          </Grid>
          <Grid item>
            <p className={classes.paragraphSmall}>
              Using the mockups and notes taken during the consultation as
              guides, we will start ironing out what the final product will look
              like. This also involves using any brand material like fonts,
              colors, and logos to extend the experience you've already
              established.
            </p>
            <p className={classes.paragraphSmall}>
              No aspect is superfluous, and care will be taken with every
              decision.
            </p>
          </Grid>
        </Grid>
        <div className={classes.designBackground} />
      </Grid>
      <Grid className={classes.sectionContainer} item>
        <Grid
          className={classes.paragraphContainer}
          align={matchesMD ? "center" : null}
          container
          direction="column"
        >
          <Grid item>
            <div className={classes.headingDark}>Review</div>
          </Grid>
          <Grid item>
            <p className={classes.paragraphSmall}>
              A second round of review is essential to our goal of creating
              exactly what you want, exactly how you want it.
            </p>
            <p className={classes.paragraphSmall}>
              This time we’ll be going over the finalized designs in another
              fully interactive demonstration. Again this gives you an
              opportunity to tweak things and make sure we get everything right
              the first time.
            </p>
          </Grid>
        </Grid>
        <div className={classes.reviewBackground} />
      </Grid>
      <Grid className={classes.sectionContainer} item>
        <Grid
          className={classes.paragraphContainer}
          align={matchesMD ? "center" : null}
          container
          direction="column"
        >
          <Grid item>
            <div className={classes.headingDark}>Build</div>
          </Grid>
          <Grid item>
            <p className={classes.paragraphSmallBuild}>
              Here’s where we get down to business.
            </p>
            <p className={classes.paragraphSmallBuild}>
              Engineering begins after your approval on the final designs. We
              start by scaffolding out the project at a high level, prioritizing
              some areas over others.
            </p>
            <p className={classes.paragraphSmallBuild}>
              Each area is then developed in order of importance until ready to
              be connected to the next piece.
            </p>
            <p className={classes.paragraphSmallBuild}>
              Typically the backend, behind the scenes operations, are completed
              first. Once all the services are in place we can then create the
              front end, user side of things.
            </p>
            <p className={classes.paragraphSmallBuild}>
              Finishing the application doesn’t mean we’re done though, because
              we use extensive testing to guarantee compatibility with all
              intended devices.
            </p>
            <p className={classes.paragraphSmallBuild}>
              Only after our rigorous examinations will we accept a product as
              finished, then pushing it through the production pipeline. This
              produces an optimized, compressed, consumer version of the code
              and assets ready for deployment.
            </p>
          </Grid>
        </Grid>
        <div className={classes.buildBackground} />
      </Grid>
      <Grid className={classes.sectionContainer} item>
        <Grid
          className={classes.paragraphContainer}
          align={matchesMD ? "center" : null}
          container
          direction="column"
        >
          <Grid item>
            <div className={classes.headingDark}>Launch</div>
          </Grid>
          <Grid item>
            <p className={classes.paragraphSmall}>
              The moment we’ve all been waiting for.
            </p>
            <p className={classes.paragraphSmall}>
              When construction comes to a close you’re the first one to know.
              We’ll give our final demonstration to show off your shiny new
              software in the wild so you know exactly how it will look to your
              users.
            </p>
            <p className={classes.paragraphSmall}>
              When you say the word, we press the button and launch your project
              out to the public. We’re there to ensure everything goes to plan
              so you can start reaping the rewards of your technological
              investment immediately.
            </p>
          </Grid>
        </Grid>
        <div className={classes.launchBackground} />
      </Grid>
      <Grid className={classes.sectionContainer} item>
        <Grid
          className={classes.paragraphContainer}
          align={matchesMD ? "center" : null}
          container
          direction="column"
        >
          <Grid item>
            <div className={classes.headingDark}>Maintain</div>
          </Grid>
          <Grid item>
            <p className={classes.paragraphSmall}>
              Our work doesn’t end there.
            </p>
            <p className={classes.paragraphSmall}>
              After a successful launch we keep in close contact to listen to
              feedback and hear how the project is being received.
            </p>
            <p className={classes.paragraphSmall}>
              From there on out we make sure your application is kept up to date
              and taking advantage of the best features and practices available.
              When new developments arise or new techniques are discovered in
              future projects, we will implement those advancements in your
              project as part of our routine maintenance.
            </p>
          </Grid>
        </Grid>
        <div className={classes.maintainBackground} />
      </Grid>
      <Grid className={classes.sectionContainer} item>
        <Grid
          className={classes.paragraphContainer}
          align={matchesMD ? "center" : null}
          container
          direction="column"
        >
          <Grid item>
            <div className={classes.headingDark}>Iterate</div>
          </Grid>
          <Grid item>
            <p className={classes.paragraphSmall}>
              The cycle repeats whenever you come up with a new idea for
              extending your current project, or come up with a brand new system
              entirely.
            </p>
            <p className={classes.paragraphSmall}>
              By planning for future features and changes, we can build and
              evolve your application over time. As new use cases and customer
              needs develop we can respond with continuous integration of new
              content.
            </p>
            <p className={classes.paragraphSmall}>
              Our iterative process will keep you current and competitive,
              allowing you to quickly implement changes instead of waiting
              months for a single update.
            </p>
          </Grid>
        </Grid>
        <div className={classes.iterateBackground} />
      </Grid>
      <Grid item>
        <CallToAction />
      </Grid>
    </Grid>
  );
}
