import React, { useState, useEffect } from 'react';

function UserDashboard() {
  const [name, setName] = useState("Nikhitha");
  const [status, setStatus] = useState(true);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleStatus = () => setStatus(prev => !prev);
  const toggleTheme = () => setTheme(prev => (prev === "light" ? "dark" : "light"));

  return (
    <div className={`dashboard ${theme}`}>
      <h1>User Dashboard</h1>
      
      <div className="user-info">
        <label>
          Name:
          <input 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <p><strong>Current Name:</strong> {name}</p>
        
        <button onClick={toggleStatus}>
          Set as {status ? "Inactive" : "Active"}
        </button>
        <p>Status: <strong>{status ? "Active" : "Inactive"}</strong></p>
        {!status && <p className="inactive-msg">Your account is currently inactive. Please update your status.</p>}
      </div>

      <div className="theme-toggle">
        <button onClick={toggleTheme}>Toggle Theme</button>
        <p><strong>Theme:</strong> {theme}</p>
      </div>
    </div>
  );
}

export default UserDashboard;
