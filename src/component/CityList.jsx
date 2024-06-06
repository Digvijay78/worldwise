import CityITem from "./CityITem";
import styles from "./CityList.module.css"
import Spinner from  "./Spinner"
import Message from "./Message"
import { useCities } from "../contexts/CititesContext";

const CityList = () => {

   const {cities , isLoading}  = useCities()
  

  if(isLoading) return <Spinner />

  if(!cities.length) return <Message message ="Add your first city by clicking on a city on the map" />

  return (
    <ul className= {styles.cityLsit} >
            {cities.map(city => <CityITem  key = {city.id} city ={city} /> )}
       </ul>
  )
}

export default CityList