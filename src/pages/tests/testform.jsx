import React, { useState } from 'react';
import '../../styles/testform.css';

const TestForm = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    numeroAeronave: '',
    tipo: '',
    resultado: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do teste:', formData);
  };

  const menuItems = [
    { label: 'Aeronaves', page: 7 },
    { label: 'Pecas', page: 9 },
    { label: 'Testes', page: 12 },
    { label: 'Etapas', page: 14 },
    { label: 'Relatórios', page: 16 }
  ];

  return (
    <div className="test-form-container">
      <div className="header">
        <h1>Aerocode</h1>
      </div>

      <div className="content">
        <div className="form-section">
          <h2>REGISTRAR TESTE</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text"
                placeholder="Número da aeronave"
                value={formData.numeroAeronave}
                onChange={(e) => setFormData({...formData, numeroAeronave: e.target.value})}
              />
            </div>
            <div className="form-group">
              <input 
                type="text"
                placeholder="Tipo"
                value={formData.tipo}
                onChange={(e) => setFormData({...formData, tipo: e.target.value})}
              />
            </div>
            <div className="form-group">
              <input 
                type="text"
                placeholder="Resultado"
                value={formData.resultado}
                onChange={(e) => setFormData({...formData, resultado: e.target.value})}
              />
            </div>
            <button type="submit" className="btn-concluido">
              CONCLUÍDO
            </button>
          </form>
        </div>

        <div className="menu-section">
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

        <button className="btn-voltar" onClick={() => onNavigate(12)}>
          ← Voltar
        </button>
      </div>
    </div>
  );
};

export default TestForm;