import React from 'react';
import '../Css/global.css'; // Importe o arquivo CSS global
import logo from '../assets/logo_white.png'; // Importe a logo

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-8 md:px-16 lg:px-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <img src={logo} alt="Logo" className="mb-4 w-32" />
          <h2 className="text-yellow-500 text-xl font-bold mb-2">Quem Somos</h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
        </div>
        <div>
          <h2 className="text-yellow-500 text-xl font-bold mb-2">Suporte</h2>
          <ul className="text-gray-400 space-y-2">
            <li>FAQ's</li>
            <li>Política de Privacidade</li>
            <li>Termo & condições</li>
          </ul>
        </div>
        <div>
          <h2 className="text-yellow-500 text-xl font-bold mb-2">Contato</h2>
          <ul className="text-gray-400 space-y-2">
            <li>
              <i className="fas fa-phone-alt mr-2"></i>Telefone: +55 65 9272-9267
            </li>
            <li>
              <i className="fas fa-envelope mr-2"></i>Email: igor@agrom2.com.br
            </li>
            <li>
              <i className="fas fa-map-marker-alt mr-2"></i>Endereço: Edifício FAMATO, R. Eng. Edgar Prado Arze, S/N - Centro Político Administrativo, Cuiabá - MT, 78050-970
            </li>
            <li>CNPJ: 46.082.930/0001-32</li>
          </ul>
          <div className="flex space-x-4 mt-4 text-gray-400">
            <i className="fab fa-whatsapp"></i>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-tiktok"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
