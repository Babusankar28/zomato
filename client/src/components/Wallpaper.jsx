import React from "react";
import Header from "./Header";
import "../css/Wallpaper.css";
const Wallpaper = () => {
  return (
    <div className="wallpaper text-white text-center">
      <Header />
      <div className="wallpaper-container">
        <div className="container ">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="d-flex justify-center wallpaper-logo">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU"
                  alt="logo"
                  className="mx-auto mb-3"
                />
              </div>
              <h1 className="my-2">
                Find the best restaurents, cafe, and bars
              </h1>
              <div className="row mt-5 px-lg-5">
                <div className="col-lg-4 ">
                  <div className="input-group">
                    <select className="form-control">
                      <option value="">Chennai</option>
                      <option value="">Madurai</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search for reataurents"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallpaper;
