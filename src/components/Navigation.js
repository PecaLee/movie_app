import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";

function Navigation() {
  return (
    <div className="Nav">
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
    </div>
  );
}

export default Navigation;
