import React, { useState } from 'react';

import { Collapse } from '@jupyterlab/ui-components';
import { Button } from '@jupyterlab/ui-components';

import '@jupyterlab/application/style/index.css';
import '@jupyterlab/theme-light-extension/style/index.css';

export default {
  title: 'JupyterLab/Collapse',
  component: Collapse,
  id: 'jupyterlab-collapse-id',
  parameters: {
    docs: {
      inlineStories: true,
    },
  },
};

export const CollapseStory = () => {
  const [open, setOpen] = useState(false);
  return <>
    <Button onClick={() => setOpen(!open)}>
        {open ? "Hide" : "Show"} collapse
    </Button>
    <Collapse isOpen={open}>
      <pre>
        Dummy text.
        Dummy text.
        Dummy text.
        Dummy text.
      </pre>
    </Collapse>
  </>
};

CollapseStory.story = {
  name: 'Collapse',
  parameters: {
    docs: {
      storyDescription: 'This demonstrates react hooks working inside stories. Go team! 🚀',
    },
  },
};
