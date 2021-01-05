import React from 'react';
const NewGame = ({ getRandomInt }) => {
	return (
		<div className="z-10 absolute w-full top-20 h-44 bg-red-600 font-body text-white text-xl flex flex-col items-center justify-evenly">
			<h1>Play new Game?</h1>
			<button onClick={() => getRandomInt(1, 25)}>Click Here!</button>
		</div>
	);
};

export default NewGame;
