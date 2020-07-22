import React from 'react';
import {storiesOf} from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { DlaTeam1 } from '@datalayer/widgets/lib/Examples';
import { DlaTeam2 } from '@datalayer/widgets/lib/Examples';

const team1 = () => <DlaTeam1 />
storiesOf('DlaTeam', module)
  .addDecorator(StoryRouter())
  .add('team1', team1);

const team2 = () => <DlaTeam2 />
  storiesOf('DlaTeam', module)
    .addDecorator(StoryRouter())
    .add('team2', team2);
  
  