import React from 'react';
import {storiesOf} from '@storybook/react';

import { Hello1 } from '@datalayer/widgets/lib/Examples';
import { Hello2 } from '@datalayer/widgets/lib/Examples';

const hello1 = () => <Hello1 />
storiesOf('DlaExamples', module)
  .add('hello1', hello1);

const hello2 = () => <Hello2 name="Eric" />
storiesOf('DlaExamples', module)
  .add('hello2', hello2);
