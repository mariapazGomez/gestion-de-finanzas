import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './menu';
import Graphs from './graphs';

function App() {
  return (
    <Router>
      <Routes>
        {/* Otras rutas aquí */}
        <Route path="/menu/:id" element={<Menu />} />
        <Route path="/statistics/:id" element={<Graphs />} />

      </Routes>
    </Router>
  );
}

export default App;
