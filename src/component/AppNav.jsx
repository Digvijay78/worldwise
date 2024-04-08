import styles from "./AppNav.module.css"
import { NavLink } from "react-router-dom"

const AppNav = () => {
  const {nav} = styles
  return (
    <div className= {nav} >
      
      <ul>
        <li> <NavLink to ="/app/cities" > Cities </NavLink> </li>
        <li> <NavLink to="/app/countries" > Countries </NavLink>  </li>
      </ul>
      
      </div>
  )
}

export default AppNav