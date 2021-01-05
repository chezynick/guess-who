import React from 'react';

const Questions = ({ changeDisplay, reducePlayers }) => {
	return (
		<div className="absolute z-5 top-12 w-full h-auto font-body flex flex-col items-center bg-red-600 text-white">
			<h1>Question box</h1>
			<button onClick={() => reducePlayers('beard')}>BEARD?</button>
			<button onClick={() => reducePlayers('moustache')}>MOUSTACHE?</button>
			<button onClick={() => reducePlayers('perm')}>PERM?</button>
			<button onClick={() => reducePlayers('mullet')}>MULLET?</button>
			<button onClick={changeDisplay}>CLOSE BOX</button>
		</div>
	);
};

export default Questions;
