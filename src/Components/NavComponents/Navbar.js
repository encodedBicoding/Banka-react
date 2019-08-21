import React, { useEffect, useState } from 'react';
import BigNav from './BigNav.js';
import SmallNav from './SmallNav.js';
import './NavStyle.css';

const Navbar = props => {
  let [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    window.onscroll = () => {
      setScrollPosition(document.documentElement.scrollTop);
    };
  }, [scrollPosition]);
  return (
    <div className="main-container">
      {scrollPosition > 20 ? (
        <SmallNav
          home={props.home}
          about={props.about}
          contact={props.contact}
          signup={props.signup}
          login={props.login}
        />
      ) : (
        <BigNav
          home={props.home}
          about={props.about}
          contact={props.contact}
          signup={props.signup}
          login={props.login}
        />
      )}
    </div>
  );
};

export default Navbar;
