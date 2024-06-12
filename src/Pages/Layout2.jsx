import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout2 = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div className="sidebar" style={{ width: '300px', borderRight: '1px' }}>
        <Link to="/profile/setting">
          <li>Setting</li>
        </Link>
        <Link to="/profile/contactus">
          <li>Contact Us</li>
        </Link>
        <Link to="/profile/login">
          <li>Logout</li>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout2;
