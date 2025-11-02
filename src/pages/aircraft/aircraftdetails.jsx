import React from 'react';
import '../../styles/aircraftdetails.css';

const AircraftDetail = ({ onNavigate }) => {
  const aircraft = {
    name: 'TAL AERONAVE',
    codigo: 'ABC123'
  };

  const menuItems = [
    { label: 'Aeronaves', page: 7 },
    { label: 'Pecas', page: 9 },
    { label: 'Testes', page: 12 },
    { label: 'Etapas', page: 14 },
    { label: 'Relatórios', page: 16 }
  ];

  return (
    <div className="aircraft-detail-container">
      <div className="header">
        <h1>Aerocode</h1>
      </div>

      <div className="content">
        <div className="aircraft-info">
          <h2>{aircraft.name}</h2>
          <p>({aircraft.codigo})</p>
        </div>

        <div className="associated-items">
          <h3>Pecas Associadas</h3>
          <button className="btn-associado">Testes Associados</button>
          <button className="btn-associado">Etapas Associadas</button>
          <button className="btn-gerar-relatorio">Gerar Relatório</button>
        </div>

        <div className="menu-section">
          <h3>Aeronaves</h3>
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

        <button className="btn-voltar" onClick={() => onNavigate(7)}>
          Voltar
        </button>
      </div>
    </div>
  );
};

export default AircraftDetail;