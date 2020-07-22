import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Header from "./../w1/Header/Header";
import Button from "./../w1/CustomButtons/Button";
import { Link } from "react-router-dom";

import headersStyle from "./../assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle.js";

const useStyles = makeStyles(headersStyle as any, {index: 111, classNamePrefix: 'DlaHeader1'});

export default function DlaHeader1({ ...rest }) {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    // we've set the className to cd-section so we can make smooth scroll to it
    <div className="cd-section" {...rest}>
      <div id="blanksection" />
{/*
      <div className={classes.sectionBlank} id="blanksection" />
*/}
      <div>
        <Header
          brand="Datalayer"
          color="transparent"
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white",
            minHeight: 40,
          }}
          links={
            <div className={classes.collapse}>
              <List className={classes.list + " " + classes.mlAuto}>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#"
                    className={classes.navLink}
//                    onClick={e => e.preventDefault()}
                    color="transparent"
                    component={Link}
                    to='/test'
                  >
                    Home
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#datalayer"
                    className={classes.navLink}
//                    onClick={e => e.preventDefault()}
                    color="transparent"
                    component={Link}
                    to='/test'
                  >
                    About us
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#datalayer"
                    className={classes.navLink}
//                    onClick={e => e.preventDefault()}
                    color="transparent"
                    component={Link}
                    to='/test'
                  >
                    Products
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#datalayer"
                    className={classes.navLink}
//                    onClick={e => e.preventDefault()}
                    color="transparent"
                    component={Link}
                    to='/test'
                  >
                    Contact us
                  </Button>
                </ListItem>
              </List>
              <List className={classes.list + " " + classes.mlAuto}>
                <ListItem className={classes.listItem}>
                  <Button
                    color="transparent"
                    href="https://twitter.com/datalayerio"
                    target="_blank"
                    className={classes.navLink + " " + classes.navLinkJustIcon}
                  >
                    <i className={"fab fa-twitter"} />
                  </Button>
                </ListItem>
              </List>
              </div>
          }
          {...rest}
        />
      </div>
    </div>
  );
}
