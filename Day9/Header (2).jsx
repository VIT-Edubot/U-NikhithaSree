import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <h1>Employee Management System</h1>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
    borderRadius: '10px',
    marginBottom: '20px'
  }
};

export default Header;
