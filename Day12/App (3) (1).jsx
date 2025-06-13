import React from 'react';
import UserList from './UserList';
import './styles.css';

function App() {
  return (
    <div className="app-container">
      <h1>LaunchDarkly User Dashboard</h1>
      <UserList />
    </div>
  );
}

export default App;
