import React from 'react';

const Questions = ({ changeDisplay, reducePlayers }) => {
	return (
		<div className="absolute z-5 top-12 w-full h-auto font-body flex flex-col items-center bg-red-600 text-white md:text-2xl">
			<h1>Does the player have a.....?</h1>
			<div className="grid md:grid-cols-2 text-center gap-3 py-3">
				<button onClick={() => reducePlayers('moustache')}>MOUSTACHE?</button>
				<button onClick={() => reducePlayers('perm')}>PERM?</button>
				<button onClick={() => reducePlayers('beard')}>A BEARD?</button>
				<button onClick={() => reducePlayers('mullet')}>MULLET?</button>
				<button onClick={() => reducePlayers('balding')}>BALDING?</button>
				<button onClick={() => reducePlayers('blonde')}>BLONDE HAIR?</button>
				<button onClick={() => reducePlayers('brown')}>BROWN HAIR?</button>
				<button onClick={() => reducePlayers('sidies')}>MAHOOOSIVE SIDIES?</button>
			</div>
			<button onClick={changeDisplay}>CLOSE BOX</button>
		</div>
	);
};

export default Questions;
