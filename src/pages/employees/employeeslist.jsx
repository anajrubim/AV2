import React from 'react';
import '../../styles/employeelist.css';

const EmployeeList = ({ onNavigate }) => {
  const employees = [
    { name: 'Fulano sia oq n sei oq', usuario: 'fulano123', cargo: 'operador' }
  ];

  return (
    <div className="employee-container">
      <div className="header">
        <h1>Aerocode</h1>
      </div>

      <div className="content">
        <table className="employee-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Usuario</th>
              <th>Cargo</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                <td>{employee.name}</td>
                <td>{employee.usuario}</td>
                <td>{employee.cargo}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="action-buttons">
          <button className="btn-listar">Listar</button>
          <button 
            className="btn-cadastrar"
            onClick={() => onNavigate(5)}
          >
            Cadastrar
          </button>
        </div>

        <button className="btn-voltar" onClick={() => onNavigate(2)}>
          Voltar
        </button>
      </div>
    </div>
  );
};

export default EmployeeList;