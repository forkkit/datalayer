import React from 'react';
import {storiesOf} from '@storybook/react';
import { DlaFooterAlt1 } from '@datalayer/widgets/lib/Examples';
import { DlaFooterFixed1 } from '@datalayer/widgets/lib/Examples';
import { DlaFooter1 } from '@datalayer/widgets/lib/Examples';
import { DlaFooter2 } from '@datalayer/widgets/lib/Examples';
import { DlaFooter3 } from '@datalayer/widgets/lib/Examples';
import { DlaFooter4 } from '@datalayer/widgets/lib/Examples';
import { DlaFooter5 } from '@datalayer/widgets/lib/Examples';
import { DlaFooter6 } from '@datalayer/widgets/lib/Examples';

const footerBottom = () => <DlaFooterFixed1 />
storiesOf('DlaFooter', module)
  .add('bottomFooter', footerBottom);

const footerAlt = () => <DlaFooterAlt1 />
storiesOf('DlaFooter', module)
  .add('altFooter', footerAlt);
  
const footer = () => <DlaFooter1 />
storiesOf('DlaFooter', module)
  .add('footer1', footer);
  
const footer2 = () => <DlaFooter2 />
storiesOf('DlaFooter', module)
  .add('footer2', footer2);

const footer3 = () => <DlaFooter3 />
storiesOf('DlaFooter', module)
  .add('footer3', footer3);

const footer4 = () => <DlaFooter4 />
storiesOf('DlaFooter', module)
  .add('footer4', footer4);

const footer5 = () => <DlaFooter5 />
storiesOf('DlaFooter', module)
  .add('footer5', footer5);

const footer6 = () => <DlaFooter6 />
  storiesOf('DlaFooter', module)
    .add('footer6', footer6);
  
  