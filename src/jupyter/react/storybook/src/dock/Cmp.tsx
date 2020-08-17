import React from 'react';

export default class Cmp extends React.Component<any, any> {

  public constructor(props: any) {
    super(props)
  }

  public render(): React.ReactElement<any> {
    return this.props.render();
  }

}
