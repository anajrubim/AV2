import React, { useState } from 'react';
import '../../styles/partsform.css';

const PartForm = ({ onNavigate }) => {
    const [formData, setFormData] = useState({
        nome: '',
        tipo: '',
        fornecedor: '',
        status: ''
    });

    const tiposPeca = ['Nacional', 'Importada'];
    const statusPeca = ['Em Produção', 'Em Transporte', 'Pronta'];
    
    const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData(prevData => ({
			...prevData,
			[name]: value
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Dados da peça cadastrados:', formData);
		onNavigate(10); 
	};

    return (
        <div className="part-form-container">
            <div className="header">
                <h1>Aerocode</h1>
            </div>

            <div className="content">
                <div className="form-section-parts">
                    <h2>CADASTRAR PEÇA</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group-parts">
                            <input 
                                type="text"
                                placeholder="Nome"
                                name="nome"
                                value={formData.nome}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group-parts">
                            <select
                                name="tipo"
                                value={formData.tipo}
                                onChange={handleChange}
                                className="dropdown-field"
                            >
                                <option value="" disabled>Selecione o Tipo</option>
                                {tiposPeca.map((tipo) => (
                                    <option key={tipo} value={tipo}>
                                        {tipo}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group-parts">
                            <input 
                                type="text"
                                placeholder="Fornecedor"
                                name="fornecedor"
                                value={formData.fornecedor}
                                onChange={handleChange}
                            />
                        </div>
                        
                        <div className="form-group-parts">
                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                className="dropdown-field"
                            >
                                <option value="" disabled>Selecione o Status</option>
                                {statusPeca.map((status) => (
                                    <option key={status} value={status}>
                                        {status}
                                    </option>
                                ))}
                            </select>
                        </div>
                        
                        <button type="submit" className="btn-concluido-parts">
                            CONCLUÍDO
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PartForm;