export default function MentorBox(props){
    return(
        <div className="bg-putih text-center shadow rounded relative">
            <div className="group">
                <div className="w-full h-full rounded group-hover:hidden">
                    <img src={process.env.PUBLIC_URL + "images/mentors/" + props.img} className=" rounded" alt="" />
                </div>
                <div className="w-full py-4 px-2 h-full rounded top-0 opacity-0 transition duration-500 hover:opacity-100 bg-putih absolute text-justify text-sm md:text-lg text-ungu-400">
                    <p className="text-center font-semibold text-xl mb-1 text-putih bg-ungu-400 w-max rounded mx-auto py-1 px-2">{props.name}</p>
                    <p>{props.desc1}</p>
                    <p>{props.desc2}</p>
                </div>
            </div>
        </div>
    )
}