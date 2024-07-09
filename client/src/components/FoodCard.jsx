import React from "react";

const FoodCard = () => {
  return (
    <div className="shadow-lg p-4 mb-4 food-card">
      <div className="d-flex gap-3 align-items-center border-bottom pb-3 border-secondary">
        <div className="food-card-img">
          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D"
            alt="hello"
          />
        </div>
        <div>
          <h3 className="m-0">The Big Chil Cakery</h3>
          <h5 className="text-muted m-0">Fort</h5>
          <p className="fs-6 m-0">
            Shop ,Plot D ,Samruthi compley,chincholi....
          </p>
        </div>
      </div>
      <div className="mt-3">
        <p className="m-1">
          <span className="w-25 d-inline-block">CUISINES :</span>Bakery
        </p>
        <p className="m-1">
          <span className="w-25 d-inline-block">COST FOR TWO :</span>
          <i className="bi bi-currency-rupee"></i>700
        </p>
      </div>
    </div>
  );
};

export default FoodCard;
