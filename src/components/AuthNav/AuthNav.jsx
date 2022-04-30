import { NavLink} from 'react-router-dom';
import s from './AuthNav.module.css';



export default function AuthNav() {
  
  return (
    <>
      <NavLink
        to="register"
       
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        Registration
      </NavLink>

      <NavLink
        to="login"
       
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        LogIn
      </NavLink>
    
      {/* <Outlet /> */}
    </>
  );
}
