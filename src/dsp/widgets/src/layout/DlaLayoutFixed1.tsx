/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import Favorite from "@material-ui/icons/Favorite";
import Face from "@material-ui/icons/Face";
// core components
import Header from "./../w1/Header/Header";
import HeaderLinks from "./../w1/Header/HeaderLinks";
import Footer from "./../w1/Footer/Footer";
import GridContainer from "./../w1/Grid/GridContainer";
import GridItem from "./../w1/Grid/GridItem";
import Button from "./../w1/CustomButtons/Button";
import Card from "./../w1/Card/Card";
import CardBody from "./../w1/Card/CardBody";
import CardHeader from "./../w1/Card/CardHeader";
import CustomInput from "./../w1/CustomInput/CustomInput";

import DlaHeader from "./../header/DlaHeader"
import DlaFooterFixed from "../footer/DlaFooterFixed1"
import Lorem from "../examples/Lorem"

import fixedLayoutStyle from "./../assets/jss/material-kit-pro-react/layouts/fixed.js";

import image from "./../assets/img/bg7.jpg";

const useStyles = makeStyles(fixedLayoutStyle as any, {index: 111, classNamePrefix: 'DlaFixed1'});

export default function DlaLayoutFixed1() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles({});
  return (
    <div>
      <DlaHeader />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
      <div className={classes.container}>
        <Lorem/>
      </div>
    </div>
    <DlaFooterFixed/>
  </div>
  );
}
