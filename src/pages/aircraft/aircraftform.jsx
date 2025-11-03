import React, { useState } from 'react';
import Input from '../../components/UI/Input';
import Button from '../../components/UI/Button';
import '../../styles/aircraftform.css';

const AircraftForm = ({ onNavigate }) => {
    const [formData, setFormData] = useState({
        codigo: '',
        modelo: '',
        tipo: '',
        capacidade: '',
        alcance: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Nova aeronave:', formData);
        onNavigate(7);
    };

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="page">
            <header className="page-header">
                <h1>CADASTRAR AERONAVE</h1>
            </header>

            <form onSubmit={handleSubmit} className="form">
                <Input
                    label="Código"
                    value={formData.codigo}
                    onChange={(e) => handleChange('codigo', e.target.value)}
                    placeholder="Digite o código"
                />
                <Input
                    label="Modelo"
                    value={formData.modelo}
                    onChange={(e) => handleChange('modelo', e.target.value)}
                    placeholder="Digite o modelo"
                />
                <Input
                    label="Tipo"
                    value={formData.tipo}
                    onChange={(e) => handleChange('tipo', e.target.value)}
                    placeholder="COMERCIAL ou MILITAR"
                />
                <Input
                    label="Capacidade"
                    type="number"
                    value={formData.capacidade}
                    onChange={(e) => handleChange('capacidade', e.target.value)}
                    placeholder="Número de passageiros"
                />
                <Input
                    label="Alcance (km)"
                    type="number"
                    value={formData.alcance}
                    onChange={(e) => handleChange('alcance', e.target.value)}
                    placeholder="Alcance em km"
                />

                <div className="form-actions">
                    <Button 
                        type="button" 
                        variant="secondary" 
                        className="btn-aircraft-voltar"
                        onClick={() => onNavigate(7)}
                    >
                        Voltar
                    </Button>
                    <Button 
                        type="submit" 
                        variant="primary" 
                        className="btn-aircraft-cadastrar"
                    >
                        Cadastrar
                    </Button>

                </div>
            </form>
        </div>
    );
};

export default AircraftForm;