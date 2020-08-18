import React from 'react';
import { docs } from './../utils/storybook';
import SplitPanelDemo from './../demos/SplitPanelDemo';
import TabPanelDemo from './../demos/TabPanelDemo';

export default {
  title: 'Simple/Simple',
  id: 'simple-id',
  parameters: {
    docs: {
      inlineStories: true,
    },
  },
};

export const demo1 = () => <SplitPanelDemo />
export const demo2 = () => <TabPanelDemo />

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export const welcome = () => {  
  return Welcome({name: 'eric'})
};

docs(welcome,`
Hello world!

### Markdown support working well!

1. list
1. list
`);
