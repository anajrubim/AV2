import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/UI/input';
import Button from '../../components/UI/button';

const PartForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    tipo: '',
    fornecedor: '',
    status: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nova peça:', formData);
    navigate('/parts');
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="page">
      <header className="page-header">
        <h1>CADASTRAR PEÇA</h1>
      </header>

      <form onSubmit={handleSubmit} className="form">
        <Input
          label="Nome"
          value={formData.nome}
          onChange={(e) => handleChange('nome', e.target.value)}
          placeholder="Digite o nome da peça"
        />
        <Input
          label="Tipo"
          value={formData.tipo}
          onChange={(e) => handleChange('tipo', e.target.value)}
          placeholder="NACIONAL ou IMPORTADA"
        />
        <Input
          label="Fornecedor"
          value={formData.fornecedor}
          onChange={(e) => handleChange('fornecedor', e.target.value)}
          placeholder="Digite o fornecedor"
        />
        <Input
          label="Status"
          value={formData.status}
          onChange={(e) => handleChange('status', e.target.value)}
          placeholder="Status da peça"
        />

        <div className="form-actions">
          <Button type="submit" variant="primary">
            CONCLUÍDO
          </Button>
          <Button type="button" variant="secondary" onClick={() => navigate('/parts')}>
            Voltar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PartForm;