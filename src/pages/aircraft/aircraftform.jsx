import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/UI/Input';
import Button from '../../components/UI/button';

const AircraftForm = () => {
  const [formData, setFormData] = useState({
    codigo: '',
    modelo: '',
    tipo: '',
    capacidade: '',
    alcance: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nova aeronave:', formData);
    navigate('/aircraft');
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="page">
      <header className="page-header">
        <h1>Cadastrar Aeronave</h1>
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
          <Button type="submit" variant="primary">
            CADASTRAR
          </Button>
          <Button type="button" variant="secondary" onClick={() => navigate('/aircraft')}>
            Voltar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AircraftForm;