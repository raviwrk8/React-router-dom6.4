import React from 'react';
import './Layout1.css';
import { Link, Outlet } from 'react-router-dom';

const Layout1 = () => {
  return (
    <div>
      <div className="nav">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/profile">
          <li>Profile</li>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout1;
