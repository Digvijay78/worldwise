import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./component/CityList";
import { useEffect, useState } from "react";
import CountriesList from "./component/CountriesList";
import City from "./component/City"
import Form from "./component/Form"

const BASE_URL = "http://localhost:9000";

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCitites() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("There was an error loadinf data");
      } finally {
        setIsLoading(false);
      }
    }

    fetchCitites();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<CityList cities = {cities} isLoading = {isLoading} />} />
            <Route path="/app/cities" element={<CityList cities={cities} isLoading ={isLoading} />} />

            <Route path ="/app/cities/:id" element ={<City />} />

            <Route path="/app/countries" element={<CountriesList cities={cities} isLoading={isLoading} />} />
            <Route path="/app/form" element={<Form />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
