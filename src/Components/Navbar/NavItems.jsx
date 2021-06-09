import NavItem from './NavBarItem'
import DropDown from './DropDown'

const dropDownMenu = [
    {title: "lomba 1", url:"/competition-1"},
    {title: "lomba 2", url:"/competition-2"},
]

function NavItems(props){
    return(
        <div>
            <NavItem url="/about" screen= {props.screen} name="About" />
            <DropDown name="Competition" items={dropDownMenu}/>
            <NavItem url="/how-to-register" screen= {props.screen} name="How to register" />
            <NavItem url="/registration" screen= {props.screen} name="Registration" />
        </div>
    )
}

export default NavItems
