import React from 'react';
import {storiesOf} from '@storybook/react';

import TransformVDOM from "@nteract/transform-vdom";

export default {
  title: 'VDOM/Nteract',
};

const vdom = () => (
  <TransformVDOM
    data={{ key: '', tagName: "div", attributes: { style: { color: "green" } },
      children: [
        { key: '', tagName: "h1", attributes: {}, children: "DATALAYER" },
        { key: '', tagName: "img", attributes: { src: "https://raw.githubusercontent.com/datalayer/datalayer/main/res/logo/datalayer-25.svg?sanitize=true" }, children: [] }
      ]
    }}
  />
);

storiesOf('VDOM/Nteract', module)
  .add('VDOM', vdom);
