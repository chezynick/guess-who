import React from 'react';
const NewGame = ({ getRandomInt, highScore }) => {
	return (
		<div className="z-10 absolute w-full top-20 h-auto bg-red-600  text-white text-3xl flex flex-col items-center justify-evenly py-10">
			<ul className="border-white border-2 list-disc list-inside p-5 mb-4">
				<h1>Rules</h1>
				<li>Identify the mystery player chosen at random</li>
				<li>use a series of yes/no questions to narrow your options</li>
				<li>click the ?? button to access the questions</li>
				<li>Or click a player to make a guess</li>
				<li>Lose 50 points for each question or incorrect guess</li>
				<li>Good Luck</li>
			</ul>

			<h1 className="font-body">Play new Game?</h1>
			<button className="font-body py-4 " onClick={() => getRandomInt(1, 25)}>
				Click Here!
			</button>
			<h3 className="font-body">Current High Score is {highScore}</h3>
		</div>
	);
};

export default NewGame;
