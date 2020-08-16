import React from 'react';
import {DockPanel, Widget} from "@lumino/widgets";
import {createPortal} from "react-dom";

interface IWidgetInfo {
  component: JSX.Element;
  node: HTMLElement;
}

interface IDockState {
  widgetInfos: IWidgetInfo[];
}

interface IDockProps {
  // children : React.ReactNode;
  children: JSX.Element[] | JSX.Element;
}

class WrapperWidget extends Widget {
  constructor(name: string, node: HTMLElement) {
    super({node});
    this.setFlag(Widget.Flag.DisallowLayout);
    this.title.label = name;
  }
}

export default class Dock extends React.PureComponent<IDockProps, IDockState> {
  private dock: DockPanel;
  private elem: HTMLElement;

  public constructor(props: any) {
    super(props)
    this.dock = new DockPanel();
    this.elem = document.createElement("div");
  }

  private feed(component: JSX.Element, widgetInfos: IWidgetInfo[]) {
    let node = document.createElement("div");
    let widget = new WrapperWidget("Widget Name", node);
    this.dock.addWidget(widget);
    widgetInfos.push({
      component: component,
      node: node,
    });
  }

  public componentWillMount() {
    let widgetInfos = new Array<IWidgetInfo>();
    if (this.props.children instanceof Array) {
      for (let component of this.props.children) {
        this.feed(component as JSX.Element, widgetInfos)
      }
    }
    else {
      this.feed(this.props.children as JSX.Element, widgetInfos)
    }
    this.setState({...this.state, widgetInfos});
  }

  public componentDidMount() {
    Widget.attach(this.dock, this.elem);
  }

  public render() {
    return (
      <div ref={(c) => this.elem = c as HTMLElement}>
        {
          this.state.widgetInfos.map(widgetInfo => {
            return createPortal(widgetInfo.component, widgetInfo.node);
          })
        }
      </div>
    );
  }

}
