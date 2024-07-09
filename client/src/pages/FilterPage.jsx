import React from "react";
import Header from "../components/Header";
import FilterItems from "../components/FilterItems";
import FoodCard from "../components/FoodCard";
import "../css/FilterPage.css";

const FilterPage = () => {
  return (
    <div className="filter-page">
      <Header />
      <div className="container">
        <h1 className="p-3 display-5 fw-medium">Breakfast Place In Mumbai</h1>
        <div className="row">
          <FilterItems />
          <div className="col-lg-9 px-3">
            <FoodCard />
            <FoodCard />
            <div className="my-5 d-flex justify-content-center align-items-center gap-3">
              <button className="btn btn-outline-secondary">
                <i class="bi bi-chevron-left"></i>
              </button>
              <button className="btn btn-outline-secondary">1</button>
              <button className="btn btn-outline-secondary">2</button>
              <button className="btn btn-outline-secondary">3</button>
              <button className="btn btn-outline-secondary">4</button>
              <button className="btn btn-outline-secondary">5</button>
              <button className="btn btn-outline-secondary">
                <i class="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPage;
