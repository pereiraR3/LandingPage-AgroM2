import React from 'react';
import '../Css/global.css'; // Importe o arquivo CSS global
import farmer from '../assets/farmer.png'; // Importe as imagens
import plant01 from '../assets/plant01.png';
import plant02 from '../assets/plant02.png';

const IntermedSection = () => {
  return (
    <div className="py-16 px-8 md:px-16 lg:px-32 bg-white relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative">
          <ul className="list-disc space-y-4 text-3xl md:text-4xl lg:text-6xl font-bold">
            <li className="text-black">Análise</li>
            <li className="text-black">Fornecimento</li>
            <li className="text-black">Entrega</li>
          </ul>
          <p className="text-black text-md md:text-lg lg:text-xl mt-4">
            Saiba mais sobre nossos serviços
          </p>
          <div className="plants-container absolute top-0 right-0 mt-8 md:mt-0">
            <img src={plant01} alt="plant" className="plant plant-01 mb-4" />
            <img src={plant02} alt="plant" className="plant plant-02" />
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <img src={farmer} alt="Farmer" className="w-full max-w-md rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default IntermedSection;
