import React from 'react';

import Card from './Card';
const Container = ({ players, chosenPlayer, newScore }) => {
	return (
		<div className="w-full flex flex-wrap">
			{players.map((item) => (
				<Card player={item} key={item.id} chosenPlayer={chosenPlayer} newScore={newScore} />
			))}
		</div>
	);
};

export default Container;
