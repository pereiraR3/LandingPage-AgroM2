import React from 'react';
import '../Css/global.css';

const IntroSection = () => {
  return (
    <div id="intro-section" className="relative bg-cover bg-center">
      <div className="absolute inset-0 bg-yellow-600 opacity-50"></div>
      <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 lg:px-32">
        <div className="max-w-lg">
          <h1 className="text-black text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Do hectare ao metro quadrado</h1>
          <p className="text-black text-lg md:text-xl lg:text-2xl mb-8">
            Tomada de decisão rápida e integrada é o que confere competitividade à agricultura brasileira.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition duration-300 ease-in-out w-max">
            Criar conta grátis
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
