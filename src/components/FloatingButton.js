import React, { useState } from 'react';
import { FiMessageCircle } from 'react-icons/fi';
import ContactModal from './ContactModal';
import '../styles/FloatingButton.css';

function FloatingButton() {
  const [showContactModal, setShowContactModal] = useState(false);

  const handleClick = () => {
    setShowContactModal(true);
  };

  return (
    <>
      <button className="floating-button" onClick={handleClick} title="Más opciones">
        <FiMessageCircle size={24} />
      </button>
      {showContactModal && <ContactModal onClose={() => setShowContactModal(false)} />}
    </>
  );
}

export default FloatingButton;
