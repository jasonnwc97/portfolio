import React from "react";
import { Link } from "react-router-dom";

function TopNav() {
  return (
    <div>
      <ul className="nav">
        <li className="nav-item">
          <Link to="/home" className="nav-link active">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/aboutme" className="nav-link active">
            About me
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/project" className="nav-link active">
            Project
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default TopNav;
