import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';
import chatbot from '/img/ChatGPT Image 26 ago 2025, 12_19_48 p.m..png';

const config = {
  initialMessages: [
    createChatBotMessage("¡Hola! ¿En qué puedo ayudarte?")
  ],

  botName: 'ChatBot',

  customComponents: {
    header: () => (
      <div style={{
        backgroundColor: '#ca3442',
        padding: '10px',
        color: 'white',
        borderRadius: '10px 10px 0 0',
        textAlign: 'center',
        fontWeight: 'bold'
      }}>
        Chat del Gimnasio
      </div>
    ),

    input: (props) => (
      <input
        className="react-chatbot-kit-chat-input"
        placeholder="Escribí tu mensaje aquí..."
        value={props.value}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
      />
    ),

    botAvatar: () => (
      <img
        src={chatbot}
        alt="Bot"
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          objectFit: 'cover'
        }}
      />
    ),
  },

  customStyles: {
    botMessageBox: {
      backgroundColor: '#14534f',
      color: 'white'
    },
    userMessageBox: {
      backgroundColor: 'black',
      color: 'white'
    },
    chatButton: {
      backgroundColor: '#ca3442',
    },
  },
};

export default config;
