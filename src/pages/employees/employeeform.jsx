import React, { useState } from 'react';
import '../../styles/employeeform.css';

const EmployeeForm = ({ onNavigate }) => {
	const [formData, setFormData] = useState({
		name: '',
		usuario: '',
		senha: '',
		nivel: ''
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Dados do funcionário:', formData);
		alert('Funcionário cadastrado com sucesso!');
		onNavigate(4);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		const fieldName = name === 'cargo' ? 'nivel' : name;
		setFormData(prevState => ({
			...prevState,
			[fieldName]: value
		}));
	};

	return (
		<div className="employee-form-container">
			<div className="header">
				<h1>Aerocode</h1>
			</div>

			<div className="content">
				<div className="form-section">
					<h2>Cadastrar Funcionário</h2>

					<form onSubmit={handleSubmit} className="employee-form">
						<div className="form-group-emp">
							<input
								type="text"
								name="name"
								placeholder="Name"
								value={formData.name}
								onChange={handleChange}
								required
							/>
						</div>

						<div className="form-group-emp">
							<input
								type="text"
								name="usuario"
								placeholder="Usuário"
								value={formData.usuario}
								onChange={handleChange}
								required
							/>
						</div>

						<div className="form-group-emp">
							<input
								type="password"
								name="senha"
								placeholder="Senha"
								value={formData.senha}
								onChange={handleChange}
								required
							/>
						</div>

						<div className="form-group-emp">
							<select
								name="cargo"
								value={formData.nivel}
								onChange={handleChange}
								required
							>
								<option value="">Selecione o Cargo</option>
								<option value="operador">Operador</option>
								<option value="engenheiro">Engenheiro</option>
								<option value="administrador">Administrador</option>
							</select>
						</div>

						<div className="form-buttons-row">
							<button
								type="button"
								className="btn-voltar-form"
								onClick={() => onNavigate(2)}
							>
								Voltar
							</button>
							<button
								type="button"
								className="btn-listar"
								onClick={() => onNavigate(4)}
							>
								Listar
							</button>
							<button type="submit" className="btn-cadastrar-form">
								Cadastrar
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default EmployeeForm;