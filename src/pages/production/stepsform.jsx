import React, { useState } from 'react';
import Input from '../../components/UI/Input';
import Button from '../../components/UI/Button';
import '../../styles/stepsform.css';

const StepForm = ({ onNavigate }) => {
    const [formData, setFormData] = useState({
        nome: '',
        responsavel: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dados da etapa:', formData);
        onNavigate(14); 
    };

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="step-form-container">
            <header className="page-header">
                <h1>CRIAR ETAPA</h1>
            </header>

            <form onSubmit={handleSubmit} className="form">
                
                <Input
                    label="Nome da Etapa"
                    value={formData.nome}
                    onChange={(e) => handleChange('nome', e.target.value)}
                    placeholder="Ex: Inspeção de Motor, Teste de Asa, etc."
                />
                
                <Input
                    label="Responsável"
                    value={formData.responsavel}
                    onChange={(e) => handleChange('responsavel', e.target.value)}
                    placeholder="Nome do responsável pela etapa"
                />
                
                <div className="form-actions">
                    <Button 
                        type="button" 
                        variant="secondary"
                        className="btn-step-voltar"
                        onClick={() => onNavigate(14)}
                    >
                        VOLTAR
                    </Button>
                    <Button 
                        type="submit" 
                        variant="primary"
                        className="btn-step-cadastrar"
                    >
                        CADASTRAR
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default StepForm;