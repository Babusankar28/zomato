import React from "react";
import DetailsCarousel from "../components/DetailsCarousel";
import DetailsTab from "../components/DetailsTab";
import Header from '../components/Header'
import '../css/DetailsPage.css'
const DetailsPage = () => {
  return (
    <div className="details-page">
      <Header/>
      <DetailsCarousel />
      <DetailsTab />
    </div>
  );
};

export default DetailsPage;
