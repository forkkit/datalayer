import React from 'react';
import {storiesOf} from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { DlaForm1 } from '@datalayer/widgets/lib/Examples';

const form1 = () => <DlaForm1 />
storiesOf('DlaForm', module)
  .addDecorator(StoryRouter())
  .add('form1', form1);
