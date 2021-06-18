import NavItem from './NavBarItem'
import {NavItemHash} from './NavBarItem'
import DropDown from './DropDown'

const dropDownEvents = [
    {title: "Competition", url:"/competition"},
    {title: "Conference", url:"/conference"},
    {title: "Festival", url:"/festival"},
]


const dropDownRegistrations= [
    {title: "Competition", url:"/competition"},
    {title: "Conference", url:"/conference"},
]

function NavItems(props){

    function handleClick(){
        props.onChange()        
    }

    return(
        <div>
            <NavItem onChange={handleClick} url="/about" screen= {props.screen} name="About" />
            <DropDown onChange={handleClick} name="Events" items={dropDownEvents}/>
            <NavItem onChange={handleClick} url="/how-to-register" screen= {props.screen} name="How to register" />
            <DropDown  onChange={handleClick} name="Registrations" items={dropDownRegistrations}/>
            <NavItemHash url="/#mentors" name="Mentors" screen={props.screen} />
            <NavItemHash url="/#partners" name="Partner" screen={props.screen} />
        </div>


    )
}

export default NavItems
