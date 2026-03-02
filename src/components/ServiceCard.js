import React from 'react';
import { HiOutlineDesktopComputer } from 'react-icons/hi';

function ServiceCard({ onPackClick, onToast }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3>Mis servicios</h3>
        <a onClick={() => onToast('Abriendo detalle de servicios...')}>
          Consultar &rsaquo;
        </a>
      </div>

      <div className="service-item">
        <HiOutlineDesktopComputer size={22} color="#00a0e3" />
        <span>
          TV <b style={{ color: '#00a0e3' }}>Flow Full sin Deco</b>
        </span>
      </div>

      <div className="packs">
        <h4>Packs y suscripciones</h4>
        <div className="packs-list">
          <span className="pack-badge" onClick={() => onToast('Universal+ activo ✓')}>
            Universal+
          </span>
          <span className="pack-badge" onClick={() => onToast('Paramount+ activo ✓')}>
            Paramount+
          </span>
          <span className="pack-badge more" onClick={onPackClick}>
            +1
          </span>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
