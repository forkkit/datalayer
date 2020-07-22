import React from 'react';
import {storiesOf} from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { DlaProduct1 } from '@datalayer/widgets/lib/Examples';

const product1 = () => <DlaProduct1/>
storiesOf('DlaProduct', module)
  .addDecorator(StoryRouter())
  .add('product1', product1);
