// src/Home.jsx
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Feature Management Dashboard</p>
      <nav>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/dashboard/101">Go to Dashboard for Feature 101</Link></li>
          <li><Link to="/dashboard/202">Go to Dashboard for Feature 202</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
