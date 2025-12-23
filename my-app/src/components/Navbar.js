import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  const { isDark, setIsDark } = props;

  const handleToggle = () => {
    setIsDark(!isDark);
  };

  return (
    <nav className={`navbar navbar-expand-lg ${isDark ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container-fluid">
        <a className="navbar-brand">{"My App"}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/qr-generator">QR Generator</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Features
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">Text Pretter</a></li>
                <li><a className="dropdown-item" href="/">Encoding</a></li>
                <li><a className="dropdown-item" href="/">Decoding</a></li>
                <li><a className="dropdown-item" href="/">Word Search</a></li>
                <li><a className="dropdown-item" href="/">Word Count</a></li>
                <li><a className="dropdown-item" href="/">Tocken Generator (AI)</a></li>
              </ul>
            </li>
          </ul>

        </div>
      </div>
      <div className={`toggle-btn ${!isDark ? 'active' : ''}`} onClick={handleToggle}>
        <div className="icon">
          <i className={`fa-solid ${isDark ? 'fa-moon' : 'fa-sun'}`}></i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;