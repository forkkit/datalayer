import React from 'react';

import { InputGroup } from '@jupyterlab/ui-components';

import '@jupyterlab/application/style/index.css';
import '@jupyterlab/theme-light-extension/style/index.css';

export default {
  title: 'JupyterLab/InputGroup',
//  component: InputGroup,
  id: 'jupyterlab-collapse-id',
  parameters: {
    docs: {
      inlineStories: true,
    },
  },
};

export const InputGroupStory = () => {
    return  <InputGroup
      disabled={false}
      large={true}
      leftIcon="filter"
      placeholder="Filter histogram..."
    />
};

InputGroupStory.story = {
  name: 'Input Group',
  parameters: {
    docs: {
      storyDescription: 'This demonstrates react hooks working inside stories. Go team! 🚀',
    },
  },
};
