
import * as React from "react";
import TabPanelReact from "../panels/TabPanelReact";
import LuminoAdapter1 from "../LuminoAdapter1";

import "./App.scss";

export default class TabPanelDemo extends React.Component<{}, any> {

  render() {
    return (
      <div className="app">
          <h1>Tab panel</h1>
          <TabPanelReact 
            sizes={[0.2, 0.4, 0.4]}
            options={{
            }}
            style={{
              width: "500px",
              height: "500px",
              border: "solid 1px black"
            }}>
            <LuminoAdapter1 title={{label: "First widget"}}>
              <p>Hi there</p>
            </LuminoAdapter1>
            <LuminoAdapter1 title={{label: "Second widget"}}>
              <h1>Middle section</h1>
            </LuminoAdapter1>
          </TabPanelReact>
      </div>
    );
  }
}
