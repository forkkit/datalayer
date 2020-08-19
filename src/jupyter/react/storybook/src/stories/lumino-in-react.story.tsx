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
export const tabPanel = () => <TabPanelDemo />
export const multipleDocs = () => <BoxPanelReact>
    <MultipleDocksDemo />
  </BoxPanelReact>
