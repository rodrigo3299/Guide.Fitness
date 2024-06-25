import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sobre = ({ setForm }) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');

    const handleNomeChange = (e) => {
        setNome(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleCpfChange = (e) => {
        setCpf(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Nome: ${nome}, Email: ${email}, CPF: ${cpf}, Password: ${password}`);
        setNome('');
        setEmail('');
        setCpf('');
        setPassword('');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
                <h1 className="text-2xl font-bold mb-6 text-center">Cadastro</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="nome" className="block text-gray-700 font-bold mb-2">Nome</label>
                        <input
                            type="text"
                            id="nome"
                            value={nome}
                            onChange={handleNomeChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            placeholder="Digite seu nome"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            placeholder="Digite seu email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="cpf" className="block text-gray-700 font-bold mb-2">CPF</label>
                        <input
                            type="text"
                            id="cpf"
                            value={cpf}
                            onChange={handleCpfChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            placeholder="Digite seu CPF"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Senha</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            placeholder="Digite sua senha"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Cadastrar
                    </button>
                    <p className="mt-4 text-sm text-center text-gray-600">
                        Já tem uma conta?{''} 
                        <Link to="/login" className="text-blue-500">
                        Faça login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Sobre;
