# Employee Management System

This project is a simple React-based dashboard to display employee information. It was built as an assignment for the "Introduction to React & JSX" module at LaunchDarkly.

## Features

- JSX syntax for dynamic rendering.
- Reusable components (`Header`, `EmployeeDashboard`).
- Basic inline styling for layout and readability.

## Components

1. Header.jsx
Displays a static header with the title.

2. EmployeeDashboard.jsx
- Contains hardcoded employee data (name, position, department).
- Uses JSX and `.map()` to render the list.

3. App.jsx
Top-level component that renders the dashboard.

## What I Learned

- JSX allows writing HTML-like syntax inside JavaScript.
- React components can be used to organize code.
- Using `.map()` to dynamically render lists.
- Adding styles directly in components using objects.

## How to Run

```bash
npm install
npm run dev

## Challenges Faced

- Understanding JSX syntax and embedding JavaScript expressions.

- Rendering dynamic content with .map() and ensuring unique keys.

- Organizing components effectively.

- Styling the layout using inline styles.
