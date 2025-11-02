import React from 'react';
import '../../styles/partslist.css';

const PartsList = ({ onNavigate }) => {
  const parts = ['PEGA A (tal aeronave)', 'PEGA D', 'PEGA B', 'PEGA E', 'PEGA C'];

  const menuItems = [
    { label: 'Pecas', page: 9 },
    { label: 'Testes', page: 12 },
    { label: 'Etapas', page: 14 },
    { label: 'Relatórios', page: 16 }
  ];

  return (
    <div className="parts-container">
      <div className="header">
        <h1>Aerocode</h1>
      </div>

      <div className="content">
        <div className="section">
          <h2>Aeronaves</h2>
          <div className="menu-grid">
            {menuItems.map((item, index) => (
              <button 
                key={index}
                className="menu-btn"
                onClick={() => onNavigate(item.page)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="parts-section">
          <h2>PEGA A (tal aeronave)</h2>
          <div className="parts-list">
            {parts.map((part, index) => (
              <div key={index} className="part-item">
                {part}
              </div>
            ))}
          </div>
        </div>

        <div className="action-buttons">
          <button 
            className="btn-cadastrar"
            onClick={() => onNavigate(11)}
          >
            CADASTRAR PEGA
          </button>
          <button className="btn-cada">cada</button>
        </div>

        <button className="btn-voltar" onClick={() => onNavigate(7)}>
          Voltar
        </button>
      </div>
    </div>
  );
};

export default PartsList;