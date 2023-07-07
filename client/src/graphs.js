import { useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import NavBar from './navBar';

const Graphs = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [ingresosData, setIngresosData] = useState([]);
  const [egresosData, setEgresosData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await axios.get(`http://localhost:3000/api/menu/${id}`);
        const { name } = userResponse.data;
        setUser(name);

        const ingresosResponse = await axios.get(`http://localhost:3000/api/ingresos/${id}`);
        const { ingresos } = ingresosResponse.data;
        
        const egresosResponse = await axios.get(`http://localhost:3000/api/egresos/${id}`);
        const { egresos } = egresosResponse.data;

        const ingresosData = ingresos.map(ingreso => ({
          descripcion: ingreso.descripcion,
          monto: ingreso.monto,
        }));

        const egresosData = egresos.map(egreso => ({
          descripcion: egreso.descripcion,
          monto: egreso.monto,
        }));

        setIngresosData(ingresosData);
        setEgresosData(egresosData);
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
      <div className="pageContainer">
        <div className="chartsContainer">
          <div className="chartContainer">
            <h2>Ingresos</h2>
            <ResponsiveContainer width="101%" height={300}>
              <BarChart data={ingresosData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="descripcion" />
                <YAxis domain={[0, 'dataMax + 1000']} />
                <Tooltip />
                <Legend />
                <Bar dataKey="monto" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="chartContainer">
            <h2>Egresos</h2>
            <ResponsiveContainer width="101%" height={300}>
              <BarChart data={egresosData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="descripcion" />
                <YAxis domain={[0, 'dataMax + 1000']} />
                <Tooltip />
                <Legend />
                <Bar dataKey="monto" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
  
};

export default Graphs;

