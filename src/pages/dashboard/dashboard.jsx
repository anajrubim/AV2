import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const aeronaves = [
    { id: 1, codigo: 'AC001', modelo: 'EMB-110' },
    { id: 2, codigo: 'AC002', modelo: 'EMB-120' },
    { id: 3, codigo: 'AC003', modelo: 'EMB-130' },
  ];

  return (
    <div className="dashboard">
      <header className="page-header">
        <h1>Aeronaves</h1>
        <Link to="/aircraft/new" className="btn btn-primary">
          Cadastrar Aeronave
        </Link>
      </header>

      <div className="aeronaves-grid">
        {aeronaves.map(aeronave => (
          <div key={aeronave.id} className="aeronave-card">
            <h3>{aeronave.modelo}</h3>
            <p>Código: {aeronave.codigo}</p>
            <Link to={`/aircraft/${aeronave.id}`} className="btn btn-secondary">
              VER MAIS
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;