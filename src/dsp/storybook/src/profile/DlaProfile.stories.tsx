import React from 'react';
import {storiesOf} from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { DlaProfile1 } from '@datalayer/widgets/lib/Examples';
import { DlaProfile2 } from '@datalayer/widgets/lib/Examples';
import { DlaProfile3 } from '@datalayer/widgets/lib/Examples';

const profile1 = () => <DlaProfile1 />
storiesOf('DlaProfile', module)
  .addDecorator(StoryRouter())
  .add('profile1', profile1);

const profile2 = () => <DlaProfile2 />
storiesOf('DlaProfile', module)
  .addDecorator(StoryRouter())
  .add('profile2', profile2);

const profile3 = () => <DlaProfile3 />
  storiesOf('DlaProfile', module)
    .addDecorator(StoryRouter())
    .add('profile3', profile3);
  