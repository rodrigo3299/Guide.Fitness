import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../componentes/Footer/Footer.jsx';

const Login = ({ setForm }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Email: ${email}, Password: ${password}`);
        setEmail('');
        setPassword('');
        setLoggedIn(true);
    };

    return (
        <div className="min-h-screen flex flex-col bg-black">
            <div className="flex-grow flex items-center justify-center">
                {loggedIn ? (
                    <div className="bg-white border-4 border-white p-8 rounded-lg max-w-md w-full text-center">
                        <h1 className="text-2xl font-bold mb-6">Bem-vindo de volta!</h1>
                        <p className="mb-4">Você fez login com sucesso.</p>
                        <Link to="/" className="text-blue-500">
                            Voltar para a página inicial
                        </Link>
                    </div>
                ) : (
                    <div className="bg-white border-4 border-white p-8 rounded-lg max-w-md w-full">
                        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
                        <form onSubmit={handleSubmit}>
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
                                Entrar
                            </button>
                            <p className="mt-4 text-sm text-center text-gray-600">
                                Ainda não tem uma conta?{' '}
                                <Link to="/sobre" className="text-blue-500">
                                    Cadastre-se
                                </Link>
                            </p>
                        </form>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Login;
