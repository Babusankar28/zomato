import React from "react";

const FilterItems = () => {
  return (
    <div className="col-lg-3 shadow-lg p-4">
      <h3>Filters</h3>
      <div className="mt-4">
        <label htmlFor="location" className="h6 text-muted">
          Locations
        </label>
        <select className="form-control" id="location">
          <option value="madurai">Madurai</option>
        </select>
      </div>
      <div className="mt-4">
        <h6 className="h6 text-muted">Cuisines</h6>
        <div className="form-check">
          <input
            type="checkbox"
            id="northIndian"
            className="form-check-input"
          />
          <label htmlFor="northIndian" className="form-check-label">
            North Indian
          </label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            id="southIndian"
            className="form-check-input"
          />
          <label htmlFor="southIndian" className="form-check-label">
            South Indian
          </label>
        </div>
        <div className="form-check">
          <input type="checkbox" id="chinese" className="form-check-input" />
          <label htmlFor="chinese" className="form-check-label">
            Chinese
          </label>
        </div>
        <div className="form-check">
          <input type="checkbox" id="fastFood" className="form-check-input" />
          <label htmlFor="fastFood" className="form-check-label">
            Fast Food
          </label>
        </div>
        <div className="form-check">
          <input type="checkbox" id="steetFood" className="form-check-input" />
          <label htmlFor="steetFood" className="form-check-label">
            Street Food
          </label>
        </div>
      </div>
      <div className="mt-4">
        <h6 className="h6 text-muted">Cost for two</h6>
        <div className="form-check">
          <input
            type="checkbox"
            id="lessThan500"
            className="form-check-input"
          />
          <label htmlFor="lessThan500" className="form-check-label">
            Less than <i className="bi bi-currency-rupee"></i>500
          </label>
        </div>
        <div className="form-check">
          <input type="checkbox" id="500To1000" className="form-check-input" />
          <label htmlFor="500To1000" className="form-check-label">
            <i className="bi bi-currency-rupee"></i> 500 To{" "}
            <i className="bi bi-currency-rupee"></i>1000
          </label>
        </div>
        <div className="form-check">
          <input type="checkbox" id="1000To1500" className="form-check-input" />
          <label htmlFor="1000To1500" className="form-check-label">
            <i className="bi bi-currency-rupee"></i> 1000 To{" "}
            <i className="bi bi-currency-rupee"></i>1500
          </label>
        </div>
        <div className="form-check">
          <input type="checkbox" id="1500To2000" className="form-check-input" />
          <label htmlFor="1500To2000" className="form-check-label">
            <i className="bi bi-currency-rupee"></i> 1500 To{" "}
            <i className="bi bi-currency-rupee"></i>2000
          </label>
        </div>
        <div className="form-check">
          <input type="checkbox" id="2000+" className="form-check-input" />
          <label htmlFor="2000+" className="form-check-label">
            <i className="bi bi-currency-rupee"></i> 2000+
          </label>
        </div>
      </div>
      <div className="mt-4">
        <h6 className="h6 text-muted">Sort</h6>
        <div className="form-check">
          <input
            type="radio"
            id="lowToHigh"
            className="form-check-input"
            name="sortPrice"
          />
          <label htmlFor="lowToHigh" className="form-check-label">
            Price Low To High
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            id="HighToLow"
            className="form-check-input"
            name="sortPrice"
          />
          <label htmlFor="HighToLow" className="form-check-label">
            Price High To Low
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterItems;
