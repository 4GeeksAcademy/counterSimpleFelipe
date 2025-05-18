import React, { useEffect, useState } from "react";


const Home = () => {
	const [seconds, setSeconds] = useState(0);
	const [intervalId, setIntervalId] = useState();
	const [alarmValue, setAlarmValue] = useState(null);



	useEffect(() => {
		startInterval()
	}, [])


	const startInterval = () => {
		if (intervalId) return;
		const id = setInterval(() => {
			setSeconds(prevSecond => prevSecond + 1)
		}, 1000);
		setIntervalId(id)
	}

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

	const backCounter = () => {
		if (intervalId) return;
		const id = setInterval(() => {
			setSeconds(prevSecond => {
				if (prevSecond <= 1) {
					clearInterval(id);
					return 0;
				}
				return prevSecond - 1;
			});
		}, 1000);
		setIntervalId(id);
	};

	const alarmCounter = () => {
		if (seconds === alarmCounter(0)) {
			alert("finalizado")
		}
	}

	useEffect(() => {
		if (seconds === alarmValue) {
			alert("¡Finalizado!");
		}
	}, [seconds, alarmValue]);

	 const formattedSeconds = String(seconds).padStart(6, "0");




	return (
		<div className="text-center">
			<h1 className="text-center m-5 display-1 text-bg-dark p-3">🕑{formattedSeconds}</h1>
			<button onClick={startInterval}>Start</button>
			<button onClick={stopInterval}>Stop</button>
			<button onClick={resetCounter}>Reset</button>
			<button onClick={backCounter}>Cuenta Atrás</button>
			<input
				type="number"
				value={alarmValue || ""}
				placeholder="Introduce número"
				onChange={(e) => setAlarmValue(Number(e.target.value))}
			/>
		</div>
	);
};

export default Home;