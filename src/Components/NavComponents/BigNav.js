import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

export const BigNav = (
  { home, 
    about, 
    contact, 
    signup, 
    login, 
    showLoginFormModal, 
    showSignupFormModal }) => {
  return (
    <div className="nav">
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
              {home}
            </Link>
          </li>
          <li className="home_nav_list">
            <a href="#about" id="nav_link">{about}</a>
          </li>
          <li className="home_nav_list">
            <a href="#contact" id="nav_link"> {contact}</a>
          </li>
          <li className="home_nav_list" datatest="signupmodal" onClick={showSignupFormModal}>
            {signup}
          </li>
          <li className="home_nav_list" onClick={showLoginFormModal}>
            {login}
          </li>
        </ul>
      </nav>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  showSignupFormModal: () => dispatch({ type: 'SIGNUP_MODAL'}),
  showLoginFormModal: () => dispatch({ type: 'LOGIN_MODAL'})
})
export default connect(null, mapDispatchToProps)(BigNav);
