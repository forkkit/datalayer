import React from 'react';
import {storiesOf} from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { DlaContact1 } from '@datalayer/widgets/lib/Examples';

const work = () => <DlaContact1 />
storiesOf('DlaContact', module)
  .addDecorator(StoryRouter())
  .add('contact1', work);
