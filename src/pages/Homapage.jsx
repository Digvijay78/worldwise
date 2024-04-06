import { Link, NavLink } from "react-router-dom"
import NavPage from "../component/NavPage"

const Homapage = () => {
  return (
    <div>
      <NavPage />
      
      WorldWise
      <NavLink to= "/app" > Go to App</NavLink>

    </div>
  )
}

export default Homapage