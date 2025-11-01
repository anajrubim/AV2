import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from '../../components/UI/Button';

const AircraftDetails = () => {
  const { id } = useParams();

  const aircraft = {
    id: 1,
    codigo: 'AC001',
    modelo: 'EMB-110',
    tipo: 'COMERCIAL',
    capacidade: 8,
    alcance: 2000
  };

  return (
    <div className="page">
      <header className="page-header">
        <h1>{aircraft.modelo}</h1>
        <p>Código: {aircraft.codigo}</p>
      </header>

      <div className="details-section">
        <h2>Detalhes da Aeronave</h2>
        <div className="details-grid">
          <div className="detail-item">
            <strong>Modelo:</strong> {aircraft.modelo}
          </div>
          <div className="detail-item">
            <strong>Tipo:</strong> {aircraft.tipo}
          </div>
          <div className="detail-item">
            <strong>Capacidade:</strong> {aircraft.capacidade} passageiros
          </div>
          <div className="detail-item">
            <strong>Alcance:</strong> {aircraft.alcance} km
          </div>
        </div>
      </div>

      <div className="actions-section">
        <Link to="/parts" className="btn btn-primary">
          Peças Associadas
        </Link>
        <Link to="/tests" className="btn btn-primary">
          Testes Associados
        </Link>
        <Link to="/production" className="btn btn-primary">
          Etapas Associadas
        </Link>
        <Button variant="success">
          Gerar Relatório
        </Button>
      </div>

      <div className="page-actions">
        <Link to="/aircraft" className="btn btn-secondary">
          Voltar
        </Link>
      </div>
    </div>
  );
};

export default AircraftDetails;