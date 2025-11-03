import React from 'react';
import '../../styles/dashboard.css';

const Dashboard = ({ onNavigate }) => {
  const menuItems = [
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1>Aerocode</h1>
        </div>
        
        <div className="dashboard-menu">
          {menuItems.map(item => (
            <button 
              key={item.id}
              className="menu-btn"
              onClick={() => onNavigate(item.page)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;