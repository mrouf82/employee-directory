import React, { Component } from "react";
//import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Employee Directory</h1>
        <p>View all of your employees and their contact information.</p>
        <p>
          Click on the red carrots on the table to organize their names
          alphabetically in a descending or ascending order
        </p>
      </div>
    );
  }
}
