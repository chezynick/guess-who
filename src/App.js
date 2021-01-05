import React, { useState } from 'react';

//import copmponents
import Header from './components/Header';
import Container from './components/Container';
import { Data } from './components/Data';
import Questions from './components/Questions';
import NewGame from './components/NewGame';
import WinnerBox from './components/WinnerBox';

function App() {
	const [players, setPlayers] = useState(Data);
	const [questionDisplay, setQuestionDisplay] = useState(false);
	const [chosenPlayer, setChosenPlayer] = useState([]);
	const [newDisplay, setNewDisplay] = useState(true);
	const [winner, setWinner] = useState(false);
	const [highScore, setHighScore] = useState(0);
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
		if (score <= 0) {
			alert('you lose');
		}
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
		} else if (item === 'sidies') {
			if (chosenPlayer.sidies === true) {
				const result = players.filter((player) => player.sidies === true);
				setPlayers(result);
			} else {
				const result = players.filter((player) => player.sidies === false);
				setPlayers(result);
			}
			changeDisplay();
		} else if (item === 'balding' || item === 'blonde' || item === 'brown') {
			const result = players.filter((player) => player.hair === chosenPlayer.hair);
			setPlayers(result);
			changeDisplay();
		}
	};
	//winner function
	const weHaveAWinner = () => {
		setWinner(true);
		if (score > highScore) {
			setHighScore(score);
		}
	};
	const PlayAgain = () => {
		setPlayers(Data);
		getRandomInt(1, 25);
		setScore(300);
		setWinner(false);
	};
	return (
		<div className="App">
			<Header changeDisplay={changeDisplay} score={score} />
			{newDisplay ? <NewGame getRandomInt={getRandomInt} highScore={highScore} /> : ''}
			{winner ? (
				<WinnerBox score={score} chosenPlayer={chosenPlayer} highScore={highScore} PlayAgain={PlayAgain} />
			) : (
				''
			)}
			<Container
				players={players}
				chosenPlayer={chosenPlayer}
				newScore={newScore}
				weHaveAWinner={weHaveAWinner}
			/>
			{questionDisplay ? (
				<Questions changeDisplay={changeDisplay} reducePlayers={reducePlayers} newScore={newScore} />
			) : (
				''
			)}
		</div>
	);
}

export default App;
