import React from 'react';
import {storiesOf} from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { DlaSignIn1 } from '@datalayer/widgets/lib/Examples';

const SignIn1 = () => <DlaSignIn1 />
storiesOf('DlaSignIn', module)
  .addDecorator(StoryRouter())
  .add('signin1', SignIn1);
