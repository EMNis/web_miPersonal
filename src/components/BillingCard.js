import React from 'react';
import { HiCheck } from 'react-icons/hi';

function BillingCard() {
  return (
    <div className="card">
      <div className="billing-ok">
        <div className="check-icon">
          <HiCheck size={16} color="#fff" strokeWidth={3} />
        </div>
        <h3>¡Estás al día!</h3>
      </div>
      <p className="billing-sub">No tenés débitos pendientes.</p>
      <div className="credit-badge">Tenés a favor: $52.427,11</div>
      <div className="debito-badge">Débito automático activo</div>
    </div>
  );
}

export default BillingCard;
