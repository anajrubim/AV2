import React from 'react';
import '../../styles/dashboard.css';

const Dashboard = ({ onNavigate }) => {
  const menuItems = [
    { id: 'funcionarios', label: 'Funcionários', page: 3 },
    { id: 'aeronave', label: 'Aeronave', page: 7 }
  ];

  return (
    <div className="dashboard-container">
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
  );
};

export default Dashboard;