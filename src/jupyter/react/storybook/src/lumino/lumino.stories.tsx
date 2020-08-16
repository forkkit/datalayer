import React from 'react'
import {storiesOf} from '@storybook/react';

import Cmp from './dock/Cmp';
import Dock from './dock/Dock';
import DockWidget from './dock/DockWidget';

import HelloOne from '@datalayer/jupyter-react-widgets/lib/hello/HelloOne';

export default {
  title: 'Lumino/React',
};

const cmp = () => (
  <Cmp render={() => (<div><HelloOne/></div>)} />
);

const dock = () => (
  <Dock>
    <div>Hello</div>
    <HelloOne/>
  </Dock>
);

const dockWidget = () => (
  <DockWidget />
);

storiesOf('Lumino/React', module)
  .add('Simple', cmp);

storiesOf('Lumino/React', module)
  .add('Dock', dock);

storiesOf('Lumino/React', module)
  .add('Dock Widget', dockWidget);
