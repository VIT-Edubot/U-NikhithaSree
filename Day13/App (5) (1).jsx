import React from 'react';
import { ThemeProvider } from './ThemeContext';
import UserList from './UserList';
import './styles.css';

function App() {
  return (
    <ThemeProvider>
      <UserList />
    </ThemeProvider>
  );
}

export default App;
