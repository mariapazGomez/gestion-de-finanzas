import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './menu';

function App() {
  return (
    <Router>
      <Routes>
        {/* Otras rutas aquí */}
        <Route path="/menu/:id" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;
