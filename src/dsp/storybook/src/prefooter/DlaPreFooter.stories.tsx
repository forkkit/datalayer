import React from 'react';
import {storiesOf} from '@storybook/react';
import { DlaPreFooter1 } from '@datalayer/widgets/lib/Examples';
import { DlaPreFooter2 } from '@datalayer/widgets/lib/Examples';
import { DlaPreFooter3 } from '@datalayer/widgets/lib/Examples';
import { DlaPreFooter4 } from '@datalayer/widgets/lib/Examples';
import { DlaPreFooter5 } from '@datalayer/widgets/lib/Examples';
import { DlaPreFooter6 } from '@datalayer/widgets/lib/Examples';

const preFooter1 = () => <DlaPreFooter1 />
storiesOf('DlaPreFooter', module)
  .add('prefooter1', preFooter1);

const preFooter2 = () => <DlaPreFooter2 />
storiesOf('DlaPreFooter', module)
  .add('prefooter2', preFooter2);

const preFooter3 = () => <DlaPreFooter3 />
storiesOf('DlaPreFooter', module)
  .add('prefooter3', preFooter3);

const preFooter4 = () => <DlaPreFooter4 />
storiesOf('DlaPreFooter', module)
  .add('prefooter4', preFooter4);

const preFooter5 = () => <DlaPreFooter5 />
storiesOf('DlaPreFooter', module)
  .add('prefooter5', preFooter5);

const preFooter6 = () => <DlaPreFooter6 />
  storiesOf('DlaPreFooter', module)
    .add('prefooter6', preFooter6);
  
  