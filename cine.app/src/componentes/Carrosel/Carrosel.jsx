import React, { useState, useEffect } from 'react';

const Carrosel = () => {
    const [images] = useState([
        { src: 'muscula.png', text: 'Treino do Dia 15/06' },
        { src: 'suplem.jpg', text: 'Suplementos' },
        { src: 'diet.jpg', text: 'A sua Dieta!' },
    ]);

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 4000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative flex justify-center items-center mb-10 mt-4">
            <div className="w-full max-w-3xl mx-auto relative">
                <img
                    src={images[currentIndex].src}
                    alt={`Imagem ${currentIndex + 1}`}
                    className="w-full h-auto max-h-96 object-cover"
                    style={{ aspectRatio: '1 / 1' }} // Manter aspect ratio quadrado
                />
                <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-50 text-white px-4 py-2">
                    <p className="text-lg font-bold">{images[currentIndex].text}</p>
                </div>
            </div>
        </div>
    );
};

export default Carrosel;
