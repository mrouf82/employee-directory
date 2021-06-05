import React from "react";
//import "./Nav.css";

function Nav({ searchEnter }) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="navbar-collapse row" id="navbarNav">
        <div className="searchbar">
          <form className="form-inline">
            <input
              className="form-control"
              type="search"
              placeholder="Search Employees"
              onChange={(e) => searchEnter(e)}
            />
          </form>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
