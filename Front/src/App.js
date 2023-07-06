import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './menu';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <Routes>
        {/* Otras rutas aquí */}
          <Route path="/" element={<Login></Login>} />
          <Route path="/register" component={<Register></Register>} />
          <Route path="/menu/:id" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;
