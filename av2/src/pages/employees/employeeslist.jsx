import React from 'react';
import { Link } from 'react-router-dom';

const EmployeesList = () => {
  const employees = [
    { id: 1, name: 'Fulano da Silva', usuario: 'fulano123', cargo: 'operador' },
    { id: 2, name: 'Ciclano Santos', usuario: 'ciclano456', cargo: 'engenheiro' },
  ];

  return (
    <div className="page">
      <header className="page-header">
        <h1>Funcionários</h1>
        <Link to="/employees/new" className="btn btn-primary">
          Cadastrar
        </Link>
      </header>

      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Usuário</th>
              <th>Cargo</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(employee => (
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.usuario}</td>
                <td>{employee.cargo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="page-actions">
        <Link to="/" className="btn btn-secondary">
          Voltar
        </Link>
      </div>
    </div>
  );
};

export default EmployeesList;