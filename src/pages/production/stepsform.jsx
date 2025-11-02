import React, { useState } from 'react';
import '../../styles/stepsform.css';

const StepForm = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    nome: '',
    responsavel: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados da etapa:', formData);
  };

  const menuItems = [
    { label: 'Aeronaves', page: 7 },
    { label: 'Pecas', page: 9 },
    { label: 'Testes', page: 12 },
    { label: 'Etapas', page: 14 },
    { label: 'Relatórios', page: 16 }
  ];

  return (
    <div className="step-form-container">
      <div className="header">
        <h1>Aerocode</h1>
      </div>

      <div className="content">
        <div className="form-section">
          <h2>CRIAR ETAPA</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Norme:</label>
              <input 
                type="text"
                value={formData.nome}
                onChange={(e) => setFormData({...formData, nome: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>Responsável:</label>
              <input 
                type="text"
                value={formData.responsavel}
                onChange={(e) => setFormData({...formData, responsavel: e.target.value})}
              />
            </div>
            <div className="form-buttons">
              <button type="submit" className="btn-concluido">
                CONCLUÍDO
              </button>
              <button type="button" className="btn-solir">
                Solir
              </button>
            </div>
          </form>
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

        <button className="btn-voltar" onClick={() => onNavigate(14)}>
          Voltar
        </button>
      </div>
    </div>
  );
};

export default StepForm;