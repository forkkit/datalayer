import React from 'react';
import {storiesOf} from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { DlaCard1 } from '@datalayer/widgets/lib/Examples';
import { DlaCard2 } from '@datalayer/widgets/lib/Examples';

const card1 = () => <DlaCard1 />
storiesOf('DlaCard', module)
  .addDecorator(StoryRouter())
  .add('card1', card1);

const card2 = () => <DlaCard2 />
storiesOf('DlaCard', module)
  .addDecorator(StoryRouter())
  .add('card2', card2);
