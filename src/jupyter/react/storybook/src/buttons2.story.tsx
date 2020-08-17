import React, { useState } from 'react';

import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

export default {
  title: 'Buttons/Button2',
  component: Button,
  id: 'react-button-id',
  parameters: {
    docs: {
      inlineStories: true,
    },
  },
};

export const WithText = () => <Button onClick={action('clicked')}>Hello Button</Button>;
WithText.story = {
  name: 'With Text',
  parameters: {
    docs: {
      storyDescription: 'This demonstrates a button with text',
    },
  },
};

export const WithSomeEmoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);  
WithSomeEmoji.story = {
  name: 'With Emoji',
  parameters: {
    docs: {
      storyDescription: 'This demonstrates a button with emoji',
    },
  },
};

export const WithCounter = () => {
  const [counter, setCounter] = useState(0);
  const label = `Testing: ${counter}`;
  return <Button onClick={() => setCounter(counter + 1)}>{label}</Button>;
};
WithCounter.story = {
  name: 'With Counter',
  parameters: {
    docs: {
      storyDescription: 'This demonstrates react hooks working inside stories. Go team! 🚀',
    },
  },
};
