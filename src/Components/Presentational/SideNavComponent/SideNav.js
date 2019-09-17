import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faBullseye, faCogs, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { withRouter} from 'react-router';
import './SideNav.css';

const SideNav = ({history, dispatch}) => {
  const navItem = [
    {
      icon: faPlusCircle,
      value: 'New Account',
      path: '/create'
    },
    {
      icon: faBullseye,
      value: 'View Accounts',
      path: '/accounts'
    },
    {
      icon:faCogs,
      value: 'Settings',
      path: '/settings'
    },
    {
      icon: faSignOutAlt,
      value: 'Logout'
    }
  ]
  const handleShowSpanChild = (e) => {
    const span = e.target.nextElementSibling;
    span.style.display = 'inline-block';
  }

  const handleHideSpanChild = (e) => {
    const span = e.target.nextElementSibling;
    span.style.display = 'none';
  }
  const generateSpanClassForStyling = (id) => {
    return `sd-nav-${id}`
  }
  const generateLink = (item) => {
    const { value, path } = item;
    if(value === 'Logout'){
      window.localStorage.clear();
      dispatch({ type: 'END_SESSION'});
      dispatch({ type: 'CLOSE_MODAL'})
      history.push('/');
    } else {
      history.push(path)
    }
  }
  const generateClassForUrlLocation = (item) => {
    const {path } = item;
    const urlPath =window.location.pathname;
    if(urlPath === path) {
      return 'sd-nav-list-item active-path'
    } else {
      return 'sd-nav-list-item'
    }
  } 

  return (
    <div className="side-nav-container">
      <nav className="side-nav">
        <ul className="sd-nav-list">
          {
            navItem.map((item, idx) => (
              <div key={idx} className="nav-list-wrap">
                <li className={generateClassForUrlLocation(item)} 
                  onMouseEnter={handleShowSpanChild} 
                  onMouseLeave={handleHideSpanChild}
                  onClick={()=>generateLink(item)}
                  onMouseOver={() => generateClassForUrlLocation(item)}
                >
                  <FontAwesomeIcon icon={item.icon} />{' '}
                </li>
                <span className={generateSpanClassForStyling(idx)}>{item.value}</span>
              </div>
            ))
          }
        </ul>
      </nav>
    </div>
  )
}

export default connect()(withRouter(SideNav));
