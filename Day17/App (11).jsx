// src/App.jsx
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';

function App() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/about">About</Link>
        </nav>
      </header>
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard/:id" element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
