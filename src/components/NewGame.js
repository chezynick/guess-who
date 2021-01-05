import React from 'react';
const NewGame = ({ getRandomInt }) => {
	return (
		<div className="z-10 absolute w-full top-20 h-auto bg-red-600  text-white text-3xl flex flex-col items-center justify-evenly py-10">
			<h1 className="font-body">Play new Game?</h1>
			<button className="font-body py-4 " onClick={() => getRandomInt(1, 25)}>
				Click Here!
			</button>
			<ul className="border-white border-2 list-disc list-inside p-5">
				<h1>Rules</h1>
				<li>Highest Score Wins</li>
				<li>click the ?? button to narrow your options</li>
				<li>Or click a player to make a guess</li>
				<li>Lose 50 points for each question or incorrect guess</li>
				<li>Good Luck</li>
			</ul>
		</div>
	);
};

export default NewGame;
