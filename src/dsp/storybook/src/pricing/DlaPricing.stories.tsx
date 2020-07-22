import React from 'react';
import {storiesOf} from '@storybook/react';
import { DlaPricing1 } from '@datalayer/widgets/lib/Examples';
import { DlaPricing2 } from '@datalayer/widgets/lib/Examples';
import { DlaPricing3 } from '@datalayer/widgets/lib/Examples';
import { DlaPricing4 } from '@datalayer/widgets/lib/Examples';
import { DlaPricing5 } from '@datalayer/widgets/lib/Examples';
import { DlaPricing6 } from '@datalayer/widgets/lib/Examples';

const pricing1 = () => <DlaPricing1 />
storiesOf('DlaPricing', module)
  .add('pricing1', pricing1);

const pricing2 = () => <DlaPricing2 />
storiesOf('DlaPricing', module)
  .add('pricing2', pricing2);

const pricing3 = () => <DlaPricing3 />
storiesOf('DlaPricing', module)
  .add('pricing3', pricing3);

const pricing4 = () => <DlaPricing4 />
storiesOf('DlaPricing', module)
  .add('pricing4', pricing4);

const pricing5 = () => <DlaPricing5 />
storiesOf('DlaPricing', module)
  .add('pricing5', pricing5);

const pricing = () => <DlaPricing6 />
storiesOf('DlaPricing', module)
  .add('pricing6', pricing);
