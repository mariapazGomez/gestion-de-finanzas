import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/login', { email, password });
      console.log(response.data);

      // Redireccionar a la ruta /menu/:id con el ID del usuario
      navigate(`/menu/${response.data.id}`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
      <div style={styles.pageContainer}>
        <div style={styles.menuContainer}>
          <h2 style={styles.heading}>Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <div style={styles.buttonContainer}>
              <Button variant="primary" type="submit" style={styles.button}>
                Login
              </Button>
              <Button variant="link" onClick={handleRegister} style={styles.registerButton}>
                Not registered? Register here
              </Button>
            </div>
          </Form>
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
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '16px',
  },
  button: {
    backgroundColor: '#4c3f58',
    color: '#ffffff',
    padding: '8px 16px',
    borderRadius: '4px',
  },
};
export default Login;
