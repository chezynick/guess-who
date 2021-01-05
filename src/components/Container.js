import React from 'react';

import { Data } from './Data';
const Container = () => (
	<div>
		{Data.map((item) => (
			<div>
				<h1>{item.name}</h1>
				<img src={item.image} alt="footballer pic" />
			</div>
		))}
	</div>
);

export default Container;
