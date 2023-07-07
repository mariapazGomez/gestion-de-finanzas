import { useParams } from 'react-router-dom';
import axios from 'axios';
import './menu.css';
import React, { useEffect, useState } from 'react';
import NavBar from './navBar';

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
      <NavBar user={user} id={id} />
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
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Menu;
