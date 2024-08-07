import React, { useState } from 'react';
import Footer from '../componentes/Footer/Footer.jsx';

const Anotacoes = () => {
    const [exercises, setExercises] = useState([]);
    const [exerciseName, setExerciseName] = useState('');
    const [repetitions, setRepetitions] = useState('');
    const [note, setNote] = useState('');

    const handleExerciseNameChange = (e) => {
        setExerciseName(e.target.value);
    };

    const handleRepetitionsChange = (e) => {
        setRepetitions(e.target.value);
    };

    const handleNoteChange = (e) => {
        setNote(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setExercises([...exercises, { name: exerciseName, repetitions, note }]);
        setExerciseName('');
        setRepetitions('');
        setNote('');
    };

    return (
        <div className="min-h-screen flex flex-col bg-black text-white">
            <div className="flex-grow flex flex-col items-center justify-center p-6">
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg w-full">
                    <h1 className="text-4xl font-bold mb-6 text-center">Suas Anotações do Treino</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="exerciseName" className="block text-gray-300 font-bold mb-2">Nome do Exercício</label>
                            <input
                                type="text"
                                id="exerciseName"
                                value={exerciseName}
                                onChange={handleExerciseNameChange}
                                className="w-full px-4 py-2 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:border-blue-500"
                                placeholder="Digite o nome do exercício"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="repetitions" className="block text-gray-300 font-bold mb-2">Repetições</label>
                            <input
                                type="number"
                                id="repetitions"
                                value={repetitions}
                                onChange={handleRepetitionsChange}
                                className="w-full px-4 py-2 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:border-blue-500"
                                placeholder="Digite o número de repetições"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="note" className="block text-gray-300 font-bold mb-2">Anotações adicionais</label>
                            <textarea
                                id="note"
                                value={note}
                                onChange={handleNoteChange}
                                className="w-full px-4 py-2 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:border-blue-500"
                                placeholder="Digite suas notas adicionais aqui"
                                rows="4"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Adicionar
                        </button>
                    </form>
                    <div className="mt-8">
                        <h2 className="text-2xl font-bold mb-4 text-center">Anotações</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            {exercises.map((exercise, index) => (
                                <li key={index} className="text-gray-300">
                                    <span className="font-semibold">{exercise.name}</span>: {exercise.repetitions} repetições
                                    <div className="mt-1 text-gray-400">{exercise.note}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Anotacoes;
