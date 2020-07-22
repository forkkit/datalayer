import React from 'react';
import {storiesOf} from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { DlaLayoutParallax1 } from '@datalayer/widgets/lib/Examples';
import { DlaLayoutFixed1 } from '@datalayer/widgets/lib/Examples';
import { DlaLayout1 } from '@datalayer/widgets/lib/Examples';

const parallax = () => <DlaLayoutParallax1 />
storiesOf('DlaLayout', module)
  .addDecorator(StoryRouter())
  .add('parallax', parallax);

const fixed = () => <DlaLayoutFixed1 />
storiesOf('DlaLayout', module)
  .addDecorator(StoryRouter())
  .add('fixed', fixed);

const layout1 = () => <DlaLayout1 />
storiesOf('DlaLayout', module)
  .addDecorator(StoryRouter())
  .add('example1', layout1);
