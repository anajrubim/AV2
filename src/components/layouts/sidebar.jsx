import React from 'react';
import '../../styles/sidebar.css';

const Sidebar = ({ onNavigate, currentPage }) => {
  const menuItems = [
    { id: 'funcionarios', label: 'Funcionários', page: 3},
    { id: 'aeronaves', label: 'Aeronaves', page: 7 },
    { id: 'pecas', label: 'Peças', page: 9},
    { id: 'testes', label: 'Testes', page: 12},
    { id: 'etapas', label: 'Etapas', page: 14},
    { id: 'relatorios', label: 'Relatórios', page: 16}
  ];

  return (
    <div className="sidebar">
      <nav className="sidebar-menu">
        {menuItems.map(item => (
          <button
            key={item.id}
            className={`menu-item ${currentPage === item.page ? 'active' : ''}`}
            onClick={() => onNavigate(item.page)}
          >
            <span className="menu-icon">{item.icon}</span>
            <span className="menu-label">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;