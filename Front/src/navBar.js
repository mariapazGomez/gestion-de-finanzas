
import './menu.css';
import React, { useEffect, useState } from 'react';

const NavBar = ({ user, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  const logout = () => {
    window.location.href = `http://localhost:3001/menu/${id}`;
  };

  const myFinances = () => {
    window.location.href = `http://localhost:3001/statistics/${id}`;
  };

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar__menuContainer">
        <button className="navbar__menuButton" onClick={handleMenuClick}>
          Menú
        </button>
        {isOpen && (
          <div className="navbar__dropdown">
            <button className="navbar__button" onClick={logout}>
              Inicio
            </button>
            <button className="navbar__button" onClick={myFinances}>
              Mis finanzas
            </button>
          </div>
        )}
      </div>
      <div className="navbar__content">
        <h2 className="navbar__name">Nombre: {user}</h2>
      </div>
    </div>
  );
};

export default NavBar;
