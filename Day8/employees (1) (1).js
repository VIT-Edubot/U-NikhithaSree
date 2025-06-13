// 1. Define the Employee Data Array
let employees = [
    { id: 1, name: "Anand", position: "Software Engineer", department: "IT", isActive: true },
    { id: 2, name: "Nani", position: "Product Manager", department: "Product", isActive: false },
    { id: 3, name: "Charan", position: "UX Designer", department: "Design", isActive: true },
    { id: 4, name: "Teja", position: "DevOps Engineer", department: "IT", isActive: false },
];
  
  let editId = null;
  
  // 2. Display Employees
  function displayEmployees(employeeArray) {
    const employeeListDiv = document.getElementById('employee-list');
    employeeListDiv.innerHTML = '';
  
    employeeArray.forEach(employee => {
      const employeeDiv = document.createElement('div');
      employeeDiv.classList.add('employee-card');
  
      employeeDiv.innerHTML = `
        <h2>${employee.name}</h2>
        <p><strong>Position:</strong> ${employee.position}</p>
        <p><strong>Department:</strong> ${employee.department}</p>
        <p><strong>Status:</strong> ${employee.isActive ? 'Active' : 'Inactive'}</p>
        <button class="toggle-btn" onclick="toggleStatus(${employee.id})">Toggle Status</button>
        <button class="toggle-btn" onclick="editEmployee(${employee.id})" style="background-color: #ffc107;">Edit</button>
        <button class="toggle-btn" onclick="deleteEmployee(${employee.id})" style="background-color: #e74c3c;">Delete</button>
      `;
  
      employeeListDiv.appendChild(employeeDiv);
    });
  }
  
  // 3. Filter Active Employees
  function getActiveEmployees() {
    return employees.filter(employee => employee.isActive);
  }
  
  // 4. Sort Employees by Name
  function getSortedEmployees(employeeArray) {
    return employeeArray.slice().sort((a, b) => a.name.localeCompare(b.name));
  }
  
  // 5. Map Employee Names
  function logEmployeeNames(employeeArray) {
    const employeeNames = employeeArray.map(employee => employee.name);
    console.log(employeeNames);
  }
  
  // 6. Toggle Employee Status
  function toggleStatus(employeeId) {
    const employee = employees.find(emp => emp.id === employeeId);
    if (employee) {
      employee.isActive = !employee.isActive;
      renderAll();
    }
  }
  
  // 7. Add or Edit Employee (form handler)
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('employee-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const name = document.getElementById('name').value.trim();
      const position = document.getElementById('position').value.trim();
      const department = document.getElementById('department').value.trim();
  
      if (!name || !position || !department) return;
  
      if (editId !== null) {
        // Edit existing
        const index = employees.findIndex(emp => emp.id === editId);
        if (index > -1) {
          employees[index].name = name;
          employees[index].position = position;
          employees[index].department = department;
        }
        editId = null;
        document.getElementById('submit-btn').textContent = 'Add Employee';
      } else {
        // Add new
        const newEmployee = {
          id: Date.now(),
          name,
          position,
          department,
          isActive: true
        };
        employees.push(newEmployee);
      }
  
      form.reset();
      renderAll();
    });
  });
  
  // 8. Edit an employee
  function editEmployee(id) {
    const employee = employees.find(emp => emp.id === id);
    if (employee) {
      document.getElementById('name').value = employee.name;
      document.getElementById('position').value = employee.position;
      document.getElementById('department').value = employee.department;
  
      editId = id;
      document.getElementById('submit-btn').textContent = 'Update Employee';
    }
  }
  
  // 9. Delete an employee
  function deleteEmployee(id) {
    employees = employees.filter(emp => emp.id !== id);
    renderAll();
  }
  
  // Helper function to render everything
  function renderAll() {
    const activeEmployees = getActiveEmployees();
    const sortedEmployees = getSortedEmployees(activeEmployees);
    displayEmployees(sortedEmployees);
    logEmployeeNames(sortedEmployees);
  }
  
  // Initial render
  renderAll();