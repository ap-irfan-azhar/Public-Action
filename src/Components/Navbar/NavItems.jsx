import NavItem from './NavBarItem'
import DropDown from './DropDown'

const dropDownMenu = [
    {title: "Competition", url:"/competition"},
    {title: "Conference", url:"Conference"},
    {title: "Festival", url:"/festival"},
]

function NavItems(props){
    return(
        <div>
            <NavItem url="/about" screen= {props.screen} name="About" />
		<DropDown name="Events" items={dropDownMenu}/>
	    <NavItem url="/how-to-register" screen= {props.screen} name="How to register" />
            <NavItem url="/registration" screen= {props.screen} name="Registration" />
        </div>
    )
}

export default NavItems
