import React, { useState } from 'react';
import Navbar from '../componentes/Navbar/Navbar.jsx';
import Footer from '../componentes/Footer/Footer.jsx';

const treinos = {
    musculacao: [
        'Supino reto',
        'Agachamento',
        'Puxada na frente',
        'Cadeira extensora'
    ],
    perna: [
        'Agachamento',
        'Leg press',
        'Cadeira flexora',
        'Elevação de panturrilha'
    ],
    costas: [
        'Remada curvada',
        'Pullover',
        'Puxada na frente',
        'Remada unilateral'
    ],
    cardio: [
        'Corrida',
        'Bicicleta ergométrica',
        'Natação',
        'Pular corda'
    ]
};

function Treino() {
    const [selecao, setSelecao] = useState({
        musculacao: [],
        perna: [],
        costas: [],
        cardio: []
    });
    
    const [novosTreinos, setNovosTreinos] = useState({
        musculacao: '',
        perna: '',
        costas: '',
        cardio: ''
    });

    const handleChange = (e) => {
        const { name, value, checked } = e.target;
        setSelecao(prev => {
            const tipo = name;
            const novoSelecionado = checked
                ? [...prev[tipo], value]
                : prev[tipo].filter(item => item !== value);

            return {
                ...prev,
                [tipo]: novoSelecionado
            };
        });
    };

    const handleNovoTreinoChange = (e) => {
        const { name, value } = e.target;
        setNovosTreinos(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAdicionarTreino = (tipo) => {
        if (novosTreinos[tipo] && !treinos[tipo].includes(novosTreinos[tipo])) {
            treinos[tipo].push(novosTreinos[tipo]);
            setNovosTreinos(prev => ({
                ...prev,
                [tipo]: ''
            }));
        }
    };

    const handleRemoverTreino = (tipo, treino) => {
        setSelecao(prev => ({
            ...prev,
            [tipo]: prev[tipo].filter(item => item !== treino)
        }));
    };

    return (
        <div className="min-h-screen flex flex-col bg-black text-white">
            <div className="container mx-auto p-6 flex-grow flex flex-col items-center">
                <h1 className="text-4xl font-bold mb-8 text-center">Seu Treino de Hoje</h1>
                <form className="w-full max-w-3xl bg-gray-800 p-6 rounded-lg shadow-lg">
                    {Object.keys(treinos).map((tipo) => (
                        <div key={tipo} className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 border-b border-gray-600 pb-2">
                                {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
                            </h2>
                            <div className="space-y-2">
                                {treinos[tipo].map((exercicio) => (
                                    <div key={exercicio} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id={`${tipo}-${exercicio}`}
                                            name={tipo}
                                            value={exercicio}
                                            checked={selecao[tipo].includes(exercicio)}
                                            onChange={handleChange}
                                            className="mr-3 h-5 w-5 text-blue-500 focus:ring-blue-500 border-gray-600 bg-gray-700 rounded"
                                        />
                                        <label htmlFor={`${tipo}-${exercicio}`} className="text-lg">
                                            {exercicio}
                                        </label>
                                        <button
                                            type="button"
                                            onClick={() => handleRemoverTreino(tipo, exercicio)}
                                            className="ml-4 text-red-500 hover:text-red-700"
                                        >
                                            Remover
                                        </button>
                                    </div>
                                ))}
                                <div className="mt-4 flex items-center">
                                    <input
                                        type="text"
                                        placeholder="Adicionar novo treino"
                                        value={novosTreinos[tipo]}
                                        onChange={(e) => handleNovoTreinoChange(e)}
                                        name={tipo}
                                        className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white mr-4"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => handleAdicionarTreino(tipo)}
                                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                                    >
                                        Adicionar
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </form>
                <div className="mt-12 w-full max-w-3xl bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4 border-b border-gray-600 pb-2">
                        Treinos Selecionados
                    </h2>
                    {Object.keys(selecao).map((tipo) => (
                        selecao[tipo].length > 0 && (
                            <div key={tipo} className="mb-6">
                                <h3 className="text-xl font-semibold mb-2">
                                    {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
                                </h3>
                                <ul className="list-disc pl-5 space-y-1">
                                    {selecao[tipo].map((exercicio, index) => (
                                        <li key={index} className="text-gray-300 flex justify-between">
                                            {exercicio}
                                            <button
                                                onClick={() => handleRemoverTreino(tipo, exercicio)}
                                                className="text-red-500 hover:text-red-700"
                                            >
                                                Remover
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Treino;
