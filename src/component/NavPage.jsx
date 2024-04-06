import {  NavLink } from "react-router-dom"
import styles from "./NavPage.module.css";

const NavPage = () => {

  const {nav} = styles

  return (
         <nav className= {nav} >
            <ul>
                <li> <NavLink to="/" >Homepage</NavLink> </li>
                <li> <NavLink to="/pricing" >Pricing</NavLink> </li>
                <li> <NavLink to="/product" >Product</NavLink> </li>
            </ul>
         </nav>
  )
}

export default NavPage