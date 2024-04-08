import {  NavLink } from "react-router-dom"
import styles from "./NavPage.module.css";
import Logo from  './Logo';


const NavPage = () => {

  const {nav} = styles

  return (
         <nav className= {nav} >
          
          <Logo />
            <ul>
                  <li> <NavLink to="/pricing" >Pricing</NavLink> </li>
                <li> <NavLink to="/product" >Product</NavLink> </li>
                <li> <NavLink to="/login" >Login</NavLink> </li>
            </ul>
         </nav>
  )
}

export default NavPage