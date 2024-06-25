import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary-digolinha text-black py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold">GUIDE FITNESS</h1>
          </div>
         
        </div>
        <div className="mt-6 text-end text-black">
          &copy; {new Date().getFullYear()} Minha Empresa. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
