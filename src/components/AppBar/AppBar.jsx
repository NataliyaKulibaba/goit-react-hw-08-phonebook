// import HomeView from "views/HomeView/HomeView"
import UserMenu from "components/UserMenu/UserMenu"
import AuthNav from '../AuthNav/AuthNav'
import Navigation from '../Navigation/Navigation'
import { useSelector } from "react-redux"
import { authSelectors } from "../../redux/auth"
// import {NavLink} from 'react-router-dom'

export default function AppBar(){
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    // const isLoggedIn = useSelector(state=>state.auth.isLoggedIn)
    console.log(isLoggedIn)
    return(
        <>
       
        <Navigation />

        {isLoggedIn?  
        // <NavLink to="contacts"/>
        <UserMenu/>
        
        :<AuthNav/>}
        </>
    )
}