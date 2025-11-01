import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from '../../components/UI/Button';

const PartDetails = () => {
  const { id } = useParams();

  const part = {
    id: 1,
    nome: 'Asa Esquerda',
    tipo: 'NACIONAL',
    fornecedor: 'Fornecedor XYZ',
    status: 'EM_PRODUCAO'
  };

  return (
    <div className="page">
      <header className="page-header">
        <h1>{part.nome}</h1>
      </header>

      <div className="details-section">
        <h2>Detalhes da Peça</h2>
        <div className="details-grid">
          <div className="detail-item">
            <strong>Nome:</strong> {part.nome}
          </div>
          <div className="detail-item">
            <strong>Tipo:</strong> {part.tipo}
          </div>
          <div className="detail-item">
            <strong>Fornecedor:</strong> {part.fornecedor}
          </div>
          <div className="detail-item">
            <strong>Status:</strong> {part.status}
          </div>
        </div>
      </div>

      <div className="form-actions">
        <Button variant="success">
          CONCLUÍDO
        </Button>
        <Link to="/parts" className="btn btn-secondary">
          Voltar
        </Link>
      </div>
    </div>
  );
};

export default PartDetails;