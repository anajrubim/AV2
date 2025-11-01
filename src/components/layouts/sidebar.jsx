import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/', label: 'Aeronaves', icon: '✈️' },
    { path: '/parts', label: 'Peças', icon: '🔧' },
    { path: '/tests', label: 'Testes', icon: '🧪' },
    { path: '/production', label: 'Etapas', icon: '📋' },
    { path: '/reports', label: 'Relatórios', icon: '📊' },
    { path: '/employees', label: 'Funcionários', icon: '👥' },
  ];

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {menuItems.map(item => (
          <Link
            key={item.path}
            to={item.path}
            className={`sidebar-item ${location.pathname === item.path ? 'active' : ''}`}
          >
            <span className="icon">{item.icon}</span>
            <span className="label">{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;