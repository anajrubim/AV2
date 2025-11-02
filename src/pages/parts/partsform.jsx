import React, { useState } from 'react';
import '../../styles/partsform.css';

const PartForm = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    nome: '',
    tipo: '',
    fornecedor: '',
    status: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados da peça:', formData);
    onNavigate(10); 
  };

  const menuItems = [
    { label: 'Aeronaves', page: 7 },
    { label: 'Pecas', page: 9 },
    { label: 'Testes', page: 12 },
    { label: 'Etapas', page: 14 },
    { label: 'Relatórios', page: 16 }
  ];

  return (
    <div className="part-form-container">
      <div className="header">
        <h1>Aerocode</h1>
      </div>

      <div className="content">
        <div className="form-section">
          <h2>CADASTRAR PEÇA</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text"
                placeholder="Norme"
                value={formData.nome}
                onChange={(e) => setFormData({...formData, nome: e.target.value})}
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
                placeholder="Fornecedor"
                value={formData.fornecedor}
                onChange={(e) => setFormData({...formData, fornecedor: e.target.value})}
              />
            </div>
            <div className="form-group">
              <input 
                type="text"
                placeholder="Status"
                value={formData.status}
                onChange={(e) => setFormData({...formData, status: e.target.value})}
              />
            </div>
            <button type="submit" className="btn-concluido">
              CONCLUÍDO
            </button>
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
      </div>
    </div>
  );
};

export default PartForm;