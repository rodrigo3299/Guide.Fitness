import React, { useState } from 'react';
import Navbar from '../componentes/Navbar/Navbar.jsx';
import Footer from '../componentes/Footer/Footer.jsx';

// Função para formatar a data
const formatDate = (date) => {
    return date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
};

function Cardio() {
    // Calcula a data de amanhã
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    // Estado para armazenar as estatísticas do cardio
    const [estatisticas, setEstatisticas] = useState([
        { tipo: 'Corrida', tempo: '30 minutos', distancia: '5 km' },
        { tipo: 'Bicicleta', tempo: '45 minutos', distancia: '15 km' },
        { tipo: 'Natação', tempo: '40 minutos', distancia: '1 km' }
    ]);

    // Estado para armazenar os valores dos inputs para uma nova estatística
    const [novoExercicio, setNovoExercicio] = useState({
        tipo: '',
        tempo: '',
        distancia: ''
    });

    // Função para atualizar o estado com os valores dos inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNovoExercicio(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Função para adicionar uma nova estatística
    const handleAdicionar = () => {
        if (novoExercicio.tipo && novoExercicio.tempo && novoExercicio.distancia) {
            setEstatisticas([...estatisticas, novoExercicio]);
            setNovoExercicio({
                tipo: '',
                tempo: '',
                distancia: ''
            });
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-black text-white">
            <Navbar />
            <div className="container mx-auto p-6 flex-grow flex flex-col items-center">
                <h1 className="text-4xl font-bold mb-4 text-center">
                    Estatísticas sobre seu Cardio
                </h1>
                <p className="text-xl mb-8 text-center">
                    Data de amanhã: {formatDate(tomorrow)}
                </p>
                
                <div className="w-full max-w-3xl bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
                    <h2 className="text-2xl font-semibold mb-4 border-b border-gray-600 pb-2">Estatísticas Atuais</h2>
                    <ul className="list-disc pl-5">
                        {estatisticas.map((exercicio, index) => (
                            <li key={index} className="mb-4">
                                <span className="font-semibold">{exercicio.tipo}:</span> {exercicio.tempo} - {exercicio.distancia}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="w-full max-w-3xl bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4 border-b border-gray-600 pb-2">Adicionar Nova Estatística</h2>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="tipo"
                            placeholder="Tipo de exercício"
                            value={novoExercicio.tipo}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white mb-2"
                        />
                        <input
                            type="text"
                            name="tempo"
                            placeholder="Tempo"
                            value={novoExercicio.tempo}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white mb-2"
                        />
                        <input
                            type="text"
                            name="distancia"
                            placeholder="Distância"
                            value={novoExercicio.distancia}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white mb-4"
                        />
                        <button
                            type="button"
                            onClick={handleAdicionar}
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                        >
                            Adicionar
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Cardio;
