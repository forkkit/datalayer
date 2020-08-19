
import * as React from "react";
import {createPortal} from "react-dom";

import {Widget, Title} from "@lumino/widgets";

import {WidgetParentContext, IWidgetParent} from "./common/Common";

import "@lumino/widgets/style/widget.css";

export interface IWidgetProps {
  title?: Partial<Title.IOptions<Widget>>;
}

export default class LuminoAdapter1 extends React.PureComponent<IWidgetProps, {}> {
  protected widget: Widget;
  // private contextType = WidgetParentContext;
  private storedContext: IWidgetParent;

  constructor(props) {
    super(props);
    this.widget = new Widget();
    LuminoAdapter1.setTitleKeys(this.widget, {}, props);
    // this.contextType = props.contextType;
    this.storedContext = props.storedContext;
  }

  componentDidMount() {
    let parent = this.storedContext;
    if (!parent) throw new Error("WidgetReact must be wrapped in a container component (BoxPanel, SplitPanel, etc.)");
    parent.receiveChild(this.widget);
  }

  componentDidUpdate(prevProps: IWidgetProps) {
    LuminoAdapter1.setTitleKeys(this.widget, prevProps, this.props);
  }

  static setTitleKeys(widget: Widget, prevProps: IWidgetProps, props: IWidgetProps) {
    let titleKeys: (keyof Title.IOptions<Widget>)[] = ["caption", "className", "closable", "dataset", "icon", "iconClass", "iconLabel", "label", "mnemonic"];
    for (let k of titleKeys) {
      if ((prevProps.title || {})[k as any] !== (props.title || {})[k as any]) {
        if (props.title) {
          widget.title[k as any] = props.title[k as any];
        }
      }
    }
  }

  render() {
    return createPortal(
      <div>
          <p>
            <WidgetParentContext.Consumer>
              {(value) => { this.storedContext = value; return null; }}
            </WidgetParentContext.Consumer>
          </p>
          {this.props.children}
      </div>,
      this.widget.node
    );
  }
}
