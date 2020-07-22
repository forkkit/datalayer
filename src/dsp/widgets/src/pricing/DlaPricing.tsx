import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Weekend from "@material-ui/icons/Weekend";
import Home from "@material-ui/icons/Home";
import Business from "@material-ui/icons/Business";
import AccountBalance from "@material-ui/icons/AccountBalance";
import Check from "@material-ui/icons/Check";
import Close from "@material-ui/icons/Close";
// core components
import GridContainer from "./../w1/Grid/GridContainer";
import GridItem from "./../w1/Grid/GridItem";
import Card from "./../w1/Card/Card";
import CardBody from "./../w1/Card/CardBody";
import CardFooter from "./../w1/Card/CardFooter";
import Button from "./../w1/CustomButtons/Button";
import NavPills from "./../w1/NavPills/NavPills";
import Success from "./../w1/Typography/Success";
import Danger from "./../w1/Typography/Danger";

import pricingStyle from "./../assets/jss/material-kit-pro-react/views/sectionsSections/pricingStyle.js";

import bg11 from "./../assets/img/bg11.jpg";
import city from "./../assets/img/examples/city.jpg";
import cardBlog3 from "./../assets/img/examples/card-blog3.jpg";

const useStyles = makeStyles(pricingStyle as any, {index: 111, classNamePrefix: 'DlaPricing'});

export default function DlaPricing({ ...rest }) {
  const classes = useStyles({});
  return (
    <div className="cd-section" {...rest}>
      {/* Pricing 3 START */}
      <div
        className={classes.pricing + " " + classes.section}
        style={{ backgroundImage: `url(${city})` }}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={6}
              md={6}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <h2 className={classes.title}>Pick the best plan for you</h2>
              <h5 className={classes.description}>
                You have Free Unlimited Updates and Premium Support on each
                package.
              </h5>
              <div className={classes.sectionSpace} />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4} className={classes.mlAuto}>
              <Card pricing>
                <CardBody pricing>
                  <h6 className={classes.cardDescription}>FREE</h6>
                  <h1 className={classes.cardTitle}>
                    <small>$</small> 0 <small>/mo</small>
                  </h1>
                  <ul>
                    <li>
                      <b>1</b> Project
                    </li>
                    <li>
                      <b>5</b> Team Members
                    </li>
                    <li>
                      <b>55</b> Personal Contacts
                    </li>
                    <li>
                      <b>5.000</b> Messages
                    </li>
                  </ul>
                </CardBody>
                <CardFooter pricing className={classes.justifyContentCenter}>
                  <Button color="primary" round>
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4} className={classes.mrAuto}>
              <Card pricing color="primary">
                <CardBody pricing>
                  <h6
                    className={
                      classes.cardCategory + " " + classes.marginBottom30
                    }
                  >
                    PREMIUM
                  </h6>
                  <h1 className={classes.cardTitleWhite}>
                    <small>$</small> 199 <small>/mo</small>
                  </h1>
                  <ul>
                    <li>
                      <b>1000</b> Projects
                    </li>
                    <li>
                      <b>100</b> Team Members
                    </li>
                    <li>
                      <b>550</b> Personal Contacts
                    </li>
                    <li>
                      <b>50.000</b> Messages
                    </li>
                  </ul>
                </CardBody>
                <CardFooter pricing className={classes.justifyContentCenter}>
                  <Button color="white" round>
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Pricing 3 END */}
    </div>
  );
}
