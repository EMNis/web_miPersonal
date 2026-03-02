import React from 'react';
import {
  HiOutlineArchive,
  HiOutlineDocumentText,
  HiOutlineWifi,
  HiOutlineCog,
  HiOutlineCreditCard,
  HiOutlineTruck,
  HiOutlineUser,
  HiOutlinePlusCircle,
} from 'react-icons/hi';

const actions = [
  { icon: HiOutlineArchive,      label: 'Suscripciones',      type: 'toast' },
  { icon: HiOutlineDocumentText, label: 'Mis facturas',        type: 'modal', key: 'facturas' },
  { icon: HiOutlineWifi,         label: 'Mi WiFi',             type: 'toast' },
  { icon: HiOutlineCog,          label: 'Soporte técnico',     type: 'modal', key: 'soporte' },
  { icon: HiOutlineCreditCard,   label: 'Débito automático',   type: 'toast' },
  { icon: HiOutlineTruck,        label: 'Mis pedidos',         type: 'toast' },
  { icon: HiOutlineUser,         label: 'Mi perfil',           type: 'toast' },
  { icon: HiOutlinePlusCircle,   label: 'Más opciones',        type: 'toast' },
];

function QuickActions({ onModal, onToast }) {
  const handleClick = (action) => {
    if (action.type === 'modal') {
      onModal(action.key);
    } else {
      onToast(`Abriendo ${action.label}...`);
    }
  };

  return (
    <div className="card">
      <div className="quick-actions">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <div
              key={action.label}
              className="action-item"
              onClick={() => handleClick(action)}
            >
              <div className="action-icon">
                <Icon size={22} color="#00a0e3" />
              </div>
              <span>{action.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default QuickActions;
