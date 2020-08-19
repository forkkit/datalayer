import * as React from 'react';
import * as ReactDOM from 'react-dom';

import SplitPanelDemo from './lumino-in-react/demos/SplitPanelDemo';
import TabPanelDemo from './lumino-in-react/demos/TabPanelDemo';
import MultipleDocksDemo from './lumino-in-react/demos/MultipleDocksDemo';

ReactDOM.render(
  <div>
    <SplitPanelDemo/>
    <TabPanelDemo/>
    <MultipleDocksDemo/>
  </div>
  ,
  document.getElementById("root")
);
