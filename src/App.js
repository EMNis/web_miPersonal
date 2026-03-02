import React, { useState } from 'react';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import ServiceHeader from './components/ServiceHeader';
import ServiceCard from './components/ServiceCard';
import BillingCard from './components/BillingCard';
import QuickActions from './components/QuickActions';
import Footer from './components/Footer';
import Modal from './components/Modal';
import Toast from './components/Toast';
import ContactModal from './components/ContactModal';
import FloatingButton from './components/FloatingButton';

function App() {
  const [modal, setModal] = useState(null); // { title, body }
  const [toast, setToast] = useState('');
  const [toastVisible, setToastVisible] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const showModal = (type) => {
    const modals = {
      servicio: {
        title: 'Cambiar servicio',
        body: 'Actualmente estás gestionando el hogar de PERON JUAN DOMIN... ¿Deseás cambiar a otro servicio asociado a tu cuenta?',
      },
      packs: {
        title: 'Pack adicional',
        body: 'Tenés un pack adicional activo en tu suscripción. Podés ver el detalle completo desde la sección Suscripciones.',
      },
      facturas: {
        title: 'Mis facturas',
        body: 'No tenés facturas pendientes. Tenés un saldo a favor de $52.427,11 que se aplicará en tu próxima factura automáticamente.',
      },
      soporte: {
        title: 'Soporte técnico',
        body: '¿Estás experimentando algún problema con tu servicio? Un técnico de Personal puede asistirte en el horario de 8:00 a 22:00 hs.',
      },
    };
    setModal(modals[type]);
  };

  const showToast = (msg) => {
    setToast(msg);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2500);
  };

  return (
    <div className="app">
      <Topbar />
      <Navbar />
      <main className="container">
        <ServiceHeader onServiceClick={() => showModal('servicio')} />
        <ServiceCard onPackClick={() => showModal('packs')} onToast={showToast} />
        <BillingCard />
        <QuickActions onModal={showModal} onToast={showToast} onContact={() => setContactOpen(true)} />
      </main>
      <Footer />
      {modal && <Modal title={modal.title} body={modal.body} onClose={() => setModal(null)} />}
      <Toast message={toast} visible={toastVisible} />
      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
    </div>
  );
}

export default App;
