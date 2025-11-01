import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/UI/button';

const StepsList = () => {
  const steps = [
    { id: 1, nome: 'Etapa tal', aeronave: 'EMB-110', status: 'Iniciada' },
    { id: 2, nome: 'Etapa tal', aeronave: 'EMB-110', status: 'Pendente' },
    { id: 3, nome: 'Etapa tal', aeronave: 'EMB-120', status: 'Finalizada' },
  ];

  return (
    <div className="page">
      <header className="page-header">
        <h1>Etapas de Produção</h1>
        <Link to="/production/new" className="btn btn-primary">
          CRIAR ETAPA
        </Link>
      </header>

      <div className="cards-grid">
        {steps.map(step => (
          <div key={step.id} className="card">
            <h3>{step.nome} ({step.aeronave})</h3>
            <p>Status: {step.status}</p>
            {step.status === 'Iniciada' && (
              <Button variant="success">Finalizar</Button>
            )}
            {step.status === 'Pendente' && (
              <Button variant="primary">Iniciar</Button>
            )}
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

export default StepsList;