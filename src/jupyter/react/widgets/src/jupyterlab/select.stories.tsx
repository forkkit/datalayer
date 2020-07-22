import React from 'react';

import { HTMLSelect } from '@jupyterlab/ui-components';

import '@jupyterlab/application/style/index.css';
import '@jupyterlab/theme-light-extension/style/index.css';

export default {
  title: 'JupyterLab/Select',
  component: HTMLSelect,
  id: 'jupyterlab-select-id',
  parameters: {
    docs: {
      inlineStories: true,
    },
  },
};

export const SelectStory = () => {
  return <HTMLSelect
    options={[
      'option1', 
      'option2'
    ]}
  />
};

SelectStory.story = {
  name: 'Select',
  parameters: {
    docs: {
      storyDescription: 'HTML Select.',
    },
  },
};
