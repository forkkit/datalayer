// import React to avoid
// TS2686: 'React' refers to a UMD global, but the current file is a module.
import React from 'react';
import {storiesOf} from '@storybook/react';

import { buildIcon, html5Icon, runningIcon, LabIcon } from '@jupyterlab/ui-components';

import '@jupyterlab/application/style/index.css';
import '@jupyterlab/theme-light-extension/style/index.css';

export default {
  title: 'JupyterLab/Icons',
  component: LabIcon,
  id: 'jupyterlab-icons-id',
  parameters: {
    docs: {
      inlineStories: true,
    },
  },
};

const buildIconStory = () => ( 
    <buildIcon.react
      elementPosition="center"
      kind="toolbarButton"
    />
  );

storiesOf('JupyterLab/Icons', module)
    .add('Build (toolbar button)', buildIconStory);

const html5IconStory = () => (
  <html5Icon.react
    elementPosition="center"
    kind="launcherCard"
  />
);
storiesOf('JupyterLab/Icons', module)
  .add('HTML5 (launcher card)', html5IconStory);

const runningIconStory = () => (
    <runningIcon.react
      elementPosition="center"
      kind="mainAreaTab"
    />
  );

storiesOf('JupyterLab/Icons', module)
  .add('Running (main area tab)', runningIconStory);
