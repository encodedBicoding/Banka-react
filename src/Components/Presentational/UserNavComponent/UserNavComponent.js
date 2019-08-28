import React from 'react';
import { Link } from 'react-router-dom';
import './UserNavComponent.css';

const UserNavComponent = () => {
  const getUserName = () => {
    return window.localStorage.getItem('__banka__user__name').toUpperCase();
  }
  return (
    <div className="profile-nav-container">
      <nav className="profile-nav">
        <ul className="profile-list-container">
          <li className="profile-image" title="profile">
            <Link
              to="/profile"
            >
              <img src="./images/banka_user_profile_image.png" alt='banka_user_profile_image'></img>
            </Link>
          </li>
          <li className="profile-logo">
            <span className="pl-logo">B</span>
            <span className="pl-logo">A</span>
            <span className="pl-logo">N</span>
            <span className="pl-logo">K</span>
            <span className="pl-logo pl-logo-last">A</span>
          </li>
          <li className="profile-welcome">
            {
              <div>
                <span>welcome{' '}</span>
                <span className='welcome-note'>{getUserName()}</span>
              </div>
            }
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default UserNavComponent;
