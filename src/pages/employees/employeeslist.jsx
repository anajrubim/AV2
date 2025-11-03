import React from 'react';
import '../../styles/employeelist.css';

const EmployeeList = ({ onNavigate }) => {
    const employees = [
        { name: 'Maria Eduarda Costa', usuario: 'maria.costa', cargo: 'operador' },
        { name: 'João Victor Almeida', usuario: 'joao.victor', cargo: 'administrador' },
        { name: 'Ana Clara Lima', usuario: 'anaclara.l', cargo: 'engenheiro' },
        { name: 'Pedro Henrique Santos', usuario: 'pedro_hs', cargo: 'operador' },
        { name: 'Luiza Gonçalves Ferreira', usuario: 'luiza.gf', cargo: 'administrador' },
        { name: 'Rafael Barbosa Oliveira', usuario: 'rafael_bo', cargo: 'engenheiro' },
        { name: 'Camila Mendes Dias', usuario: 'camila.md', cargo: 'operador' },
        { name: 'Lucas Pereira Souza', usuario: 'lucas.ps', cargo: 'administrador' },
        { name: 'Gabriela Nunes Ribeiro', usuario: 'gabriela_nr', cargo: 'engenheiro' },
        { name: 'Thiago Martins Rocha', usuario: 'thiago.mr', cargo: 'operador' },
    ];

    return (
        <div className="content-area">
            <div className="table-actions">
                <button className="btn-voltar-emp" onClick={() => onNavigate(2)}>
                    Voltar
                </button>
                <button className="btn-cadastrar-emp" onClick={() => onNavigate(5)}>
                    Cadastrar
                </button>
            </div>

            <table className="employee-table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Usuário</th>
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
        </div>
    );
};

export default EmployeeList;
