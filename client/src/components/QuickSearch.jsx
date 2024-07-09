import React from "react";
import QuickSearchItem from "./QuickSearchItem";

const QuickSearch = () => {
  return (
    <div className="quick-search container py-4">
      <h1 className="fw-medium">Quick Searches</h1>
      <p className="text-muted fs-4 fw-medium">
        Discover by restaurents for type of meals
      </p>
      <div className="row">
        <QuickSearchItem
          details={"Start with the day with exclusive breakfast options"}
          name={"Breakfast"}
        />
        <QuickSearchItem
          details={"Start with the day with exclusive breakfast options"}
          name={"Breakfast"}
        />
        <QuickSearchItem
          details={"Start with the day with exclusive breakfast options"}
          name={"Breakfast"}
        />
        <QuickSearchItem
          details={"Start with the day with exclusive breakfast options"}
          name={"Breakfast"}
        />
        <QuickSearchItem
          details={"Start with the day with exclusive breakfast options"}
          name={"Breakfast"}
        />
        <QuickSearchItem
          details={"Start with the day with exclusive breakfast options"}
          name={"Breakfast"}
        />
      </div>
    </div>
  );
};

export default QuickSearch;
