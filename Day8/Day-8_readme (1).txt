# Web_Development_Crash_Course_Day_8_Assignment
Day 8

LaunchDarkly Employee Portal JavaScript Implementation
This project utilizes JavaScript for dynamic employee management, focusing on DOM manipulation and higher-order functions. Key concepts and implementation details are summarized below:

Key Concepts:

Arrays and Objects:
Employee data is maintained in an array of objects, where each object contains properties such as id, name, position, department, and isActive.

DOM Manipulation:
JavaScript dynamically generates employee cards, displaying relevant details and enabling status toggling.

Higher-Order Functions:

filter() – Filters and displays only active employees.

sort() – Sorts employees alphabetically by their names.

map() – Logs or transforms employee names.

Event Listeners:
The "Toggle Status" button updates the activity status of an employee and triggers a re-render of the list.

Key Functions:

displayEmployees():
Dynamically renders the employee cards on the page.

getActiveEmployees():
Returns a list of employees whose isActive property is true.

getSortedEmployees():
Sorts the employees alphabetically by name before display.

toggleStatus():
Toggles the isActive status of the selected employee and updates the DOM accordingly.

Challenges:

Dynamic DOM Updates:
Ensured that the employee list is completely re-rendered whenever a status is toggled.

Sorting and Filtering:
Resolved order inconsistencies by applying sorting before filtering for accurate and predictable results.