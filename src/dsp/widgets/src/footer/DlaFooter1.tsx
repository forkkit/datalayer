/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Mail from "@material-ui/icons/Mail";
import Favorite from "@material-ui/icons/Favorite";
// core components
import GridContainer from "./../w1/Grid/GridContainer";
import GridItem from "./../w1/Grid/GridItem";
import Button from "./../w1/CustomButtons/Button";
import CustomInput from "./../w1/CustomInput/CustomInput";
import Footer from "./../w1/Footer/Footer";

import DlaFooterList from "./DlaFooterList1"
import DlaFooterBy from "./DlaFooterBy1"

import styles from "../assets/jss/material-kit-pro-react/views/componentsSections/footerStyle.js";

const useStyles = makeStyles(styles as any, {index: 111, classNamePrefix: 'DlaFooter1'});

export default function DlaFooter1() {
  const classes = useStyles({});
  return (
    <div>
        <Footer
          content={
            <div>
              <div className={classes.left}>
                <DlaFooterList/>
              </div>
              <DlaFooterBy/>
            </div>
          }
        />
    </div>
  );
}
