// Employee Data - Array of Objects
let employees = [
    { id: 1, name: "Anand", position: "Software Engineer", department: "IT", isActive: true },
    { id: 2, name: "Nani", position: "Product Manager", department: "Product", isActive: false },
    { id: 3, name: "Charan", position: "UX Designer", department: "Design", isActive: true },
    { id: 4, name: "Teja", position: "DevOps Engineer", department: "IT", isActive: false },
];

// Function to Render Employees in the DOM
function displayEmployees(employeeArray) {
    const employeeList = document.getElementById("employee-list");
    employeeList.innerHTML = ""; // Clear previous entries

    employeeArray.forEach(employee => {
        const employeeCard = document.createElement("div");
        employeeCard.classList.add("employee-card");

        employeeCard.innerHTML = `
            <div>
                <p><strong>${employee.name}</strong></p>
                <p>${employee.position} - ${employee.department}</p>
                <p class="${employee.isActive ? "status-active" : "status-inactive"}">
                    ${employee.isActive ? "Active" : "Inactive"}
                </p>
            </div>
            <button class="toggle-btn" onclick="toggleStatus(${employee.id})">Toggle Status</button>
        `;

        employeeList.appendChild(employeeCard);
    });
}

// Function to Toggle Employee Status
function toggleStatus(id) {
    employees = employees.map(emp =>
        emp.id === id ? { ...emp, isActive: !emp.isActive } : emp
    );
    displayEmployees(employees);
}

// Function to Filter Active Employees
function filterActiveEmployees() {
    const activeEmployees = employees.filter(emp => emp.isActive);
    displayEmployees(activeEmployees);
}

// Function to Sort Employees by Name
function sortEmployeesByName() {
    employees.sort((a, b) => a.name.localeCompare(b.name));
    displayEmployees(employees);
}

// Event Listeners for Buttons
document.getElementById("filter-active-btn").addEventListener("click", filterActiveEmployees);
document.getElementById("sort-name-btn").addEventListener("click", sortEmployeesByName);

// Initial Render
displayEmployees(employees);

// Map Function Example - Display Employee Names in Console
const employeeNames = employees.map(emp => emp.name);
console.log("Employee Names:", employeeNames);
