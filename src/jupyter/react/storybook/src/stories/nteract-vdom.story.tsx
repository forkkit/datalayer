import React from 'react';

import TransformVDOM from "@nteract/transform-vdom";

export default {
  title: 'Nteract/VDOM',
};

export const vdomText = () => (
  <TransformVDOM
    data={{ key: '', tagName: "div", attributes: { style: { color: "green" } },
      children: [
        {
          key: '',
          tagName: "h1",
          attributes: {},
          children: "DATALAYER"
        },
      ]
    }}
  />
);

export const vdomImage = () => (
  <TransformVDOM
    data={{ key: '', tagName: "div", attributes: { style: { } },
      children: [
        {
          key: '',
          tagName: "img",
          attributes: {
            src: "https://raw.githubusercontent.com/datalayer/datalayer/main/res/logo/datalayer-25.svg?sanitize=true"
          },
          children: []
        }
      ]
    }}
  />
);
