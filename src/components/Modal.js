import React from 'react';

function Modal({ title, body, onClose }) {
  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <h3>{title}</h3>
        <p>{body}</p>
        <div className="modal-btns">
          <button className="btn-outline" onClick={onClose}>Cancelar</button>
          <button className="btn-primary" onClick={onClose}>Aceptar</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
