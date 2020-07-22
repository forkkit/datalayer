import React from 'react';
import {storiesOf} from '@storybook/react';
import { DlaOverview1 } from '@datalayer/widgets/lib/Examples';
import { DlaOverview2 } from '@datalayer/widgets/lib/Examples';
import { DlaOverview3 } from '@datalayer/widgets/lib/Examples';

const overview1 = () => <DlaOverview1 />
storiesOf('DlaOverview', module)
  .add('overview1', overview1);

const overview2 = () => <DlaOverview2 />
storiesOf('DlaOverview', module)
  .add('overview2', overview2);

const overview3 = () => <DlaOverview3 />
storiesOf('DlaOverview', module)
  .add('overview3', overview3);
