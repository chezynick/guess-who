import React from 'react';

import Card from './Card';
const Container = ({ players, chosenPlayer, newScore, weHaveAWinner, removePlayer }) => {
	return (
		<div className="w-full flex flex-wrap">
			{players.map((item) => (
				<Card
					removePlayer={removePlayer}
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
