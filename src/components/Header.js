import React from 'react';

const Header = ({ changeDisplay }) => (
	<div className="w-full font-body h-10 bg-red-600 flex justify-between px-10 text-white text-xl items-center">
		<h1>Guess Who 70s</h1>
		<button onClick={changeDisplay}>??</button>
	</div>
);

export default Header;
