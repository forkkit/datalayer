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

import face1 from "./../assets/img/faces/card-profile6-square.jpg";
import face2 from "./../assets/img/faces/christian.jpg";
import face3 from "./../assets/img/faces/card-profile4-square.jpg";
import face4 from "./../assets/img/faces/card-profile1-square.jpg";
import face5 from "./../assets/img/faces/marc.jpg";
import face6 from "./../assets/img/faces/kendall.jpg";
import face7 from "./../assets/img/faces/card-profile5-square.jpg";
import face8 from "./../assets/img/faces/card-profile2-square.jpg";

import styles from "./../assets/jss/material-kit-pro-react/views/componentsSections/footerStyle.js";

const useStyles = makeStyles(styles as any, {index: 111, classNamePrefix: 'DlaFooter4'});

export default function DlaFooter4() {
  const classes = useStyles({});
  return (
    <div>
        <Footer
          theme="dark"
          content={
            <div>
              <div className={classes.left}>
                <a
                  href="https://datalayer.io?ref=mkpr-footer-components"
                  target="_blank"
                  className={classes.footerBrand}
                >
                  Datalayer
                </a>
              </div>
              <div className={classes.pullCenter}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="http://datalayer.io/?ref=mkpr-footer-components"
                      target="_blank"
                      className={classes.block}
                    >
                      Blog
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://datalayer.io/presentation?ref=mkpr-footer-components"
                      target="_blank"
                      className={classes.block}
                    >
                      Presentation
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="#pablito"
                      onClick={e => e.preventDefault()}
                      className={classes.block}
                    >
                      Discover
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="#pablito"
                      onClick={e => e.preventDefault()}
                      className={classes.block}
                    >
                      Payment
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://datalayer.io/contact-us?ref=mkpr-footer-components"
                      target="_blank"
                      className={classes.block}
                    >
                      Contact us
                    </a>
                  </ListItem>
                </List>
              </div>
              <div className={classes.rightLinks}>
                <ul>
                  <li>
                    <Button
                      href="https://twitter.com/CreativeTim?ref=creativetim"
                      target="_blank"
                      color="white"
                      justIcon
                      simple
                    >
                      <i className="fab fa-twitter" />
                    </Button>
                  </li>
                  <li>
                    <Button
                      href="https://dribbble.com/creativetim?ref=creativetim"
                      target="_blank"
                      color="white"
                      justIcon
                      simple
                    >
                      <i className="fab fa-dribbble" />
                    </Button>
                  </li>
                  <li>
                    <Button
                      href="https://instagram.com/CreativeTimOfficial?ref=creativetim"
                      target="_blank"
                      color="white"
                      justIcon
                      simple
                    >
                      <i className="fab fa-instagram" />
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          }
        />
    </div>
  );
}
