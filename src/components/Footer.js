import React from 'react';

const footerData = [
  {
    title: 'Internet y móvil',
    links: ['Internet Hogar', 'Planes Móviles', 'Portabilidad', 'Prepago', 'Roaming', 'Smarthome'],
  },
  {
    title: 'Tienda',
    links: ['Samsung', 'Motorola', 'Xiaomi', 'Celulares liberados', 'TV y Smart', 'Audio'],
  },
  {
    title: 'Entretenimiento',
    links: ['Pack Fútbol', 'HBO Pack', 'Hot Pack', 'Disney+', 'Paramount+', 'Universal +'],
  },
  {
    title: 'Flow',
    links: ['Planes Flow TV', 'Flow Full', 'Flow+', 'Flow Básico', 'Mundial 2026', 'Música en Flow'],
  },
  {
    title: 'Quiero',
    links: ['Conexión Total', 'Mejorar mi plan', 'Pago en casa', 'Recargar crédito', 'Personal Pay', 'App Mi Personal'],
  },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">personal</div>
      <div className="footer-grid">
        {footerData.map((col) => (
          <div key={col.title} className="footer-col">
            <h4>{col.title}</h4>
            {col.links.map((link) => (
              <a key={link}>{link}</a>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
