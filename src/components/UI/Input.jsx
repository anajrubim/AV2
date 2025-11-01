// src/components/UI/Input.jsx
import React from 'react';

const Input = ({ label, type = 'text', value, onChange, placeholder }) => {
  return (
    <div className="input-group">
      {label && <label className="input-label">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input-field"
      />
    </div>
  );
};

// ⚠️ VERIFIQUE se está exportando corretamente:
export default Input; // ← Deve ser assim