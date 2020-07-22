import React from 'react';
import ReactDOM from 'react-dom';
import HelloOne from './Hello1';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<HelloOne />, div);
	ReactDOM.unmountComponentAtNode(div);
});
