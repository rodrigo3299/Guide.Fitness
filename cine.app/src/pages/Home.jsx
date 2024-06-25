import React from 'react';
import data from '../../artigos.json';
import Carrosel from '../componentes/Carrosel/Carrosel.jsx';
import Footer from '../componentes/Footer/Footer.jsx';

function Home() {
    return (
        <main className="bg-black min-h-screen">
            <div className="container mx-auto p-4">
                <Carrosel />
                <h1 className="text-white text-4xl mb-8">TREINOS 15/6</h1>
                <div className="grid grid-cols-2 gap-4">
                    {data.map(fit => (
                        <div className="relative overflow-hidden rounded-lg shadow-lg" key={fit.title}>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-white text-center p-4">
                                    <h1 className="text-2xl font-bold mb-2">{fit.title}</h1>
                                    <div className="tag mb-2">
                                        {fit.tags.map(tag => (
                                            <span key={tag} className="text-white font-bold "> {tag}</span>
                                        ))}
                                    </div>
                                    <div className="text">
                                        {fit.text.map((texto, index) => (
                                            <p key={index} className="mb-2">{texto}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <img
                                src={fit.image}
                                alt={fit.title}
                                className="object-cover w-full h-full"
                                style={{ aspectRatio: '25 / 9' }} 
                            />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}

export default Home;
