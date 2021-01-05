import React from 'react';

import Card from './Card';
const Container = ({ players, chosenPlayer }) => {
	return (
		<div className="w-full flex flex-wrap">
			{players.map((item) => (
				<Card player={item} key={item.id} chosenPlayer={chosenPlayer} />
			))}
		</div>
	);
};

export default Container;
