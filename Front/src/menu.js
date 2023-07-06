import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './menu.css';
import React, { useEffect, useState } from 'react';


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
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [ingresos, setIngresos] = useState([]);
  const [egresos, setEgresos] = useState([]);
  const [totalIngresos, setTotalIngresos] = useState(0);
  const [totalEgresos, setTotalEgresos] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ingresosResponse = await axios.get(`http://localhost:3000/api/ingresos/${id}`);
        const egresosResponse = await axios.get(`http://localhost:3000/api/egresos/${id}`);
        const { ingresos, totalIngresos } = ingresosResponse.data;
        const { egresos, totalEgresos } = egresosResponse.data;
        setIngresos(ingresos);
        setTotalIngresos(totalIngresos);
        setEgresos(egresos);
        setTotalEgresos(totalEgresos);
        setUser(ingresosResponse.data);
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
          <h3>Ingresos</h3>
          <table className="data-table">
            <thead>
              <tr>
                <th>Descripción</th>
                <th>Monto</th>

              </tr>
            </thead>
            <tbody>
              {ingresos.map(ingreso => (
                <tr key={ingreso._id}>
                  <td>{ingreso.descripcion}</td>
                  <td>{ingreso.monto}</td>
                </tr>
              ))}
              <tr className="totalRow">
                <td>Total:</td>
                <td>{totalIngresos}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="egresosContainer">
          <h3>Egresos</h3>
          <table className="data-table">
            <thead>
              <tr>
                <th>Descripción</th>
                <th>Monto</th>

              </tr>
            </thead>
            <tbody>
              {egresos.map(egreso => (
                <tr key={egreso._id}>
                  <td>{egreso.descripcion}</td>
                  <td>{egreso.monto}</td>
                </tr>
              ))}
              <tr className="totalRow">
                  <td>Total:</td>
                  <td>{totalEgresos}</td>
                  <td></td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Menu;






