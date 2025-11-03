import React from 'react';
import '../../styles/partslist.css';

const PartsList = ({ onNavigate }) => {
	const parts = [
		{ name: 'PEÇA A', id: 1 }, 
		{ name: 'PEÇA D', id: 2 }, 
		{ name: 'PEÇA B', id: 3 }, 
		{ name: 'PEÇA E', id: 4 }, 
		{ name: 'PEÇA C', id: 5 }
	];

	const handleViewDetails = (partId) => {
		console.log(`Ver detalhes da peça: ${partId}`);
		onNavigate(10); 
	};

	return (
		<div className="content-area">
			
			<div className="parts-header-actions">
				<h2>PEÇAS CADASTRADAS</h2>
			</div>

			<div className="parts-section">
				<div className="parts-list">
					{parts.map((part) => (
						<div key={part.id} className="part-item">
							<span className="part-name">{part.name}</span>
							<button 
								className="btn-ver-detalhes" 
								onClick={() => handleViewDetails(part.id)}
							>
								Ver Detalhes
							</button>
						</div>
					))}
				</div>
			</div>
			
			<div className="table-actions-bottom">
				<button
					className="btn-voltar-parts"
					onClick={() => onNavigate(2)}
				>
					Voltar
				</button>
				<button
					className="btn-cadastrar-parts"
					onClick={() => onNavigate(11)}
				>
					Cadastrar Peça
				</button>
			</div>
		</div>
	);
};

export default PartsList;