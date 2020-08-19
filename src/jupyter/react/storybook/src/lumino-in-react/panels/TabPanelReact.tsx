
import {TabPanel} from "@lumino/widgets";
import ContainerWidgetReact from "../common/ContainerWidgetReact";

import "@lumino/widgets/style/tabpanel.css";

interface TabPanelReactProps {
  sizes?: number[];
}

export default class TabPanelReact extends ContainerWidgetReact<TabPanel, TabPanel.IOptions, TabPanelReactProps> {
  constructor(props) {
    super(props);
    this.containerWidget = new TabPanel(props.options || {});
    this.optionKeys = ["tabPlacement", "tabsMovable"];
  }  
}
