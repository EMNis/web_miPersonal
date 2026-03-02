import React from 'react';
import { HiOutlineLocationMarker, HiOutlineShoppingCart, HiOutlineUser } from 'react-icons/hi';

const navLinks = [
  { label: 'Móvil', color: '#00a0e3' },
  { label: 'Fibra', color: '#00cec9' },
  { label: 'Flow', color: '#00b894' },
  { label: 'Pay', color: '#6c5ce7' },
  { label: 'Tienda', color: '#00a0e3' },
  { label: 'Smarthome', color: null },
  { label: 'Ayuda', color: null },
];

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">personal</div>
      <div className="nav-links">
        {navLinks.map(({ label, color }) => (
          <a key={label} className="nav-link">
            {color && <span className="dot" style={{ background: color }} />}
            {label}
          </a>
        ))}
      </div>
      <div className="nav-icons">
        <HiOutlineLocationMarker size={20} />
        <HiOutlineShoppingCart size={20} />
        <div className="user-btn">
          <HiOutlineUser size={20} />
          <span>Eric Ezequiel</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
