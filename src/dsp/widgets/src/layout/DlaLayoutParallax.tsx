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
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import People from "@material-ui/icons/People";
import Add from "@material-ui/icons/Add";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "./../w1/Header/Header";
import Footer from "./../w1/Footer/Footer";
import GridContainer from "./../w1/Grid/GridContainer";
import GridItem from "./../w1/Grid/GridItem";
import HeaderLinks from "./../w1/Header/HeaderLinks";
import NavPills from "./../w1/NavPills/NavPills";
import Card from "./../w1/Card/Card";
import CardBody from "./../w1/Card/CardBody";
import CardHeader from "./../w1/Card/CardHeader";
import Badge from "./../w1/Badge/Badge";
import Muted from "./../w1/Typography/Muted";
import Parallax from "./../w1/Parallax/Parallax";
import Clearfix from "./../w1/Clearfix/Clearfix";
import Button from "./../w1/CustomButtons/Button";

import DlaHeader from "./../header/DlaHeader"
import DlaFooter from "./../footer/DlaFooter"
import Lorem from "./../example/Lorem"

import city from "./../assets/img/examples/city.jpg"

import defaultLayoutStyle from "./../assets/jss/material-kit-pro-react/layouts/default.js";

const useStyles = makeStyles(defaultLayoutStyle as any, {index: 111, classNamePrefix: 'DlaParallax'});

export default function DlaLayoutParallax() {
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
        <DlaHeader/>
        <Parallax
          image={city}
          filter="dark"
          className={classes.parallax}
        />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <Clearfix />
            <div className={classNames(classes.description, classes.textCenter)}>
              <Lorem count={10}/>
            </div>
            <Clearfix />
          </div>
        </div>
      </div>
      <DlaFooter/>
    </div>
  );
}
