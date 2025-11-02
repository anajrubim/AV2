import React from 'react';
import '../../styles/aircraftlist.css';

const AircraftList = ({ onNavigate }) => {
  const aircrafts = [
    { id: 1, name: 'AERONAVE TAL' },
    { id: 2, name: 'AERONAVE TAL' },
    { id: 3, name: 'AERONAVE TAL' },
    { id: 4, name: 'AERONAVE TAL' }
  ];

  const menuItems = [
    { label: 'Pecas', page: 9 },
    { label: 'Testes', page: 12 },
    { label: 'Etapas', page: 14 },
    { label: 'Relatórios', page: 16 }
  ];

  return (
    <div className="aircraft-container">
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

        <div className="aircraft-grid">
          {aircrafts.map(aircraft => (
            <div key={aircraft.id} className="aircraft-card">
              <h3>{aircraft.name}</h3>
              <button 
                className="btn-ver-mais"
                onClick={() => onNavigate(8)}
              >
                VER MAIS
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AircraftList;