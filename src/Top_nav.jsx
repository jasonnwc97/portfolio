import React from "react";

function Top_nav() {
  return (
    <div>
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/home">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about_me">
            About me
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/project">
            Project
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Top_nav;
