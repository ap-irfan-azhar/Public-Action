import NavItem from './NavBarItem'
import DropDown from './DropDown'

const dropDownEvents = [
    {title: "Competition", url:"/events/competition"},
    {title: "Conferences", url:"/events/conferences"},
    {title: "Side Events", url:"/events/side-events"},
]


const dropDownRegistrations= [
    {title: "Competition", url:"/registration/competition"},
    {title: "Conference", url:"/registration/conference"},
]

function NavItems(props){

    function handleClick(){
        props.onChange()        
    }

    return(
        <div>
            <NavItem onChange={handleClick} url="/" screen= {props.screen} name="Home" />
            <NavItem onChange={handleClick} url="/about" screen= {props.screen} name="About" />
            <DropDown onChange={handleClick} name="Events" items={dropDownEvents}/>
            <NavItem onChange={handleClick} url="/guidebook" screen= {props.screen} name="Guidebook" />
            <DropDown  onChange={handleClick} name="Registrations" items={dropDownRegistrations}/>
        </div>


    )
}

export default NavItems
