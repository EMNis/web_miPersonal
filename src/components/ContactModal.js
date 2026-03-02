import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiMessageCircle } from 'react-icons/fi';
import { abrirChat } from '../utils/chat';
import API_CONFIG from '../config/apiConfig';
import '../styles/ContactModal.css';

function ContactModal({ onClose }) {
  const handleWhatsApp = () => {
    window.open(API_CONFIG.WHATSAPP_BOT_URL, '_blank');
    onClose();
  };

  const handleChat = () => {
    // Cerrar modal primero, luego abrir chat
    onClose();
    // Pequeño delay para que el modal desaparezca
    setTimeout(() => {
      abrirChat();
    }, 300);
  };

  return (
    <div className="modal-overlay-contact" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="contact-modal">
        <h3>¿Cómo deseas contactarnos?</h3>
        <div className="contact-options">
          <button className="contact-option whatsapp" onClick={handleWhatsApp} title="Abrir WhatsApp">
            <FaWhatsapp size={32} />
            <span>WhatsApp</span>
          </button>
          <button className="contact-option chat" onClick={handleChat} title="Abrir chat en vivo">
            <FiMessageCircle size={32} />
            <span>Chat en vivo</span>
          </button>
        </div>
        <button className="btn-close-contact" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}

export default ContactModal;
