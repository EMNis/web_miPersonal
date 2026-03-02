import React from 'react';
import { HiOutlineHome, HiChevronDown } from 'react-icons/hi';

function ServiceHeader({ onServiceClick }) {
  return (
    <div className="service-header">
      <h2>Estás gestionando el servicio:</h2>
      <div className="service-selector" onClick={onServiceClick}>
        <HiOutlineHome size={20} color="#00a0e3" />
        <div className="selector-text">
          <strong>PERON JUAN DOMIN...</strong>
          <span className="selector-sub">- Hogar...</span>
        </div>
        <HiChevronDown size={18} className="arrow" />
      </div>
    </div>
  );
}

export default ServiceHeader;
