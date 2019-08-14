import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <React.Fragment>
      <div className="nav_logo">
        <span className="nav_title">B</span>
        <span className="nav_title">A</span>
        <span className="nav_title">N</span>
        <span className="nav_title">K</span>
        <span className="nav_title nav_last_child">A</span>
        <p className="nav_slogan">...first online mobile banking service</p>
      </div>
      <nav className="home_nav">
        <ul className="home_nav_header">
          <li className="home_nav_list">
            <Link to="/" id="nav_link">
              {props.home}
            </Link>
          </li>
          <li className="home_nav_list">
            <Link to="#about" id="nav_link">
              {props.about}
            </Link>
          </li>
          <li className="home_nav_list">
            <Link to="#contact" id="nav_link">
              {props.contact}
            </Link>
          </li>
          <li className="home_nav_list">{props.signup}</li>
          <li className="home_nav_list">{props.login}</li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export { Navbar };
