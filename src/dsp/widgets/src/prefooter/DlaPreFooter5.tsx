import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "./../w1/Grid/GridContainer";
import GridItem from "./../w1/Grid/GridItem";
import Button from "./../w1/CustomButtons/Button";
import Card from "./../w1/Card/Card";
import CardBody from "./../w1/Card/CardBody";
import CustomInput from "./../w1/CustomInput/CustomInput";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui icons
import Mail from "@material-ui/icons/Mail";

import bg7 from "./../assets/img/bg7.jpg";

import styles from "./../assets/jss/material-kit-pro-react/views/componentsSections/preFooter.js";

const useStyles = makeStyles(styles as any, {index: 111, classNamePrefix: 'DlaPreFooter5'});

export default function DlaPreFooter() {
  const classes = useStyles({});
  return (
    <div>
      <div
        className={classNames(
          classes.subscribeLine,
          classes.subscribeLineWhite
        )}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <h3 className={classes.title}>Get Tips & Tricks every Week!</h3>
              <p className={classes.description}>
                Join our newsletter and get news in your inbox every week! We
                hate spam too, so no worries about this.
              </p>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card plain>
                <CardBody>
                  <form>
                    <GridContainer>
                      <GridItem xs={12} sm={6} md={6} lg={8}>
                        <CustomInput
                          id="emailDlaPreFooter2"
                          formControlProps={{
                            fullWidth: true,
                            className: classes.formFix
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Mail />
                              </InputAdornment>
                            ),
                            placeholder: "Your Email..."
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={6} md={6} lg={4}>
                        <Button
                          color="rose"
                          round
                          block
                          className={classes.subscribeButton}
                        >
                          subscribe
                        </Button>
                      </GridItem>
                    </GridContainer>
                  </form>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
