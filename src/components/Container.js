import React from 'react';

import Card from './Card';
const Container = ({ players, chosenPlayer, newScore, weHaveAWinner }) => {
	return (
		<div className="w-full flex flex-wrap">
			{players.map((item) => (
				<Card
					player={item}
					key={item.id}
					chosenPlayer={chosenPlayer}
					newScore={newScore}
					weHaveAWinner={weHaveAWinner}
				/>
			))}
		</div>
	);
};

export default Container;
