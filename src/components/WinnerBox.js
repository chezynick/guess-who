import React from 'react';
const WinnerBox = ({ score, chosenPlayer, highScore, PlayAgain }) => {
	const clickHandler = () => {
		PlayAgain();
	};
	return (
		<div className="w-full bg-red-600 text-white h-auto z-20 flex flex-col absolute top-20 items-center">
			<h1>Congratulation You have found the mystery player!</h1>
			<h3>It was none other than {chosenPlayer.name}</h3>
			<img src={chosenPlayer.image} alt={chosenPlayer.name} />
			<h3>You finished with {score} points remaining</h3>
			{score > highScore ? (
				<h3>you set a new record </h3>
			) : (
				<h3>you failed to beat the highest score of {highScore}</h3>
			)}
			<button onClick={clickHandler}>Play Again?</button>
		</div>
	);
};

export default WinnerBox;
