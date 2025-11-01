import React from 'react';
import { Link } from 'react-router-dom';

const TestsList = () => {
  const tests = [
    { id: 1, nome: 'Teste tal', aeronave: 'EMB-110' },
    { id: 2, nome: 'Teste tal', aeronave: 'EMB-110' },
    { id: 3, nome: 'Teste tal', aeronave: 'EMB-120' },
  ];

  return (
    <div className="page">
      <header className="page-header">
        <h1>Testes</h1>
        <Link to="/tests/new" className="btn btn-primary">
          Registrar Teste
        </Link>
      </header>

      <div className="cards-grid">
        {tests.map(test => (
          <div key={test.id} className="card">
            <h3>{test.nome}</h3>
            <p>Aeronave: {test.aeronave}</p>
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

export default TestsList;