import { Link } from 'react-router-dom'

function NavItem(props) {
    return(
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <Link
            to={props.url}
            className={`hover:bg-indigo-400 text-indigo-900 px-3 py-2 rounded-md font-medium hover:text-white ${props.screen === "large"? "text-sm":"block text-base"}`}
          >
            {props.name}
        </Link>
    )
}

export default NavItem