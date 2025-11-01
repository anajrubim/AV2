import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/UI/input';
import Button from '../../components/UI/button';

const TestForm = () => {
  const [formData, setFormData] = useState({
    numeroAeronave: '',
    tipo: '',
    resultado: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Novo teste:', formData);
    navigate('/tests');
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="page">
      <header className="page-header">
        <h1>REGISTRAR TESTE</h1>
      </header>

      <form onSubmit={handleSubmit} className="form">
        <Input
          label="Número da aeronave"
          value={formData.numeroAeronave}
          onChange={(e) => handleChange('numeroAeronave', e.target.value)}
          placeholder="Digite o número da aeronave"
        />
        <Input
          label="Tipo"
          value={formData.tipo}
          onChange={(e) => handleChange('tipo', e.target.value)}
          placeholder="Tipo de teste"
        />
        <Input
          label="Resultado"
          value={formData.resultado}
          onChange={(e) => handleChange('resultado', e.target.value)}
          placeholder="Resultado do teste"
        />

        <div className="form-actions">
          <Button type="submit" variant="primary">
            CONCLUÍDO
          </Button>
          <Button type="button" variant="secondary" onClick={() => navigate('/tests')}>
            Voltar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TestForm;