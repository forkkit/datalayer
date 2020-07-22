import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import styles from "./../../assets/jss/material-kit-pro-react/components/typographyStyle.js";

const useStyles = makeStyles(styles, {index: 11, classNamePrefix: 'DlaW1Warning'});

export default function Warning(props) {
  const { children } = props;
  const classes = useStyles();
  return (
    <div className={classes.defaultFontStyle + " " + classes.warningText}>
      {children}
    </div>
  );
}

Warning.propTypes = {
  children: PropTypes.node
};
