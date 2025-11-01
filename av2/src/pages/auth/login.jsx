import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';

const Login = () => {
  const [formData, setFormData] = useState({
    usuario: '',
    senha: '',
    cargo: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    navigate('/');
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Aerocode</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <Input
            label="Usuário"
            value={formData.usuario}
            onChange={(e) => handleChange('usuario', e.target.value)}
            placeholder="Digite seu usuário"
          />
          <Input
            label="Senha"
            type="password"
            value={formData.senha}
            onChange={(e) => handleChange('senha', e.target.value)}
            placeholder="Digite sua senha"
          />
          <Input
            label="Cargo"
            value={formData.cargo}
            onChange={(e) => handleChange('cargo', e.target.value)}
            placeholder="Digite seu cargo"
          />
          <Button type="submit" variant="primary">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;