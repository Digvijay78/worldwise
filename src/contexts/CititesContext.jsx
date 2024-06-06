import { createContext, useContext } from "react";
import { useEffect, useState } from "react";

const CitiesContext = createContext();

const BASE_URL = "http://localhost:9000";

function CitiesProvider({children}) {
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentCity , setCurrrentCity] = useState({})
  
    useEffect(() => {
      async function fetchCitites() {
        try {
          setIsLoading(true);
          const res = await fetch(`${BASE_URL}/cities`);
          const data = await res.json();
          setCities(data);
        } catch {
          alert("There was an error loading data");
        } finally {
          setIsLoading(false);
        }
      }
  
      fetchCitites();
    }, []);

    async function getCity(id) {
        try {
          setIsLoading(true);
          const res = await fetch(`${BASE_URL}/cities/${id}`);
          const data = await res.json();
          setCurrrentCity(data);
        } catch {
          alert("There was an error loading data");
        } finally {
          setIsLoading(false);
        }
      }

    return (
        <CitiesContext.Provider value = {{
            cities,
            isLoading,
            currentCity,
            getCity,

        }} >
        
        {children}
        
        </CitiesContext.Provider>
    )
}

function useCities() {
    const context = useContext(CitiesContext)
    
    if (context === undefined) throw new Error("Cities Context is used outside the Provider range")
    return context
}


export {CitiesProvider , useCities}