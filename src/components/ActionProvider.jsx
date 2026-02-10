import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('¡Hola! ¿Cómo estás?', { delay: 300 });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleContacto = () => {
    const botMessage = createChatBotMessage(
      `📞 Datos de contacto:
- Teléfono: +54 381 602 4477
- Email: avanzar.group1@gmail.com
- Dirección: Pcia. de Córdoba 714, San Miguel de Tucumán`
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleCuota = () => {
    const botMessage = createChatBotMessage("💳 Recibimos solo transferencia y efectivo");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleUnknown = () => {
    const botMessage = createChatBotMessage(
      "Lo siento, no entendí tu pregunta. ¿Podés reformularla?"
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleUbicacion = () => {
    const botMessage = createChatBotMessage(
      "📍 Estamos ubicados en Córdoba 714, San Miguel de Tucumán. ¡Te esperamos!"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleHorarios = () => {
    const botMessage = createChatBotMessage(
      "🕒 Nuestros horarios son:\n- Lunes a Viernes: 7:00 a 13:00\n- Sábados: 9:00 a 14:00\n- Domingos: cerrado."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleServicios = () => {
    const botMessage = createChatBotMessage(
      `Ofrecemos los siguientes servicios:
 Manejo de redes sociales,
Estudio contable,Servicio de sistemas y
Desarrollo de páginas web`
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          actions: {
            handleHello,
            handleCuota,
            handleUnknown,
            handleUbicacion,
            handleHorarios,
            handleContacto,
            handleServicios
          },
        })
      )}
    </>
  );
};

export default ActionProvider;

