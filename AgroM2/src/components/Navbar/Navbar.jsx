import React, { useState } from 'react';
import '../Css/global.css'; 
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className={`bg-custom-yellow py-4 px-6 flex justify-between items-center fixed top-0 left-0 w-full z-40 transition-transform duration-300 ease-in-out ${isOpen ? 'transform -translate-x-full' : ''}`}>        <div className="flex items-center">
          <img src={logo} alt="Logo Agro M2" className="h-8 w-auto" /> {/* Ajuste o tamanho da imagem conforme necessário */}
        </div>
        <div className="hidden md:flex space-x-6 flex-1 justify-center">
          <ul className="flex space-x-6 items-center">
            <li className="text-black hover:underline cursor-pointer list-none">Soluções</li>
            <li className="text-black hover:underline cursor-pointer list-none">Preços e taxas</li>
            <li className="text-black hover:underline cursor-pointer list-none">Sobre a Agro m²</li>
            <li className="text-black hover:underline cursor-pointer list-none">Blog</li>
          </ul>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-black">Acessar minha conta</button>
          <button className="bg-transparent border border-black text-black px-4 py-2 rounded hover:bg-black hover:text-white">Criar conta grátis</button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? <XIcon className="w-6 h-6 text-black" /> : <MenuIcon className="w-6 h-6 text-black" />}
          </button>
        </div>
      </nav>
      {/* Fim da Navbar */}

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full bg-custom-yellow w-64 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden z-50`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu}>
            <XIcon className="w-6 h-6 text-black" />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-6 mt-8">
          <ul className="flex flex-col space-y-6">
            <li className="text-black hover:underline cursor-pointer list-none">Soluções</li>
            <li className="text-black hover:underline cursor-pointer list-none">Preços e taxas</li>
            <li className="text-black hover:underline cursor-pointer list-none">Sobre a Agro m²</li>
            <li className="text-black hover:underline cursor-pointer list-none">Blog</li>
          </ul>
          <div className="flex flex-col space-y-4">
            <button className="text-black">Acessar minha conta</button>
            <button className="bg-transparent border border-black text-black px-4 py-2 rounded hover:bg-black hover:text-white">Criar conta grátis</button>
          </div>
        </div>
      </div>
      {/* Fim da Sidebar */}
    </div>
  );
};

export default Navbar;
