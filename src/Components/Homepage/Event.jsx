import { Link } from 'react-router-dom'

export default function Event(props) {
    return(
        <Link className="md:w-1/4 w-1/4" to={`/events/${props.to}`}>
            <div 
                className="my-10 h-40 bg-putih rounded text-center bg-cover transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/images/events/event-${props.img}.jpeg')` }}
            > 
                <div className={`text-center font-semibold text-lg py-12 ${props.teksGelap ? "text-ungu-400":"text-putih"}`}>
                    {props.title}
                </div>
            </div>
        </Link>
    )    
}