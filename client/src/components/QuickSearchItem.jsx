import React from "react";
import image from "../image/breakfast.jpeg";
const QuickSearchItem = ({ name, details }) => {
  return (
    <div className="col-lg-4 p-3 mb-2 quick-search-item ">
      <div className="d-flex shadow-lg">
        <div className="food-img">
          <img src={image} alt="" height={"110px"} width={"110px"} />
        </div>
        <div className="food-details p-2">
          <h2 className="m-0">{name}</h2>
          <p className="m-0 text-muted">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default QuickSearchItem;
