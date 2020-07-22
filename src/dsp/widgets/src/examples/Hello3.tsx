import React from "react";
import styled from "styled-components";
import { Button } from '@material-ui/core';
// import { buildIcon, html5Icon, runningIcon } from '@jupyterlab/ui-components';

import DlaProfile4 from '../profile/DlaProfile';
import DlaOverview1 from '../overview/DlaOverview1';

import ADiv from './ADiv';

const StyledButton = styled.button`
  background: palevioletred;
  color: white;
  padding: 8px 20px;
`;

const SButton = () => <StyledButton>&#128133; Button</StyledButton>;

const MButton = () => <Button color="primary">Primary</Button>;

const Hello3 = () => <>
  <DlaProfile4/>
  <DlaOverview1/>
  <SButton/>
  <MButton/>
  <ADiv/>
{/*
  <buildIcon.react
    elementPosition="center"
    kind="toolbarButton"
  />
  <html5Icon.react
    elementPosition="center"
    kind="launcherCard"
  />
  <runningIcon.react
    elementPosition="center"
    kind="mainAreaTab"
  />
*/}
</>;

export default Hello3;
