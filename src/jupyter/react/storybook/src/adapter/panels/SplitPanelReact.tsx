
import * as React from "react";

import {SplitPanel} from "@lumino/widgets";

import ContainerWidgetReact from "../common/ContainerWidgetReact";

import "@lumino/widgets/style/splitpanel.css";

interface SplitPanelReactProps {
  sizes?: number[];
}

export default class SplitPanelReact extends ContainerWidgetReact<SplitPanel, SplitPanel.IOptions, SplitPanelReactProps> {

  constructor(props) {
    super(props);
    this.containerWidget = new SplitPanel(props.options || {});
    // Note: "renderer" is not included because it's a read-only property
    // TODO: find a way to typecheck this
    this.optionKeys = ["alignment", "layout", "orientation", "spacing"];
  }

  attach() {
    super.attach();
    if (this.props.sizes) this.containerWidget.setRelativeSizes(this.props.sizes);
  }

}
