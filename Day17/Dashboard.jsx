// src/Dashboard.jsx
import { useParams } from 'react-router-dom';

function Dashboard() {
  const { id } = useParams();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Feature data for ID: {id}</p>
    </div>
  );
}

export default Dashboard;
