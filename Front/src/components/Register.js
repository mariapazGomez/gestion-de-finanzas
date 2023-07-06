import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [_id, setId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/register', { name, email, password, _id });
      console.log(response.data);
      navigate(`/menu/${_id}`);
    } catch (error) {
      console.error(error);
    }
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

  return (
      <div style={styles.pageContainer}>
        <div style={styles.menuContainer}>
          <h2 style={styles.heading}>Register</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formId">
              <Form.Label>RUT</Form.Label>
              <Form.Control
                  type="id"
                  placeholder="Enter id"
                  value={_id}
                  onChange={(e) => setId(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

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
                Register
              </Button>
            </div>
          </Form>
        </div>
      </div>
  );
};
export default Register;
