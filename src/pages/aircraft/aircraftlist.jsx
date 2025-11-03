import React from 'react';
import '../../styles/aircraftlist.css';

const AircraftList = ({ onNavigate }) => {
    const aircrafts = [
        { id: 1, name: 'AERONAVE TAL 1' },
        { id: 2, name: 'AERONAVE TAL 2' },
        { id: 3, name: 'AERONAVE TAL 3' },
        { id: 4, name: 'AERONAVE TAL 4' },
        { id: 5, name: 'AERONAVE TAL 5' },
        { id: 6, name: 'AERONAVE TAL 6' }
    ];

    const handleCadastroClick = () => {
        onNavigate(17); 
    };

    return (
        <div className="aircraft-container">
            <div className="content">
                <div className="aircraft-header-actions">
                    <h2>Aeronaves Cadastradas</h2>
                </div>
                <div className="aircraft-grid">
                    {aircrafts.map(aircraft => (
                        <div key={aircraft.id} className="aircraft-card">
                            <h3>{aircraft.name}</h3>
                            <button 
                                className="btn-ver-mais"
                                onClick={() => onNavigate(8)}
                            >
                                VER MAIS
                            </button>
                        </div>
                    ))}
                </div>
                <div className="aircraft-actions-bottom">
                    <button 
                        className="btn-cadastrar"
                        onClick={handleCadastroClick}
                    >
                        CADASTRAR AERONAVE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AircraftList;