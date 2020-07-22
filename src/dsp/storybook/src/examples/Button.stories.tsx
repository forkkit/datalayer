import React from 'react';
import {storiesOf} from '@storybook/react';
import Button from '@material-ui/core/Button';
import { action } from '@storybook/addon-actions';

const buttonWithText = () => <Button>Hello Button</Button>
storiesOf('DlaExamples', module)
  .add('textButton', buttonWithText);

const buttonWithEmoji = () => <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
storiesOf('DlaExamples', module)
  .add('emojiButton', buttonWithEmoji);

const buttonWithAction = () => <Button onClick={action('clicked')}>Click me and look in the Actions panel</Button>
storiesOf('DlaExamples', module)
  .add('actionButton', buttonWithAction);
