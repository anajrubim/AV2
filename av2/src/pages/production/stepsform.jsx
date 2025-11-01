import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/UI/input';
import Button from '../../components/UI/button';

const StepForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    responsavel: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nova etapa:', formData);
    navigate('/production');
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="page">
      <header className="page-header">
        <h1>CRIAR ETAPA</h1>
      </header>

      <form onSubmit={handleSubmit} className="form">
        <Input
          label="Nome"
          value={formData.nome}
          onChange={(e) => handleChange('nome', e.target.value)}
          placeholder="Digite o nome da etapa"
        />
        <Input
          label="Responsável"
          value={formData.responsavel}
          onChange={(e) => handleChange('responsavel', e.target.value)}
          placeholder="Digite o responsável"
        />

        <div className="form-actions">
          <Button type="submit" variant="primary">
            CONCLUÍDO
          </Button>
          <Button type="button" variant="secondary" onClick={() => navigate('/production')}>
            Voltar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default StepForm;