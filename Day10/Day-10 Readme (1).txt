# Employee Dashboard - LaunchDarkly Assignment

##  Props and Component Composition

###  How did you pass props to child components?
We passed props from EmployeeDashboard to each EmployeeCard using JSX. Each card receives name, position, and department.

###  How does component composition help?
Component composition allows us to build reusable, modular pieces of UI like EmployeeCard, Header, and EmployeeDashboard. This leads to:
- Cleaner code
- Easier maintenance
- Improved scalability

###  Challenges faced
- Styling multiple cards with proper layout
- Managing prop data cleanly

---

##  Getting Started

bash
npm create vite@latest react-employee-dashboard --template react
cd react-employee-dashboard
npm install
npm run dev, # Employee Management System