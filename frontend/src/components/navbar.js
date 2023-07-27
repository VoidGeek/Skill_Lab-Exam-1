import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-md bg-dark navbar-dark container-fluid">
          <Link to="/" className="navbar-brand">
            <img
              src="https://ingrammicrolink.com/wp-content/uploads/2016/10/HiReswhitehat.png"
              alt="Atomwaffen Division logo"
              style={{ maxWidth: '100px', maxHeight: '50px' }}
            />
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-info-circle"></i> About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/course" className="nav-link">
                <i className="fas fa-book"></i> Course
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
