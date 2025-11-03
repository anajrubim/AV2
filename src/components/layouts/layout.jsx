import React from 'react';
import Navbar from '../layouts/navbar';
import Sidebar from '../layouts/sidebar';
import '../../styles/layout.css';

const Layout = ({ children, onNavigate, currentPage }) => {
  return (
    <div className="layout">
      <Navbar onNavigate={onNavigate} currentPage={currentPage} />
      <div className="layout-content">
        <Sidebar onNavigate={onNavigate} currentPage={currentPage} />
        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;