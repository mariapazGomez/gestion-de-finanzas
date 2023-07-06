import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Menu = () => {
  const { id } = useParams();
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    axios
      .get(`http://localhost:3001/api/menu/${id}`)
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
    <div style={styles.pageContainer}>
      <div style={styles.menuContainer}>
        <h1 style={styles.heading}>Menú</h1>
        {user && (
          <div style={styles.userContainer}>
            <h2 style={styles.name}>Nombre: {user.name}</h2>
            <p style={styles.email}>Email: {user.email}</p>
            {/* Otros datos del usuario aquí */}
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    backgroundColor: '#f0e8e8',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContainer: {
    backgroundColor: '#f6f2f2',
    padding: '20px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading: {
    color: '#4c3f58',
    fontSize: '24px',
    marginBottom: '16px',
  },
  userContainer: {
    backgroundColor: '#f6f2f2',
    padding: '16px',
    borderRadius: '8px',
  },
  name: {
    color: '#745a7a',
    fontSize: '18px',
    marginBottom: '8px',
  },
  email: {
    color: '#745a7a',
    fontSize: '14px',
    marginBottom: '8px',
  },
};

export default Menu;
