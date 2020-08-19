import React from 'react';
import { docs } from './../utils/storybook';
import SplitPanelDemo from '../lumino-in-react/demos/SplitPanelDemo';
import TabPanelDemo from '../lumino-in-react/demos/TabPanelDemo';
import MultipleDocksDemo from '../lumino-in-react/demos/MultipleDocksDemo';
import BoxPanelReact from './../lumino-in-react/panels/BoxPanelReact'

export default {
  title: 'Lumino/Lumino in React',
  id: 'lumino-in-react-id',
  parameters: {
    docs: {
      inlineStories: true,
    },
  },
};

export const splitPlanel = () => <SplitPanelDemo />
docs(splitPlanel,`
### SplitPanel Demo

Wrap a Lumino panel into React.
`);

export const tabPanel = () => <TabPanelDemo />
docs(tabPanel,`
### TabPanel Demo

Wrap a Lumino panel into React.
`);

export const multipleDocs = () => <BoxPanelReact>
    <MultipleDocksDemo />
  </BoxPanelReact>
docs(multipleDocs,`
### BoxPanel Demo

Wrap a Lumino panel with multiple docks into React.
`);
