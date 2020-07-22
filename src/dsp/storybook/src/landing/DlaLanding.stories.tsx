import React from 'react';
import {storiesOf} from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { DlaLanding1 } from '@datalayer/widgets/lib/Examples';
import { DlaLanding2 } from '@datalayer/widgets/lib/Examples';
import { DlaLanding3 } from '@datalayer/widgets/lib/Examples';
import { DlaLanding4 } from '@datalayer/widgets/lib/Examples';
import { DlaLanding5 } from '@datalayer/widgets/lib/Examples';
import { DlaLanding6 } from '@datalayer/widgets/lib/Examples';

const landing1 = () => <DlaLanding1 />
storiesOf('DlaLanding', module)
  .addDecorator(StoryRouter())
  .add('landing1', landing1);

const landing2 = () => <DlaLanding2 />
storiesOf('DlaLanding', module)
  .addDecorator(StoryRouter())
  .add('landing2', landing2);

const landing3 = () => <DlaLanding3 />
storiesOf('DlaLanding', module)
  .addDecorator(StoryRouter())
  .add('landing3', landing3);

const landing4 = () => <DlaLanding4 />
storiesOf('DlaLanding', module)
  .addDecorator(StoryRouter())
  .add('landing4', landing4);

const landing5 = () => <DlaLanding5 />
storiesOf('DlaLanding', module)
  .addDecorator(StoryRouter())
  .add('landing5', landing5);

const landing6 = () => <DlaLanding6 />
storiesOf('DlaLanding', module)
  .addDecorator(StoryRouter())
  .add('landing6', landing6);
