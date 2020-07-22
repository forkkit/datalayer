import React from 'react';
import ReactDOM from 'react-dom';
import HelloTwo from './Hello2';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<HelloTwo name='Eric' />, div);
	ReactDOM.unmountComponentAtNode(div);
});
