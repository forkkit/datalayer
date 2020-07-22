import React from 'react';
import moment from 'moment';

import './Hello2.scss';

export interface Props {
	name: string;
}

const Hello2: React.FC<Props> = (props: Props) => (
	<div className="Comp">
		<h3>
			<span role="img" aria-label="Yarn Logo">
				🐱
			</span>
      {' '}
			Hello {props.name}, it is now {moment().toISOString()}
		</h3>
	</div>
);

export default Hello2;
