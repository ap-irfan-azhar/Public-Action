import { Link } from 'react-router-dom'

function NavItem(props) {


        function handleClick(){
            props.onChange()        
        }
    
    return(
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <Link
            onClick={handleClick}
            to={props.url}
            className={`hover:bg-ungu-150 text-gray-900 px-3 py-2 rounded-md font-medium hover:text-white transition duration-500 ease-in-out ${props.screen === "large"? "text-sm":"block text-base"}`}
          >
            {props.name}
            
        </Link>
    )
}

export default NavItem