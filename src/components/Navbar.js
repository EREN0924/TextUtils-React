import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar(props) {
  const location = useLocation();
  return (
    <header className={`site-header theme-${props.mode}`}>
      <nav className="navbar navbar-expand-lg app-navbar">
        <div className="container navbar-inner">
          <Link className="navbar-brand app-brand" to="/" aria-label="TextUtils home"><span className="brand-mark" aria-hidden="true">T</span><span>TextUtils<small>WORDS, MADE SIMPLE</small></span></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav main-links">
              <li className="nav-item"><Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Workspace</Link></li>
              <li className="nav-item"><Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link></li>
            </ul>
            <label className="theme-toggle" htmlFor="switchCheckDefault"><span aria-hidden="true">☼</span><span>Dark mode</span><input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" checked={props.mode === 'dark'} onChange={props.toggleMode} /><span className="toggle-track" aria-hidden="true" /></label>
          </div>
        </div>
      </nav>
    </header>
  );
}

Navbar.propTypes = { title: PropTypes.string, aboutText: PropTypes.string, mode: PropTypes.string, toggleMode: PropTypes.func };
Navbar.defaultProps = { title: 'TextUtils', aboutText: 'About' };
