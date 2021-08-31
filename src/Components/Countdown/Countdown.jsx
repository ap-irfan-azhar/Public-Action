import CountdownBox from './CountdownBox'
import {useState} from 'react'


export default function Countdown (props) {
	const [timerSeconds, setSeconds] = useState("--")	
	const [timerMinutes, setMinutes] = useState("--")	
	const [timerHours, setHours] = useState("--")	
	const [timerDays, setDays] = useState("--")
		
	
	let countDownDate = new Date(new Date(`${props.date} gmt+7`).toLocaleString("en-US", {timeZone: "Asia/Jakarta"})).getTime();
	
	let startCountDown = setInterval( function() {
	
	let now = new Date(new Date().toLocaleString("en-US", {timeZone: "Asia/Jakarta"})).getTime();
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
		<div className={`grid md:grid-cols-4 grid-cols-2 gap-y-8 md:pt-12 justify-items-center ${props.isDark ? "text-white": "text-ungu-400" }`}>
			<div className="max-w-max justify-center my-auto">
				<div className="flex">
					<CountdownBox
						isDark={props.isDark}
						number={timerDays.toString().slice(0,1)} 
					/>
					<CountdownBox
						isDark={props.isDark}
						number={timerDays.toString().slice(1,2)} 
					/>
				</div>
				<p className="text-center md:text-5xl text-4xl font-semibold text-center"> Days </p>
			</div>
			<div className="max-w-max justify-center my-auto">
				<div className="flex">
					<CountdownBox
						isDark={props.isDark}
						number={timerHours.toString().slice(0,1)} 
					/>
					<CountdownBox
						isDark={props.isDark}
						number={timerHours.toString().slice(1,2)} 
					/>
				</div>
				<p className="text-center md:text-5xl text-4xl font-semibold text-center"> Hours</p>
			</div>
			<div className="max-w-max justify-center my-auto">
				<div className="flex">
					<CountdownBox
						isDark={props.isDark}
						number={timerMinutes.toString().slice(0,1)} 
					/>
					<CountdownBox
						isDark={props.isDark}
						number={timerMinutes.toString().slice(1,2)} 
					/>
				</div>
				<p className="text-center md:text-5xl text-4xl font-semibold text-center"> Minutes </p>
			</div>
			<div className="max-w-max justify-center my-auto">
				<div className="flex">
					<CountdownBox
						isDark={props.isDark}
						number={timerSeconds.toString().slice(0,1)} 
					/>
					<CountdownBox
						isDark={props.isDark}
						number={timerSeconds.toString().slice(1,2)} 
					/>
				</div>
				<p className="text-center md:text-5xl text-4xl font-semibold text-center"> Seconds </p>
			</div>
		</div>

)

}
