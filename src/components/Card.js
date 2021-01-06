import React from 'react';

const Card = ({ player, chosenPlayer, newScore, weHaveAWinner, removePlayer }) => {
	const clickHandler = (player) => {
		if (player === chosenPlayer.name) {
			weHaveAWinner();
		} else {
			newScore(50);
			removePlayer(player);
		}
	};

	return (
		<div
			onClick={() => clickHandler(player.name)}
			className="w-1/4 p-2 h-1/6 flex flex-col items-center border-red-600 border-2 md:w-1/6 md:h-1/3"
			key={player.id}
		>
			<img src={player.image} alt={player.name} className="h-24 md:h-44" />
			<h1 className="bg-red-600 text-white uppercase  font-body text-sm flex justify-center w-full">
				{player.name}
			</h1>
		</div>
	);
};

export default Card;
