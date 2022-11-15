import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import './style.less';

const NavBar = props => {
  return (
    <nav className="map-nav-bar">
      <NavLink to="/">
        <p>Home</p>
      </NavLink>
      <div className="modal" onClick={props.viewBuildings}>
        <p>Buildings</p>
      </div>
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      <div className="modal" onClick={props.calculateScore}>
        <p>Analytics</p>
      </div>
      <a href="https://placeitapi.herokuapp.com/">
        <p>API</p>
      </a>
    </nav>
  );
};

export default NavBar;
