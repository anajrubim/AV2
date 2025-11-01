import React from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <main className="content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;