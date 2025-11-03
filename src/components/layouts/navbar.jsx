import React from 'react';
import '../../styles/navbar.css';

const Navbar = ({ onNavigate, currentPage }) => {
  return (
    <div className="navbar">
      <div className="navbar-brand">
        <h1>Aerocode</h1>
      </div>
      <div className="navbar-actions">
        <button className="btn-sair" onClick={() => onNavigate(1)}>
          Sair
        </button>
      </div>
    </div>
  );
};

export default Navbar;