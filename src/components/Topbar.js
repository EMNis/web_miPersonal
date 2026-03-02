import React from 'react';

const links = ['Individuos', 'Pymes', 'Grandes Empresas', 'Institucional'];

function Topbar() {
  return (
    <div className="topbar">
      {links.map((link) => (
        <a key={link} className={link === 'Individuos' ? 'active' : ''}>
          {link}
        </a>
      ))}
    </div>
  );
}

export default Topbar;
