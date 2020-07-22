/*eslint-disable*/
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../w1/Footer/Footer";
import DlaFooterList from "./DlaFooterList1"
import DlaFooterByFixed from "./DlaFooterByFixed1"

import fixedLayoutStyle from "../assets/jss/material-kit-pro-react/layouts/fixed.js";

import image from "./../assets/img/bg7.jpg";

const useStyles = makeStyles(fixedLayoutStyle as any, {index: 111, classNamePrefix: 'DlaFooterFixed1'});

export default function DlaFooterFixed() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles({});
  return (
    <div>
      <Footer
        className={classes.footer}
        content={
          <div>
            <div className={classes.left}>
              <DlaFooterList />
            </div>
            <DlaFooterByFixed/>
          </div>
        }
      />
    </div>
  );
}
