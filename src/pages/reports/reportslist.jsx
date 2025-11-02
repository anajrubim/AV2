import React from 'react';
import '../../styles/reportslist.css';

const ReportsList = ({ onNavigate }) => {
  const reports = [
    { id: 1, date: '25/04', action: 'download' },
    { id: 2, date: '25/04', action: 'iniciar' },
    { id: 3, date: '25/04', action: 'outcome' },
    { id: 4, date: '25/04', action: 'RELATÓRIO' },
    { id: 5, date: '25/04', action: 'RELATÓRIO' }
  ];

  const menuItems = [
    { label: 'Aeronaves', page: 7 },
    { label: 'Pecas', page: 9 },
    { label: 'Testes', page: 12 },
    { label: 'Etapas', page: 14 },
    { label: 'Relatórios', page: 16 }
  ];

  const handleReportAction = (action, reportId) => {
    console.log(`Ação: ${action} no relatório ${reportId}`);
  };

  return (
    <div className="reports-container">
      <div className="header">
        <h1>Aerocode</h1>
      </div>

      <div className="content">
        <div className="reports-grid">
          {reports.map(report => (
            <div key={report.id} className="report-card">
              <h3>Relatório</h3>
              <p>{report.date}</p>
              <button 
                className={`btn-action btn-${report.action}`}
                onClick={() => handleReportAction(report.action, report.id)}
              >
                {report.action}
              </button>
            </div>
          ))}
        </div>

        <div className="menu-section">
          <h3>Aeronaves</h3>
          <div className="menu-grid">
            {menuItems.map((item, index) => (
              <button 
                key={index}
                className="menu-btn"
                onClick={() => onNavigate(item.page)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <button className="btn-voltar" onClick={() => onNavigate(7)}>
          Voltar
        </button>
      </div>
    </div>
  );
};

export default ReportsList;