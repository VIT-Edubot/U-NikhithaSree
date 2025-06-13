// src/EmployeeCard.jsx
import React from 'react';

const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '15px',
  width: '200px',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
};

const EmployeeCard = ({ name, position, department }) => {
  return (
    <div style={cardStyle}>
      <h3>{name}</h3>
      <p><strong>Position:</strong> {position}</p>
      <p><strong>Department:</strong> {department}</p>
    </div>
  );
};

export default EmployeeCard;
