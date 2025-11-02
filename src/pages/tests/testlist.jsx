import React from 'react';
import '../../styles/testslist.css';

const TestsList = ({ onNavigate }) => {
  const tests = [
    'Teste tal (tal aeronave)',
    'Teste tal',
    'Teste tal', 
    'Teste tal',
    'Teste tal'
  ];

  const menuItems = [
    { label: 'Aeronaves', page: 7 },
    { label: 'Pecas', page: 9 },
    { label: 'Testes', page: 12 },
    { label: 'Etapas', page: 14 },
    { label: 'Relatórios', page: 16 }
  ];

  return (
    <div className="tests-container">
      <div className="header">
        <h1>Aerocode</h1>
      </div>

      <div className="content">
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
            <button className="btn-sair">Sair</button>
          </div>
        </div>

        <div className="tests-list">
          <button className="btn-voltar" onClick={() => onNavigate(7)}>
            ← Voltar
          </button>
          
          {tests.map((test, index) => (
            <div key={index} className="test-item">
              {test}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestsList;