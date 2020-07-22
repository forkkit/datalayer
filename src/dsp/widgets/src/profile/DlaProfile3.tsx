/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Add from "@material-ui/icons/Add";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Footer from "./../w1/Footer/Footer";
import GridContainer from "./../w1/Grid/GridContainer";
import GridItem from "./../w1/Grid/GridItem";
import Parallax from "./../w1/Parallax/Parallax";
import Clearfix from "./../w1/Clearfix/Clearfix";
import Button from "./../w1/CustomButtons/Button";

import christian from "./../assets/img/faces/christian.jpg";
import city from "./../assets/img/examples/city.jpg"

import profilePageStyle from "./../assets/jss/material-kit-pro-react/views/profilePageStyle.js";

const useStyles = makeStyles(profilePageStyle as any, {index: 111, classNamePrefix: 'DlaProfile3'});

export default function DlaProfile3() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles({});
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <div className={classes.minContent}>
        <Parallax
          image={city}
          filter="dark"
          className={classes.parallax}
        />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={christian} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Christian Louboutin</h3>
                    <h6>DESIGNER</h6>
                    <Button
                      justIcon
                      simple
                      color="dribbble"
                      className={classes.margin5}
                    >
                      <i className={classes.socials + " fab fa-dribbble"} />
                    </Button>
                    <Button
                      justIcon
                      simple
                      color="twitter"
                      className={classes.margin5}
                    >
                      <i className={classes.socials + " fab fa-twitter"} />
                    </Button>
                    <Button
                      justIcon
                      simple
                      color="pinterest"
                      className={classes.margin5}
                    >
                      <i className={classes.socials + " fab fa-pinterest"} />
                    </Button>
                  </div>
                </div>
                <div className={classes.follow}>
                  <Tooltip
                    id="tooltip-top"
                    title="Follow this user"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button
                      justIcon
                      round
                      color="primary"
                      className={classes.followButton}
                    >
                      <Add className={classes.followIcon} />
                    </Button>
                  </Tooltip>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classNames(classes.description, classes.textCenter)}>
              <p>
                An artist of considerable range, Chet Faker — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate feel
                with a solid groove structure.{" "}
              </p>
            </div>
            <Clearfix />
          </div>
        </div>
      </div>
      <Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://datalayer.io/?ref=mkpr-profile"
                    target="_blank"
                    className={classes.block}
                  >
                    Datalayer
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://datalayer.io/presentation?ref=mkpr-profile"
                    target="_blank"
                    className={classes.block}
                  >
                    About us
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="//datalayer.io/" className={classes.block}>
                    Blog
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://datalayer.io/license?ref=mkpr-profile"
                    target="_blank"
                    className={classes.block}
                  >
                    Licenses
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              &copy; {new Date().getFullYear()} , made with{" "}
              <Favorite className={classes.icon} /> by{" "}
              <a
                href="https://datalayer.io?ref=mkpr-profile"
                target="_blank"
              >
                Datalayer
              </a>{" "}
              .
            </div>
          </div>
        }
      />
  </div>
  );
}
