import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./component/CityList";

import CountriesList from "./component/CountriesList";
import City from "./component/City"
import Form from "./component/Form"
import { CitiesProvider } from "./contexts/CititesContext";



// hello 
function App() {
  

  return (
    <>
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate replace to ="cities" />} />

            <Route path="cities" element={<CityList />} />

            <Route path ="cities/:id" element ={<City />} />

            <Route path="countries" element={<CountriesList  />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      </CitiesProvider>
    </>
  );
}

export default App;
