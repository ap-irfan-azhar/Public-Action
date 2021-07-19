export default function Patner(props){
    return(
        <div className={`bg-white shadow rounded mx-auto md:w-${props.width} w-${Math.floor(props.width / 6) * 4 } md:h-${props.height} h-${Math.floor(props.height / 6) * 4 } relative`}>
            <img
                className="h-full w-full rounded"
                src={process.env.PUBLIC_URL + "/images/partners/" + props.img}  
                alt={`Logo ${props.name}`} 
            />
            <div className="opacity-0 w-full h-full hover:opacity-80 absolute top-0 bg-oren transition duration-500 rounded p-2">
                <p className={`text-center text-white relative md:mt-${Math.floor(props.height / 12) * 4} mt-${Math.floor(props.height / 24) * 4} ${props.text === "xs" ? "md:text-xs text-2xs" : "md:text-base text-sm"}`}>
                    {props.name}
                </p>
            </div>
        </div>
    )
}