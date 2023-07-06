import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './menu.css';

const NavBar = ({ user }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const logout = () => {
    window.location.href = "https://www.google.com";
  };

  const myFinances = () => {
    window.location.href = "https://www.google.com";
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
              Cerrar sesión
            </button>
            <button className="navbar__button" onClick={myFinances}>
              Mis finanzas
            </button>
          </div>
        )}
      </div>
      <div className="navbar__content">
        <h2 className="navbar__name">Nombre: {user.name}</h2>
      </div>
    </div>
  );
};



const Menu = () => {
  const { id } = useParams();
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    axios
      .get(`http://localhost:3000/api/menu/${id}`)
      .then(response => {
        setUser(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <NavBar user={user} />
    </>
  );
};

export default Menu;
