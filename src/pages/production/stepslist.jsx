import React, { useState } from 'react';
import '../../styles/stepslist.css';

const StepsList = ({ onNavigate }) => {
  const [steps, setSteps] = useState([
    { id: 1, name: 'Etapa tal (tal aeronave)', status: 'iniciada' },
    { id: 2, name: 'Etapa tal (tal aeronave)', status: 'pendente' },
    { id: 3, name: 'Etapa tal (tal aeronave)', status: 'finalizada' },
    { id: 4, name: 'Etapa tal (tal aeronave)', status: 'finalizada' },
    { id: 5, name: 'Etapa tal (tal aeronave)', status: 'finalizada' }
  ]);

  const menuItems = [
    { label: 'Pecas', page: 9 },
    { label: 'Testes', page: 12 },
    { label: 'Etapas', page: 14 },
    { label: 'Relatórios', page: 16 }
  ];

  const handleStatusChange = (id, newStatus) => {
    setSteps(steps.map(step => 
      step.id === id ? { ...step, status: newStatus } : step
    ));
  };

  return (
    <div className="steps-container">
      <div className="header">
        <h1>Aerocode</h1>
      </div>

      <div className="content">
        <div className="section">
          <h2>Aeronaves</h2>
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

        <div className="steps-list">
          {steps.map(step => (
            <div key={step.id} className="step-item">
              <h3>{step.name}</h3>
              <div className="step-status">
                {step.status === 'iniciada' && (
                  <button 
                    className="btn-finalizar"
                    onClick={() => handleStatusChange(step.id, 'finalizada')}
                  >
                    Finalizar
                  </button>
                )}
                {step.status === 'pendente' && (
                  <button 
                    className="btn-iniciar"
                    onClick={() => handleStatusChange(step.id, 'iniciada')}
                  >
                    Iniciar
                  </button>
                )}
                {step.status === 'finalizada' && (
                  <span className="status-finalizada">finalizada</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="action-buttons">
          <button 
            className="btn-criar-etapa"
            onClick={() => onNavigate(15)}
          >
            CRIAR ETAPA
          </button>
          <button className="btn-criar-etapa">
            CRIAR ETAPA
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepsList;