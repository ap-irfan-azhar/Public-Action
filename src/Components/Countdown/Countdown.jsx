import CountdownBox from './CountdownBox'
import {useState} from 'react'


export default function Countdown () {
	const [timerSeconds, setSeconds] = useState(0)	
	const [timerMinutes, setMinutes] = useState(0)	
	const [timerHours, setHours] = useState(0)	
	const [timerDays, setDays] = useState(0)	
	
	let countDownDate = new Date(new Date("jul 18, 2021 13:00:00").toLocaleString("en-US", {timeZone: "utc"})).getTime();
	
	let startCountDown = setInterval( function() {
	
	let now = new Date(new Date().toLocaleString("en-US", {timeZone: "utc"})).getTime();
		let distance = countDownDate - now;
    
		let days = Math.floor(distance / (1000 * 60 * 60 * 24));
		if (days < 10){
			days = "0" + days;
		}
	    
		let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		if (hours < 10){
			hours = "0" + hours;
		}
	    
		let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
		if (minutes < 10){
			minutes = "0" + minutes;
		}
	    
		let seconds = Math.floor((distance % (1000 * 60)) / 1000)
		if (seconds < 10){
			seconds = "0" + seconds;
		}
		
		setDays(days)
		setHours(hours)
		setMinutes(minutes)
		setSeconds(seconds)
		if (distance < 0){
			clearInterval(startCountDown);
			setDays("00")
			setHours("00")
			setMinutes("00")
			setSeconds("00")
		}

	}, 1000)

	return(
		<div className="grid md:grid-cols-4 grid-cols-2 gap-y-8 md:pt-12 justify-items-center">
			<div className="max-w-max justify-center my-auto">
				<div className="flex">
					<CountdownBox number={timerDays.toString().slice(0,1)} />
					<CountdownBox number={timerDays.toString().slice(1,2)} />
				</div>
				<p className="text-white text-center md:text-5xl text-4xl font-semibold text-center"> Days </p>
			</div>
			<div className="max-w-max justify-center my-auto">
				<div className="flex">
					<CountdownBox number={timerHours.toString().slice(0,1)} />
					<CountdownBox number={timerHours.toString().slice(1,2)} />
				</div>
				<p className="text-white text-center md:text-5xl text-4xl font-semibold text-center"> Hours</p>
			</div>
			<div className="max-w-max justify-center my-auto">
				<div className="flex">
					<CountdownBox number={timerMinutes.toString().slice(0,1)} />
					<CountdownBox number={timerMinutes.toString().slice(1,2)} />
				</div>
				<p className="text-white text-center md:text-5xl text-4xl font-semibold text-center"> Minutes </p>
			</div>
			<div className="max-w-max justify-center my-auto">
				<div className="flex">
					<CountdownBox number={timerSeconds.toString().slice(0,1)} />
					<CountdownBox number={timerSeconds.toString().slice(1,2)} />
				</div>
				<p className="text-white text-center md:text-5xl text-4xl font-semibold text-center"> Seconds </p>
			</div>
		</div>

)

}
