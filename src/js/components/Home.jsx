import React, { useEffect, useState } from "react";


const Home = () => {
	const [seconds, setSeconds] = useState(0);
	const [intervalId, setIntervalId] = useState();
	

	useEffect(() => {
		startInterval()
	}, [])

	const startInterval = () => {
		if (intervalId) return;
		const id = setInterval(() => {
			setSeconds(prevSecond => prevSecond + 1)
		}, 100);
		setIntervalId(id)
	}
	 . 
	const stopInterval = () => {
		if (intervalId) {
			clearInterval(intervalId)
			setIntervalId(0)
		}
	}
	const resetCounter = () => {
		clearInterval(intervalId)
		setSeconds(0)
		setIntervalId(null)
		
	}

	const alarmCounter = () => {
		if (seconds === alarmCounter(0)){
			return alert ("finalizado")
		}
	}



	return (
		<div className="text-center">


			<h1 className="text-center mt-5">Counter: {seconds} s</h1>
			<button onClick={startInterval}>Start</button>
			<button onClick={stopInterval}>Stop</button>
			<button onClick={resetCounter}>Reset</button>
			<input type="number" value={""}  onChange={alarmCounter}/>





		</div>
	);
};

export default Home;