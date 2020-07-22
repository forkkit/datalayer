import React from 'react';
import {storiesOf} from '@storybook/react';
import { DlaFeatures1 } from '@datalayer/widgets/lib/Examples';
import { DlaFeatures2 } from '@datalayer/widgets/lib/Examples';
import { DlaFeatures3 } from '@datalayer/widgets/lib/Examples';
import { DlaFeatures4 } from '@datalayer/widgets/lib/Examples';
import { DlaFeatures5 } from '@datalayer/widgets/lib/Examples';

const example1 = () => <DlaFeatures1 />
storiesOf('DlaFeatures', module)
  .add('features1', example1);

const example2 = () => <DlaFeatures2 />
storiesOf('DlaFeatures', module)
  .add('features2', example2);

const example3 = () => <DlaFeatures3 />
storiesOf('DlaFeatures', module)
  .add('features3', example3);

const example4 = () => <DlaFeatures4 />
storiesOf('DlaFeatures', module)
  .add('features4', example4);

const features5 = () => <DlaFeatures5 />
storiesOf('DlaFeatures', module)
  .add('features5', features5);
