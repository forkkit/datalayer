
import * as React from "react";

import "./App.scss";

import BoxPanelReact from "./../adapter/panels/BoxPanelReact";
import SplitPanelReact from "./../adapter/panels/SplitPanelReact";
import LuminoAdapter1 from "./../adapter/LuminoAdapter1";
import {absoluteFill} from "./../adapter/common/Common";

export default class SplitPanelDemo extends React.Component<{}, any> {

  render() {
    return (
      <div className="app">
        <h1>Split panel</h1>
        <SplitPanelReact 
          sizes={[0.2, 0.4, 0.4]}
          options={{
            orientation: "horizontal"
          }}
          style={{
            width: "500px",
            height: "500px",
            border: "solid 1px black"
          }}>
            <LuminoAdapter1>
              <div className=""
                style={{
                  backgroundColor: "red",
                  ...absoluteFill
                }}>
                <p>Hi there</p>
              </div>
            </LuminoAdapter1>
            <LuminoAdapter1>
              <h1>Middle section</h1>
            </LuminoAdapter1>
            <BoxPanelReact options={{direction: "top-to-bottom"}}>
              <LuminoAdapter1>
                <h1>First box panel thing</h1>
              </LuminoAdapter1>
              <LuminoAdapter1>
                <h1>Second box panel thing</h1>
              </LuminoAdapter1>
            </BoxPanelReact>
          </SplitPanelReact>
      </div>
    );
  }
}
