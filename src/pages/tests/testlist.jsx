import React from 'react';
import '../../styles/testslist.css';

const TestsList = ({ onNavigate }) => {
    const tests = [
        { id: 1, name: 'Teste de Voo 45', aircraft: 'Aeronave A' },
        { id: 2, name: 'Teste de Pouso 12', aircraft: 'Aeronave B' },
        { id: 3, name: 'Inspeção Detalhada', aircraft: 'Aeronave C' },
        { id: 4, name: 'Teste de Carga Máxima', aircraft: 'Aeronave A' },
        { id: 5, name: 'Teste de Comunicação', aircraft: 'Aeronave D' }
    ];

    return (
        <div className="tests-container">
            <div className="content">
                <div className="menu-section">
                    <h2>TESTES CADASTRADOS</h2>
                </div>
                
                <div className="tests-list">
                    {tests.map(test => (
                        <div 
                            key={test.id} 
                            className="test-item"
                        >
                            <h4>{test.name}</h4>
                            <p>Aeronave: {test.aircraft}</p>
                            <p>Status: Pendente</p>
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
                        className="btn-menu-action" 
                        onClick={() => onNavigate(13)}
                    >
                        CADASTRAR TESTE
                    </button>
                </div>

            </div>
        </div>
    );
};

export default TestsList;