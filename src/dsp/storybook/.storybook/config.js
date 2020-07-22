import {addParameters, configure} from '@storybook/react';
import {themes} from '@storybook/theming';

addParameters({
	options: {
		theme: themes.normal
	}
});

const comps = require.context('./../src', true, /.stories.tsx$/);

configure(() => {
	comps.keys().forEach(filename => comps(filename));
}, module);
