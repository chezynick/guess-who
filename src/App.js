import React, { useState } from 'react';

//import copmponents
import Header from './components/Header';
import Container from './components/Container';
import { Data } from './components/Data';
import Questions from './components/Questions';
import NewGame from './components/NewGame';

function App() {
	const [players, setPlayers] = useState(Data);
	const [questionDisplay, setQuestionDisplay] = useState(false);
	const [chosenPlayer, setChosenPlayer] = useState([]);
	const [newDisplay, setNewDisplay] = useState(true);
	//score state
	const [score, setScore] = useState(300);
	//function to create random number which will form new guess who player
	const getRandomInt = (min, max) => {
		min = Math.ceil(min);
		max = Math.floor(max);
		const guess = Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
		setChosenPlayer(Data[guess]);
		//turn new game box display off
		setNewDisplay(false);
		return chosenPlayer;
	};
	//score function
	const newScore = (points) => {
		setScore(score - points);
		return score;
	};

	//function to render question box
	const changeDisplay = () => {
		setQuestionDisplay(!questionDisplay);
	};
	console.log(chosenPlayer);
	//array reducer
	const reducePlayers = (item) => {
		newScore(50);
		if (item === 'beard') {
			if (chosenPlayer.beard === true) {
				const result = players.filter((player) => player.beard === true);
				setPlayers(result);
			} else {
				const result = players.filter((player) => player.beard === false);
				setPlayers(result);
			}

			changeDisplay();
		} else if (item === 'perm') {
			if (chosenPlayer.perm === true) {
				const result = players.filter((player) => player.perm === true);
				setPlayers(result);
			} else {
				const result = players.filter((player) => player.perm === false);
				setPlayers(result);
			}
			changeDisplay();
		} else if (item === 'moustache') {
			if (chosenPlayer.moustache === true) {
				const result = players.filter((player) => player.moustache === true);
				setPlayers(result);
			} else {
				const result = players.filter((player) => player.moustache === false);
				setPlayers(result);
			}
			changeDisplay();
		} else if (item === 'mullet') {
			if (chosenPlayer.mullet === true) {
				const result = players.filter((player) => player.mullet === true);
				setPlayers(result);
			} else {
				const result = players.filter((player) => player.mullet === false);
				setPlayers(result);
			}
			changeDisplay();
		}
	};
	return (
		<div className="App">
			<Header changeDisplay={changeDisplay} score={score} />
			{newDisplay ? <NewGame getRandomInt={getRandomInt} /> : ''}

			<Container players={players} chosenPlayer={chosenPlayer} newScore={newScore} />
			{questionDisplay ? (
				<Questions changeDisplay={changeDisplay} reducePlayers={reducePlayers} newScore={newScore} />
			) : (
				''
			)}
		</div>
	);
}

export default App;
