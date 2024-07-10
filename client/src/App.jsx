import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FilterPage from "./pages/FilterPage";
import DetailsPage from "./pages/DetailsPage";
import axios from "axios";

function App() {
  const [location, setLocation] = useState([]);
  const getlocation = async () => {
    let data = await axios.get("http://localhost:8900/location").then((res) => {
      return res.data;
    });
    setLocation(data);
  };

  useEffect(() => {
    getlocation();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home location={location} />} />
        <Route path="/home" element={<Home location={location} />} />
        <Route path="/filter" element={<FilterPage />} />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
