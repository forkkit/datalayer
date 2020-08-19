
import {BoxPanel} from "@lumino/widgets";
import ContainerWidgetReact from "../common/ContainerWidgetReact";

interface BoxPanelReactProps {
}

export default class BoxPanelReact extends ContainerWidgetReact<BoxPanel, BoxPanel.IOptions, BoxPanelReactProps> {
  constructor(props) {
    super(props);
    this.containerWidget = new BoxPanel(props.options || {});
    this.optionKeys = ["alignment", "layout", "direction", "spacing"];
  }
}
