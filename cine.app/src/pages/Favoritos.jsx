import React, { useState } from 'react';
import Navbar from '../componentes/Navbar/Navbar.jsx';
import Footer from '../componentes/Footer/Footer.jsx';

const profissionais = [
    {
        nome: 'João Silva',
        area: 'Nutricionista',
        descricao: 'Especialista em nutrição esportiva e dietas personalizadas, João Silva ajuda atletas e entusiastas do fitness a alcançarem seus objetivos de desempenho e saúde através de planos alimentares equilibrados e otimizados. Com anos de experiência, ele oferece consultas detalhadas e orientações baseadas em evidências científicas.',
        imagem: 'https://thumbs.dreamstime.com/b/nutricionista-com-%C3%A1rea-de-transfer%C3%AAncia-e-laptop-na-mesa-em-uma-no-escrit%C3%B3rio-172904376.jpg'
    },
    {
        nome: 'Maria Souza',
        area: 'Personal Trainer',
        descricao: 'Maria Souza é uma treinadora pessoal com foco em musculação e exercícios cardiovasculares. Ela cria programas de treino personalizados para ajudar seus clientes a melhorarem sua forma física, aumentarem a força e a resistência, e atingirem suas metas de fitness. Maria também oferece suporte motivacional e orientação técnica para garantir a execução correta dos exercícios.',
        imagem: 'https://img.freepik.com/fotos-premium/conceito-de-trabalho-em-equipe-a-personal-trainer-feminina-esta-dando-mais-cinco-a-uma-esportista-que-alcancou-progresso_232070-16357.jpg'
    },
    {
        nome: 'Pedro Santos',
        area: 'Fisioterapeuta',
        descricao: 'Fisioterapeuta especializado em reabilitação esportiva, Pedro Santos trabalha com atletas e pessoas ativas para tratar e prevenir lesões. Ele utiliza técnicas avançadas de fisioterapia para acelerar a recuperação, melhorar a mobilidade e fortalecer áreas vulneráveis, promovendo um retorno seguro e eficaz às atividades físicas.',
        imagem: 'https://img.freepik.com/fotos-premium/ajudar-voce-a-se-curar-e-meu-trabalho-retrato-de-um-belo-fisioterapeuta-masculino-maduro-posando-com-os-bracos-cruzados-em-seu-escritorio_590464-22240.jpg'
    },
    {
        nome: 'Carlos Oliveira',
        area: 'Coach de Vida',
        descricao: 'Carlos Oliveira é um coach de vida focado em equilíbrio emocional e mental. Ele ajuda seus clientes a identificarem e superarem barreiras pessoais, desenvolverem resiliência e alcançarem um estado de bem-estar holístico. Carlos oferece sessões individuais e workshops para promover o crescimento pessoal e a realização de metas de vida.',
        imagem: 'https://s2-g1.glbimg.com/VYW8AHfL2wo4QKlKveFpFHBhwQw=/0x0:800x449/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/B/A/oBFRoHSl6SLd8LgKL9Cg/45903320-b96f-11ed-b32a-5b430fec8e05.jpg'
    }
];

function Favoritos() {
    const [endereco, setEndereco] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const handleEnderecoChange = (e) => {
        setEndereco(e.target.value);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredProfissionais = profissionais.filter((profissional) =>
        profissional.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        profissional.area.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen flex flex-col bg-black">
            <Navbar />
            <div className="container mx-auto p-4 flex-grow flex flex-col items-center">
                <h1 className="text-white text-4xl mb-6 text-center">Entre em Contato com Profissionais</h1>
                <div className="mb-8 w-full max-w-md">
                    <input
                        type="text"
                        placeholder="Digite seu endereço"
                        value={endereco}
                        onChange={handleEnderecoChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-8 w-full max-w-md">
                    <img 
                        src="https://mobilidadesampa.com.br/wp-content/uploads/2019/10/Avenida-Lins-de-Vasconcelos.png" 
                        alt="Mapa" 
                        className="object-cover w-full h-48 rounded mb-4" 
                    />
                </div>
                <div className="mb-8 w-full max-w-md">
                    <input
                        type="text"
                        placeholder="Pesquisar profissionais"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 w-full">
                    {filteredProfissionais.map((profissional) => (
                        <div className="bg-white p-4 rounded-lg shadow-lg" key={profissional.nome}>
                            <img src={profissional.imagem} alt={profissional.nome} className="object-cover w-70 h-48 rounded mb-4" />
                            <h2 className="text-xl font-bold mb-2">{profissional.nome}</h2>
                            <h3 className="text-gray-700 mb-2">{profissional.area}</h3>
                            <p className="text-gray-600">{profissional.descricao}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Favoritos;
