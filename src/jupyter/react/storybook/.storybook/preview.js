import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { addParameters } from '@storybook/react';
import { configure } from '@storybook/react';

addParameters({
	docs: {
	  container: DocsContainer,
	  page: DocsPage,
	},
  });

const req = require.context('./../src', true, /.story.(tsx|mdx)$/);
configure(req, module);
