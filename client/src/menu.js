
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
  const [error, setError] = useState(null);
  const [totalIngresos, setTotalIngresos] = useState(0); // Variable para almacenar la suma total de ingresos
  const [totalEgresos, setTotalEgresos] = useState(0); // Variable para almacenar la suma total de egresos

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/menu/${id}`);
        const { ingresos, egresos } = response.data;
        setUser(response.data);
        
        // Calcular la suma total de ingresos
        const sumaIngresos = ingresos.reduce((acc, ingreso) => acc + ingreso.monto, 0);
        setTotalIngresos(sumaIngresos);

        // Calcular la suma total de egresos
        const sumaEgresos = egresos.reduce((acc, egreso) => acc + egreso.monto, 0);
        setTotalEgresos(sumaEgresos);

        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
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
      <div className="tableContainer">
        <h2>Resumen Financiero</h2>
        <table className="summaryTable">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ingresos</td>
              <td>{totalIngresos}</td>
            </tr>
            <tr>
              <td>Egresos</td>
              <td>{totalEgresos}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Menu;