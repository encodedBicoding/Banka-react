import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const SmallNav = ({ 
  home, 
  about, 
  contact, 
  signup, 
  login,
  showLoginFormModal, 
  showSignupFormModal 
}) => {
  return (
    <div className="smallnav nav">
      <nav className="sm_nav">
        <span className="sm_nav_title">B</span>
        <span className="sm_nav_title">A</span>
        <span className="sm_nav_title">N</span>
        <span className="sm_nav_title">K</span>
        <span className="sm_nav_title sm_nav_last_child">A</span>
        <ul className="sm_nav_list">
          <li className="sm_nav_list_item">
            <Link to="/" id="sm_nav_link">
              {home}
            </Link>
          </li>
          <li className="sm_nav_list_item">
            <a href="#about" id="nav_link">{about}</a>
          </li>
          <li className="sm_nav_list_item">
            <a href="#contact" id="nav_link">{contact}</a>
          </li>
          <li className="sm_nav_list_item" onClick={showSignupFormModal}>
            {signup}
          </li>
          <li className="sm_nav_list_item" onClick={showLoginFormModal}>
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

export default connect(null, mapDispatchToProps)(SmallNav);
