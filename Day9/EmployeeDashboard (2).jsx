import React from 'react';
import Header from './Header';

function EmployeeDashboard() {
  const employees = [
    { name: 'Jyoshith', position: 'Full Stack Developer', department: 'Web Development' },
    { name: 'Dhakshayani', position: 'UX Designer', department: 'Design' },
    { name: 'Nikhitha', position: 'Software Engineer', department: 'Engineering' }
  ];

  return (
    <div style={styles.container}>
      <Header />
      <h2 style={styles.subHeader}>Employee List</h2>
      {employees.map((employee, index) => (
        <div key={index} style={styles.card}>
          <p><strong>Name:</strong> {employee.name}</p>
          <p><strong>Position:</strong> {employee.position}</p>
          <p><strong>Department:</strong> {employee.department}</p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#1e1e1e',
    minHeight: '100vh',
    padding: '30px',
    color: '#fff',
    fontFamily: 'Arial, sans-serif'
  },
  subHeader: {
    marginBottom: '20px'
  },
  card: {
    backgroundColor: '#f9f9f9',
    color: '#000',
    padding: '15px',
    borderRadius: '8px',
    marginBottom: '15px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
  }
};

export default EmployeeDashboard;
