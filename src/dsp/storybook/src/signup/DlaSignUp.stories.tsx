import React from 'react';
import {storiesOf} from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { DlaSignUp1 } from '@datalayer/widgets/lib/Examples';

const SignUp1 = () => <DlaSignUp1 />
storiesOf('DlaSignUp', module)
  .addDecorator(StoryRouter())
  .add('signup1', SignUp1);
