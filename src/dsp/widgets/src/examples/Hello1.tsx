import React from 'react';
import moment from 'moment';

import './Hello1.scss';

class Hello1 extends React.Component<any, any> {
	public constructor(props: any) {
		super(props)
	}
	public render() {
		return (
			<div className="Comp">
			<h3>
				<span role="img" aria-label="React Logo">
					⚛️
				</span>
          {' '}
				  Hello One, it is now {moment().toISOString()}
				</h3>
			</div>
		);
	}
};

export default Hello1;
