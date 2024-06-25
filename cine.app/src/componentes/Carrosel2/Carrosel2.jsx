
import { useState, useEffect } from 'react';

const Carrosel2 = () => {
    const [images] = useState([
    'carros1-2.jpg',
    'deadpool.jpg',
    'guerra.jpg',
    ]);

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 4000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="flex justify-center items-center mb-10 mt-4">
            <div className="w-full max-w-8xl mx-auto">
                <img src={images[currentIndex]} alt={`Imagem ${currentIndex + 1}`} className="w-full h-auto" />
            </div>
        </div>
    );
};

export default Carrosel2;
