
export default function CountdownBox (props) {
	return(
		<div className={`md:w-24 w-20 md:h-32 h-28 shadow ${props.isDark ? "bg-white text-ungu-400" : "bg-ungu-400 text-putih"} rounded-lg shadow p-2 m-2 flex items-center`}>
			<p className="text-6xl font-semibold text-center m-auto"> {props.number} </p>	
		</div>
	)
}

