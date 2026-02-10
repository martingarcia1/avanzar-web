import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-8 border-t">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        
        <div className="mb-4 md:mb-0">
          <img 
            src="\img\Diseno_sin_titulo_28-fotor-20250822162630.png" 
            alt="Avanzar Logo" 
            className="h-30 mx-auto md:mx-0" 
          />
        </div>

   <div className="text-neutral-100 text-sm">
  
  
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=avanzar.group1@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-2 "
  >
    <img
      className="w-6 h-6"
      src="\public\img\gmail.png"
      alt="WhatsApp"
    />
    <span> avanzar.group1@gmail.com </span>
  </a>

  <a
    href="https://wa.me/543816024467"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-2 "
  >
    <img
      className="w-6 h-6"
      src="\img\icons8-whatsapp-48.png"
      alt="WhatsApp"
    />
    <span> (381) 602-4467</span>
  </a>

  
  <a
    href="https://www.instagram.com/avanzar.group/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-2 "
  >
    <img
      className="w-6 h-6"
      src="\img\icons8-instagram-48.png"
      alt="Instagram"
    />
    <span> @avanzar.grupo</span>
  </a>

  <p>
    ¡Síguenos en redes sociales y mantente al día con nuestras últimas novedades!
  </p>
</div>

      </div>
    </footer>
  );
}

export default Footer;
