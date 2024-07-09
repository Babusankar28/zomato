import React from "react";
import "../css/Header.css";
const Header = () => {
  const path = window.location.pathname;
  let backGround;
  if (path === "/") {
    backGround = "p-3 header";
  } else {
    backGround = "p-3 header bg-danger shadow-lg";
  }
  return (
    <header className={backGround}>
      <div className="d-flex align-items-center justify-content-between container">
        <div className="logo">
          {path !== "/" && (
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU"
              alt="logo"
            />
          )}
        </div>
        <div className="buttons">
          <a href="./" className="mx-2  link-light">
            login
          </a>
          <button className="mx-2 btn btn-outline-light">Create Account</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
