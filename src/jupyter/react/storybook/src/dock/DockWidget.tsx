import React, { Component } from 'react';

import { DockPanel } from '@lumino/widgets';
// import { Message } from '@lumino/messaging';
// import { TabPanel } from '@lumino/widgets';
import { Widget } from '@lumino/widgets';

// import './App.css';

class MyWidget extends Widget {
  _model: any;

  static createNode() {
    console.log('widget:createNode');
    var node = document.createElement('div');
    var app = document.createElement('div');
    app.className = 'todoapp';
    node.appendChild(app);
    return node;
  }

  constructor(model: any) {
    super();
    this.addClass('TodoWidget');
    this._model = model;
    console.log('widget:constructor');
  }

  get model() {
    console.log('widget:getModel');    
    return this._model;
  }

  onAfterAttach(msg: any) {
    console.log('onAfterAttach');
    //this._model.subscribe(() => this.update());
    this.update();
  }

  onUpdateRequest(msg: any) {
    console.log('widget:onUpdateRequest');    
//  var data = { model: this._model };
//  var host = this.node.firstChild;
//  React.render(React.createElement(app.TodoApp, data), host);
  }
}

class ReactDockPanel extends Component<any, any> {
  panel: DockPanel;
  widget: any;
  node: any;

  constructor(props: any) {
    super(props);
    this.panel = new DockPanel();
    this.panel.id = this.props.id;
    this.widget = new MyWidget({});
  }

  componentWillMount() {
    this.panel.addWidget(this.widget);
  }

  componentDidMount() {
//    this.panel.attach(this.node);
    Widget.attach(this.panel, this.node);
  }

  render() {
    return (
      <div ref={el=>this.node=el} />
    );
  }

}

export default class DockWidget extends Component {
  render() {
    return (
      <ReactDockPanel id="main" />
    );
  }

}
