import React from 'react';
import '../../styles/reportslist.css';

const ReportsList = ({ onNavigate }) => {
    const reports = [
        { id: 1, date: '25/04', action: 'download' },
        { id: 2, date: '25/04', action: 'download' },
        { id: 3, date: '25/04', action: 'download' },
        { id: 4, date: '25/04', action: 'download' },
        { id: 5, date: '25/04', action: 'download' }
    ];

    const handleReportAction = (action, reportId) => {
        console.log(`Ação: ${action} no relatório ${reportId}`);
    };

    const getButtonText = (action) => {
        return action.toUpperCase();
    };

    const handleGenerateReport = () => {
        onNavigate(16); 
    };

    return (
        <div className="reports-container">
            <header className="page-header">
                <h1>RELATÓRIOS GERADOS</h1>
            </header>

            <div className="content">
                <div className="reports-grid">
                    {reports.map(report => (
                        <div key={report.id} className="report-card">
                            <h3>Relatório de Teste #{report.id}</h3>
                            <p>Data: {report.date}</p>
                            
                            <button 
                                className={`btn-action btn-${report.action.toLowerCase()}`}
                                onClick={() => handleReportAction(report.action, report.id)}
                            >
                                {getButtonText(report.action)}
                            </button>
                        </div>
                    ))}
                </div>

                <div className="tests-actions-bottom">
                    <button 
                        className="btn-voltar-list" 
                        onClick={() => onNavigate(7)}
                    >
                        VOLTAR
                    </button>
                    
                    <button 
                        className="btn-menu-action btn-generate-report" 
                        onClick={handleGenerateReport}
                    >
                        GERAR RELATÓRIO
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReportsList;