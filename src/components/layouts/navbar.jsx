import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Aerocode</h1>
      </div>
      <div className="navbar-user">
        <span>Usuário</span>
        <button className="logout-btn">Sair</button>
      </div>
    </nav>
  );
};

export default Navbar;