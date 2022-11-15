import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { NavLink, useHistory } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import wavy_left2 from '../../assets/wavy_left2.png';
import wavy_right2 from '../../assets/wavy_right2.svg';

import './style.less';

const LogIn = () => {
  let history = useHistory();
  function handleClick() {
    history.push('/map');
  }

  return (
    <>
      <nav className="home-nav-bar">
        <NavLink to="/">
          <p>ABOUT US</p>
        </NavLink>
        <NavLink to="/">
          <p>BLOG</p>
        </NavLink>
        <img src={logo} alt="logo" />
        <NavLink to="/">
          <p>CONTACT US</p>
        </NavLink>
        <NavLink to="/signup">
          <p className="button">Sign Up</p>
        </NavLink>
      </nav>

      <div className="signup-page">
        <div className="signup-card">
          <div className="text-wrapper">
            <h1>Log In</h1>
            <Form layout="vertical">
              <Form.Item label="Email Address">
                <Input />
              </Form.Item>
              <Form.Item label="Password">
                <Input />
              </Form.Item>
            </Form>
            <div style={{ display: 'flex', marginTop: '35px' }}>
              <Checkbox />
              <p>
                Keep me logged in
              </p>
            </div>
            <div className="button-wrapper">
              <Button onClick={handleClick} block={true} size="large">
                Submit
              </Button>
            </div>
          </div>
        </div>
        <img className="wLeft2" src={wavy_left2} alt="maps" />
        <img className="wRight2" src={wavy_right2} alt="maps" />
      </div>
    </>
  );
};

export default LogIn;
