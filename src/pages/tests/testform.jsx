import React, { useState } from 'react';
import Input from '../../components/UI/Input';
import Button from '../../components/UI/Button';
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
        onNavigate(13); 
    };

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="test-form-container">
            <header className="page-header">
                <h1>REGISTRAR TESTE</h1>
            </header>

            <form onSubmit={handleSubmit} className="form">
                
                <Input
                    label="Número da Aeronave"
                    value={formData.numeroAeronave}
                    onChange={(e) => handleChange('numeroAeronave', e.target.value)}
                    placeholder="Código da aeronave testada"
                />
                
                <Input
                    label="Tipo de Teste"
                    value={formData.tipo}
                    onChange={(e) => handleChange('tipo', e.target.value)}
                    placeholder="Voo, Pouso, Inspeção, etc."
                />
                
                <Input
                    label="Resultado do Teste"
                    value={formData.resultado}
                    onChange={(e) => handleChange('resultado', e.target.value)}
                    placeholder="APROVADO ou REPROVADO"
                />
                
                <div className="form-actions">
                    <Button 
                        type="button" 
                        variant="secondary"
                        className="btn-test-voltar"
                        onClick={() => onNavigate(12)}
                    >
                        VOLTAR
                    </Button>
                    <Button 
                        type="submit" 
                        variant="primary"
                        className="btn-test-concluido"
                         onClick={() => onNavigate(12)}
                    >
                        Cadastrar
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default TestForm;