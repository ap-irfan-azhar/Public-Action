
export default function CountdownBox (props) {
	return(
		<div className="md:w-24 w-20 md:h-32 h-28 bg-white rounded-lg shadow p-2 m-2 flex items-center">
			<p className="text-6xl text-ungu-400 font-semibold text-center m-auto"> {props.number} </p>	
		</div>
	)
}

