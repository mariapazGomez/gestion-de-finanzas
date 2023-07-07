
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './menu.css';
import React, { useEffect, useState } from 'react';
import Graphs from './graphs'

const NavBar = ({ user }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const logout = () => {
    window.location.href = "https://www.google.com";
  };

  const myFinances = () => {
    window.location.href = 'http://localhost:3001/statistics/${id}';
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
        <h2 className="navbar__name">Nombre: {user}</h2>
      </div>
    </div>
  );
};



const Menu = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [ingresos, setIngresos] = useState([]);
  const [egresos, setEgresos] = useState([]);
  const [totalIngresos, setTotalIngresos] = useState(0);
  const [totalEgresos, setTotalEgresos] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await axios.get(`http://localhost:3000/api/menu/${id}`);
        const { name } = userResponse.data;
        setUser(name);

        const ingresosResponse = await axios.get(`http://localhost:3000/api/ingresos/${id}`);
        const { ingresos, totalIngresos } = ingresosResponse.data;
        setIngresos(ingresos);
        setTotalIngresos(totalIngresos);

        const egresosResponse = await axios.get(`http://localhost:3000/api/egresos/${id}`);
        const { egresos, totalEgresos } = egresosResponse.data;
        setEgresos(egresos);
        setTotalEgresos(totalEgresos);

        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <NavBar user={user} />
      <div className="contentContainer">
        <div className="ingresosContainer">
        </div>
  
      </div>
    </>
  );
};

export default Menu;






