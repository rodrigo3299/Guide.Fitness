import React, { useState } from 'react';
import Footer from '../componentes/Footer/Footer.jsx';

const Dieta = () => {
    const [customDiet, setCustomDiet] = useState('');
    const [diets, setDiets] = useState([
        {
            title: 'Dieta para Emagrecimento',
            details: [
                'Café da manhã: Iogurte desnatado com frutas vermelhas e aveia',
                'Almoço: Salada de folhas verdes com frango grelhado',
                'Lanche da tarde: Uma maçã',
                'Jantar: Sopa de legumes com uma fatia de pão integral'
            ]
        },
        {
            title: 'Dieta para Ganho de Massa',
            details: [
                'Café da manhã: Omelete de 3 ovos com espinafre e queijo',
                'Almoço: Arroz integral, feijão e carne vermelha magra',
                'Lanche da tarde: Shake de proteínas com banana',
                'Jantar: Salmão grelhado com batata-doce e brócolis'
            ]
        }
    ]);

    const handleCustomDietChange = (e) => {
        setCustomDiet(e.target.value);
    };

    const handleAddCustomDiet = () => {
        setDiets([...diets, { title: 'Dieta Personalizada', details: customDiet.split('\n') }]);
        setCustomDiet('');
    };

    return (
        <div className="min-h-screen flex flex-col bg-black text-white">
            <div className="flex-grow flex flex-col items-center justify-center p-6">
                <h1 className="text-4xl font-bold mb-8 text-center">A sua Dieta</h1>
                <div className="bg-gray-800 p-8 rounded shadow-lg max-w-md w-full mb-8">
                    <h2 className="text-2xl font-bold mb-6">Exemplos de Dieta</h2>
                    {diets.map((diet, index) => (
                        <div key={index} className="mb-6">
                            <h3 className="text-xl font-bold mb-3">{diet.title}</h3>
                            <ul className="list-disc pl-5">
                                {diet.details.map((detail, idx) => (
                                    <li key={idx} className="mb-2">{detail}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="bg-gray-800 p-8 rounded shadow-lg max-w-md w-full">
                    <h2 className="text-2xl font-bold mb-6">Crie sua Dieta Personalizada</h2>
                    <textarea
                        value={customDiet}
                        onChange={handleCustomDietChange}
                        className="w-full px-4 py-3 mb-4 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
                        placeholder="Digite os detalhes da sua dieta, separando cada item por uma nova linha..."
                        rows="6"
                    ></textarea>
                    <button
                        onClick={handleAddCustomDiet}
                        className="w-full bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Adicionar Dieta
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Dieta;
