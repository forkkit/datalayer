import React from 'react';
import { docs } from './../utils/storybook';

export default {
  title: 'Lumino/React in Lumino',
  id: 'react-in-lumino-id',
  parameters: {
    docs: {
      inlineStories: true,
    },
  },
};

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
export const welcome = () => {  
  return Welcome({name: 'Eric'})
};
docs(welcome,`
Hello world!

### Markdown support working well!

1. list
1. list
`);
