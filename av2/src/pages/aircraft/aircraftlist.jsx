import React from 'react';
import { Link } from 'react-router-dom';

const AircraftList = () => {
  const aircrafts = [
    { id: 1, codigo: 'AC001', modelo: 'EMB-110', tipo: 'COMERCIAL' },
    { id: 2, codigo: 'AC002', modelo: 'EMB-120', tipo: 'COMERCIAL' },
  ];

  return (
    <div className="page">
      <header className="page-header">
        <h1>Aeronaves</h1>
        <Link to="/aircraft/new" className="btn btn-primary">
          Cadastrar Aeronave
        </Link>
      </header>

      <div className="cards-grid">
        {aircrafts.map(aircraft => (
          <div key={aircraft.id} className="card">
            <h3>{aircraft.modelo}</h3>
            <p>Código: {aircraft.codigo}</p>
            <p>Tipo: {aircraft.tipo}</p>
            <Link to={`/aircraft/${aircraft.id}`} className="btn btn-secondary">
              VER MAIS
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AircraftList;