import React from 'react';
import { Link } from 'react-router-dom';

const PartsList = () => {
  const parts = [
    { id: 1, nome: 'PEGA A', aeronave: 'EMB-110' },
    { id: 2, nome: 'PEGA B', aeronave: 'EMB-110' },
    { id: 3, nome: 'PEGA C', aeronave: 'EMB-120' },
  ];

  return (
    <div className="page">
      <header className="page-header">
        <h1>Peças</h1>
        <Link to="/parts/new" className="btn btn-primary">
          CADASTRAR PEÇA
        </Link>
      </header>

      <div className="cards-grid">
        {parts.map(part => (
          <div key={part.id} className="card">
            <h3>{part.nome}</h3>
            <p>Aeronave: {part.aeronave}</p>
            <Link to={`/parts/${part.id}`} className="btn btn-secondary">
              Ver Detalhes
            </Link>
          </div>
        ))}
      </div>

      <div className="page-actions">
        <Link to="/" className="btn btn-secondary">
          Voltar
        </Link>
      </div>
    </div>
  );
};

export default PartsList;