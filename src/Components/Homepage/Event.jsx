import { Link } from 'react-router-dom'

export default function Event(props) {
    return(
        <Link className="md:w-1/4 w-1/4" to={`/events/${props.to}`}>
            <div 
                className="my-10 h-40 bg-putih rounded shadow-lg text-center bg-cover transition duration-500 ease-in-out filter-grayscale transform hover:-translate-y-1 hover:scale-110"
                style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/images/events/event-${props.img}.jpeg')` }}
            > 
                <div className={`text-center font-semibold text-lg py-12 text-white transition duration-500 ${props.teksGelap ? "hover:text-ungu-400" : "hover:text-white"}`}>
                    {props.title}
                </div>
            </div>
        </Link>
    )    
}