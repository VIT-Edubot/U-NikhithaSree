import React, { useState, useMemo, useCallback } from 'react';
import { useTheme } from './ThemeContext';

// Sample mock data
const mockUsers = [
  { id: 1, name: 'Nikhitha' },
  { id: 2, name: 'Sunitha' },
  { id: 3, name: 'Subbu' },
  { id: 4, name: 'Jyoshith' },
  { id: 5, name: 'Dhakshayani' },
];

// Memoized child component
const UserItem = React.memo(({ user, onClick }) => {
  console.log(`Rendering ${user.name}`);
  return <li onClick={() => onClick(user.name)}>{user.name}</li>;
});

function UserList() {
  const { theme, toggleTheme } = useTheme();
  const [search, setSearch] = useState('');

  // Memoized filter logic
  const filteredUsers = useMemo(() => {
    return mockUsers.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  // Memoized event handler
  const handleUserClick = useCallback((name) => {
    alert(`User clicked: ${name}`);
  }, []);

  return (
    <div className={`container ${theme}`}>
      <button onClick={toggleTheme} className="theme-toggle">
        Toggle Theme ({theme})
      </button>

      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <ul>
        {filteredUsers.map(user => (
          <UserItem key={user.id} user={user} onClick={handleUserClick} />
        ))}
      </ul>
    </div>
  );
}

export default UserList;
