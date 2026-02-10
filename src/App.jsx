import './App.css';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import { useState } from 'react';
import Inicio from './pages/Inicio';
import Navbar from './components/Navbar';
import Sponsors from './pages/Sponsors';
import Contacto from './pages/Contacto';
import Equipo from './pages/Equipo';
import Servicios from './pages/Servicios';
import Footer from './components/Footer';
import config from './components/config.jsx';
import MessageParser from './components/MessageParser.jsx';
import ActionProvider from './components/ActionProvider.jsx';
import imgChatbot from '/img/ChatGPT Image 26 ago 2025, 12_19_48 p.m..png';
import agradecimiento from './pages/agradecimiento.jsx';

function App() {
  const [showBot, toggleBot] = useState(false);

  return (
    <div>
      <Navbar />

      <section id="inicio">
        <Inicio />
      </section>

      <section id="equipo">
        <Equipo />
      </section>

      <section id="servicios">
        <Servicios />
      </section>

      <section id="sponsors">
        <Sponsors />
      </section>

      <section id="contacto">
        <Contacto />
      </section>

      <section id="gracias">
        <agradecimiento />
      </section>

      {showBot && (
        <div className="fixed bottom-28 rounded-tl-[30px] rounded-tr-[30px] rounded-bl-[0px] rounded-br-[0px] right-5 m-0 p-0">
          <Chatbot
            key={Date.now()} // 🔑 fuerza el reinicio en cada render
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
          />
        </div>
      )}

      <button
        className="fixed bottom-6 right-6 bg-neutral-950 rounded-full p-3 shadow-lg transition duration-300 z-50"
        onClick={() => toggleBot((prev) => !prev)}
      >
        <img
          src={imgChatbot}
          alt="Abrir chatbot"
          className="w-12 h-12 object-cover"
        />
      </button>

      <Footer />
    </div>
  );
}

export default App;


