import React from 'react';
import {storiesOf} from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { DlaHeader1 } from '@datalayer/widgets/lib/Examples';

const header = () => <DlaHeader1 />
storiesOf('DlaHeader', module)
  .addDecorator(StoryRouter())
  .add('topHeader', header);
