import NavItem from './NavBarItem'
import DropDown from './DropDown'

const dropDownEvents = [
    {title: "Competition", url:"/competition"},
    {title: "Conference", url:"Conference"},
    {title: "Festival", url:"/festival"},
]


const dropDownRegistrations= [
    {title: "Competition", url:"/competition"},
    {title: "Conference", url:"Conference"},
]

function NavItems(props){
    return(
        <div>
            <NavItem url="/about" screen= {props.screen} name="About" />
		<DropDown name="Events" items={dropDownEvents}/>
	    <NavItem url="/how-to-register" screen= {props.screen} name="How to register" />

		<DropDown name="Registrations" items={dropDownRegistrations}/>
            <NavItem url="/#tes" screen= {props.screen} name="Mentors" />
            <NavItem url="/#" screen= {props.screen} name="Partner" />
        </div>


    )
}

export default NavItems
