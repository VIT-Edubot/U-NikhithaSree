// src/EmployeeDashboard.jsx
import React from 'react';
import EmployeeCard from './EmployeeCard';
import Header from './Header';

const EmployeeDashboard = () => {
  const employees = [
    {name: 'Jyoshith', position: 'Full Stack Developer', department: 'Web Development' },
    {name: 'Dhakshayani', position: 'UX Designer', department: 'Design' },
    {name: 'Nikhitha', position: 'Software Engineer', department: 'Engineering' }
    
  ];

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginTop: '20px' }}>
        {employees.map((employee, index) => (
          <EmployeeCard
            key={index}
            name={employee.name}
            position={employee.position}
            department={employee.department}
          />
        ))}
      </div>
    </div>
  );
};

export default EmployeeDashboard;
