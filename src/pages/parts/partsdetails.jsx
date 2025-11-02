import React from 'react';
import '../../styles/partsdetails.css';

const PartDetail = ({ onNavigate }) => {
  const part = {
    name: 'Peça',
    tipo: 'Tal',
    fornecedor: 'Fulano',
    status: 'Em prod.'
  };

  return (
    <div className="part-detail-container">
      <div className="header">
        <h1>Aerocode</h1>
      </div>

      <div className="content">
        <div className="part-info">
          <h2>TAL PEÇA</h2>
          <div className="info-grid">
            <div className="info-item">
              <strong>Name:</strong> {part.name}
            </div>
            <div className="info-item">
              <strong>Tipo:</strong> {part.tipo}
            </div>
            <div className="info-item">
              <strong>Fornecedor:</strong> {part.fornecedor}
            </div>
            <div className="info-item">
              <strong>Status:</strong> {part.status}
            </div>
          </div>
        </div>

        <button className="btn-concluido">
          CONCLUÍDO
        </button>
      </div>
    </div>
  );
};

export default PartDetail;