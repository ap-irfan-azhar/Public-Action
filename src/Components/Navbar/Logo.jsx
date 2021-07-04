import {Link} from 'react-router-dom'

export default function Logo() {
	return(
		<div className="flex"> 
			<Link className="flex my-auto" to="/"> <img src={process.env.PUBLIC_URL + '/images/logo-pa-icon.png'} alt='logo public action' className="w-16 h-16"/> 

			<div className="flex font-sans text-xs my-auto text-gray-900 align-middle hidden md:block">
			<p>Public Action</p>
			<p>Public Policy and Management</p>
			<p>2021</p>
 </div>
</Link>
		</div>
)

}
