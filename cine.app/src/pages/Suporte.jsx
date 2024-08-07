import React, { useState } from 'react';
import Footer from '../componentes/Footer/Footer.jsx';

const Suporte = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [assunto, setAssunto] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleNomeChange = (e) => {
        setNome(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleAssuntoChange = (e) => {
        setAssunto(e.target.value);
    };

    const handleMensagemChange = (e) => {
        setMensagem(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Nome: ${nome}, Email: ${email}, Assunto: ${assunto}, Mensagem: ${mensagem}`);
        setNome('');
        setEmail('');
        setAssunto('');
        setMensagem('');
        setSubmitted(true);
    };

    const whatsappLink = `https://wa.me/5511995842616?text=${encodeURIComponent(`Olá, meu nome é ${nome}. ${mensagem}`)}`;

    return (
        <div className="min-h-screen flex flex-col bg-black">
            <div className="flex-grow flex items-center justify-center">
                {submitted ? (
                    <div className="bg-white p-8 rounded shadow-lg max-w-md w-full text-center">
                        <h1 className="text-2xl font-bold mb-6">Obrigado pelo contato!</h1>
                        <p className="mb-4">Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.</p>
                    </div>
                ) : (
                    <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
                        <h1 className="text-2xl font-bold mb-6 text-center">Suporte</h1>
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
                                <label htmlFor="assunto" className="block text-gray-700 font-bold mb-2">Assunto</label>
                                <input
                                    type="text"
                                    id="assunto"
                                    value={assunto}
                                    onChange={handleAssuntoChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                    placeholder="Digite o assunto"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="mensagem" className="block text-gray-700 font-bold mb-2">Mensagem</label>
                                <textarea
                                    id="mensagem"
                                    value={mensagem}
                                    onChange={handleMensagemChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                    placeholder="Digite sua mensagem"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Enviar
                            </button>
                        </form>
                        <div className="mt-4 text-center">
                            <p className="text-gray-600">Ou, entre em contato pelo WhatsApp:</p>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-block mt-2"
                            >
                                Falar no WhatsApp
                            </a>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Suporte;
