import React, { useState } from 'react';
import '../../styles/partsdetails.css';

const PartDetail = ({ onNavigate }) => {
	const [partData, setPartData] = useState({
		name: 'PEÇA A',
		tipo: 'Importada',
		fornecedor: 'AeroFornecedor Ltda.',
		status: 'Em Produção'
	});

	const tiposPeca = ['Nacional', 'Importada'];
	const statusPeca = ['Em Produção', 'Em Transporte', 'Pronta'];

	const handleChange = (e) => {
		const { name, value } = e.target;
		setPartData(prevData => ({
			...prevData,
			[name]: value
		}));
	};

	const handleConcluido = () => {
		console.log('Dados da peça atualizados:', partData);
		onNavigate(9);
	};

	return (
		<div className="part-detail-container">
			<div className="header">
				<h1>Aerocode</h1>
			</div>

			<div className="content">
				<div className="part-info">
					<h2>DETALHES DA PEÇA: {partData.name}</h2>
					<div className="info-grid">
						<div className="info-item">
							<strong>Nome:</strong> 
							<span>{partData.name}</span>
						</div>
						<div className="info-item info-editable">
							<strong>Tipo:</strong>
							<select
								name="tipo"
								value={partData.tipo}
								onChange={handleChange}
								className="dropdown-field"
							>
								{tiposPeca.map((tipo) => (
									<option key={tipo} value={tipo}>
										{tipo}
									</option>
								))}
							</select>
						</div>
						<div className="info-item">
							<strong>Fornecedor:</strong> 
							<span>{partData.fornecedor}</span>
						</div>
						<div className="info-item info-editable">
							<strong>Status:</strong>
							<select
								name="status"
								value={partData.status}
								onChange={handleChange}
								className={`dropdown-field status-${partData.status.toLowerCase().replace(' ', '-')}`}
							>
								{statusPeca.map((status) => (
									<option key={status} value={status}>
										{status}
									</option>
								))}
							</select>
						</div>
						
					</div>
				</div>

				<div className="detail-actions-row">
					<button 
						className="btn-voltar-detail" 
						onClick={() => onNavigate(9)}
					>
						Voltar
					</button>
					<button 
						className="btn-concluido" 
						onClick={handleConcluido}
					>
						Concluído
					</button>
				</div>
			</div>
		</div>
	);
};

export default PartDetail;