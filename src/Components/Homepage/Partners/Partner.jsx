export default function Patner(props){
    return(
        <div className={`bg-white shadow rounded mx-auto md:w-${props.size_md} w-${props.size_sm} h-auto relative`}>
            <img src={process.env.PUBLIC_URL + "/images/partners/" + props.img}  alt={props.name} />
            <div className="opacity-0 w-full h-full hover:opacity-75 absolute top-0 bg-oren transition duration-500 rounded p-2">
                <p className={"text-center text-white"}>
                    {props.name}
                </p>
            </div>

        </div>
    )
}