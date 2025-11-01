import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/UI/input';
import Button from '../../components/UI/button';

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    usuario: '',
    senha: '',
    nivel: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Novo funcionário:', formData);
    navigate('/employees');
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="page">
      <header className="page-header">
        <h1>Cadastrar Funcionário</h1>
      </header>

      <form onSubmit={handleSubmit} className="form">
        <Input
          label="Name"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          placeholder="Digite o nome"
        />
        <Input
          label="Usuário"
          value={formData.usuario}
          onChange={(e) => handleChange('usuario', e.target.value)}
          placeholder="Digite o usuário"
        />
        <Input
          label="Senha"
          type="password"
          value={formData.senha}
          onChange={(e) => handleChange('senha', e.target.value)}
          placeholder="Digite a senha"
        />
        <Input
          label="Nível"
          value={formData.nivel}
          onChange={(e) => handleChange('nivel', e.target.value)}
          placeholder="Digite o nível"
        />

        <div className="form-actions">
          <Button type="submit" variant="primary">
            CONCLUÍDO
          </Button>
          <Button type="button" variant="secondary" onClick={() => navigate('/employees')}>
            Voltar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;