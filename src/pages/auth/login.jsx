import React, { useState } from 'react';
import '../../styles/login.css';
import airplaneImg from '../../assets/airplane-outline.png'; 

const Login = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    usuario: '',
    senha: '',
    cargo: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    if (onNavigate) onNavigate(2);
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h1 className="login-title">Aerocode</h1>

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Usuário"
            value={formData.usuario}
            onChange={(e) => setFormData({ ...formData, usuario: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            value={formData.senha}
            onChange={(e) => setFormData({ ...formData, senha: e.target.value })}
          />
          <select
            value={formData.cargo}
            onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
          >
            <option value="">Cargo</option>
            <option value="operador">Operador</option>
            <option value="supervisor">Supervisor</option>
            <option value="admin">Administrador</option>
          </select>
          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>

      <div className="plane-image">
        <img src={airplaneImg} alt="Avião" />
      </div>
    </div>
  );
};

export default Login;
