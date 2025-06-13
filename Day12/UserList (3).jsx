import React, { useEffect, useState } from 'react';

const mockApiUrl = 'https://jsonplaceholder.typicode.com/users';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  // Fetch users on mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(mockApiUrl);
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Timer to update document title
  useEffect(() => {
    const interval = setInterval(() => {
      document.title = `Users Loaded: ${users.length}`;
    }, 5000);

    return () => clearInterval(interval); // Cleanup
  }, [users]);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="user-list-container">
      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      {loading ? (
        <p className="loading">Loading users...</p>
      ) : (
        <ul className="user-list">
          {filteredUsers.map(user => (
            <li key={user.id} className="user-item">
              {user.name} — {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;
