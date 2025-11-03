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

  const handleStatusChange = (id, newStatus) => {
    setSteps(steps.map(step => 
      step.id === id ? { ...step, status: newStatus } : step
    ));
  };

  return (
    <div className="steps-container">
      <div className="content">
        <div className="section">
          <h2>Etapas Cadastradas</h2>
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
                  <span className="status-finalizada">Finalizada</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="action-buttons">
        <button 
          className="btn-voltar-list" 
            onClick={() => onNavigate(2)}
        >
            Voltar
        </button>
          <button 
            className="btn-criar-etapa"
            onClick={() => onNavigate(15)}
          >
            Criar Etapa
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepsList;