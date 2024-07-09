import React from "react";
import DetailsCarousel from "../components/DetailsCarousel";
import DetailsTab from "../components/DetailsTab";
import '../css/DetailsPage.css'
const DetailsPage = () => {
  return (
    <div className="details-page">
      <DetailsCarousel />
      <DetailsTab />
    </div>
  );
};

export default DetailsPage;
