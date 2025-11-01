import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/UI/Button';

const ReportsList = () => {
  const reports = [
    { id: 1, data: '25/04', status: 'Concluído' },
    { id: 2, data: '25/04', status: 'Pendente' },
    { id: 3, data: '25/04', status: 'Concluído' },
  ];

  return (
    <div className="page">
      <header className="page-header">
        <h1>Relatórios</h1>
      </header>

      <div className="cards-grid">
        {reports.map(report => (
          <div key={report.id} className="card">
            <h3>Relatório {report.data}</h3>
            <p>Status: {report.status}</p>
            {report.status === 'Concluído' && (
              <Button variant="primary">Download</Button>
            )}
            {report.status === 'Pendente' && (
              <Button variant="secondary">Gerar</Button>
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

export default ReportsList;