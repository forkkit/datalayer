import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import Button from '@material-ui/core/Button';
import {ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Button as JLButton } from '@jupyterlab/ui-components';

import { Spacer, H1 } from './../util/Formats';

import '@jupyterlab/ui-components/style/index.css';
import '@jupyterlab/theme-light-extension/style/index.css';

import { muiLightTheme } from '@datalayer/jupyter-react-theme-light';

export default {
  title: 'JupyterLab/Button-Themed',
};

const buttons = () => (
  <>
    <>
      <H1>JupyterLab Variants</H1>
      <JLButton onClick={action('jupyterlab clicked')} type="button">
        Button
      </JLButton>
      <Spacer />
      <JLButton onClick={action('jupyterlab clicked')} type="submit">
        Submit
      </JLButton>
      <Spacer />
      <JLButton onClick={action('jupyterlab clicked')} type="reset">
        Reset
      </JLButton>
      <Spacer />
      <JLButton onClick={action('jupyterlab clicked')}>
        <span role="img" aria-label="so cool">
          😀 😎 👍 💯
        </span>
      </JLButton>
    </>
    <ThemeProvider theme={muiLightTheme}>
      <CssBaseline />
      <H1>Material UI Variants</H1>
      <Button variant="contained" color="primary" onClick={action('material ui clicked')}>
        Primary
      </Button>
      <Spacer />
      <Button variant="contained" color="secondary" onClick={action('material ui clicked')}>
        Secondary
      </Button>
    </ThemeProvider>
  </>
);

storiesOf('JupyterLab/Button-Themed', module)
  .add('buttons', buttons);
