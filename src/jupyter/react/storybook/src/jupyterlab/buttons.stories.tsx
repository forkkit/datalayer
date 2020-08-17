import React from 'react';

import { action } from '@storybook/addon-actions';

import { Button } from '@jupyterlab/ui-components';

import '@jupyterlab/application/style/index.css';
import '@jupyterlab/theme-light-extension/style/index.css';

import './buttons.css'

export default {
  title: 'JupyterLab/Button'
};

export const types = () => (
  <>
    <Button type="button" title="Button" onClick={action('clicked')}>Button Type</Button>
    <Button type="submit" title="Submit" onClick={action('clicked')}>Submit Type</Button>
    <Button type="reset" title="Reset" onClick={action('clicked')} >Reset Type</Button>
  </>
);

export const css = () => (
  <>
    <Button 
      type="button"
      className='Button-Color'
      title="A Button with CSS"
      onClick={action('clicked')}>
        With CSS
    </Button>
    <Button 
      type="button"
      className='Button-Color Button-Background'
      title="A Button with more CSS"
      onClick={action('clicked')}>
        With more CSS
    </Button>
  </>
);

css.args = {
  label: 'Hello',
  onClick: action('clicked'),
};

export const emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
