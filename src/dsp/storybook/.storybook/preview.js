import { addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

import { configure } from '@storybook/react';

addParameters({
	docs: {
	  container: DocsContainer,
	  page: DocsPage,
	},
  });

const req = require.context('./../src', true, /.stories.tsx$/);
configure(req, module);
