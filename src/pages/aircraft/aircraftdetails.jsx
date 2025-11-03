import React from 'react';
import '../../styles/aircraftdetails.css';

const AircraftDetail = ({ onNavigate }) => {
  const aircraft = {
    name: 'TAL AERONAVE',
    codigo: 'ABC123'
  };

  return (
    <div className="aircraft-detail-container">

      <div className="content">
        <div className="aircraft-info">
          <h2>{aircraft.name}</h2>
          <p>({aircraft.codigo})</p>
        </div>

        <div className="associated-items">
          <button className="btn-associado"
            onClick={() => onNavigate(9)}>
            Peças Associadas
          </button>
          <button className="btn-associado"
            onClick={() => onNavigate(12)}>
              Testes Associados
            </button>
          <button className="btn-associado"
            onClick={() => onNavigate(14)}>
              Etapas Associadas
            </button>
          <button className="btn-gerar-relatorio">Gerar Relatório</button>
        </div>

        <button className="btn-voltar" onClick={() => onNavigate(7)}>
          Voltar
        </button>
      </div>
    </div>
  );
};

export default AircraftDetail;