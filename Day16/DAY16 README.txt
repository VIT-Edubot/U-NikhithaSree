How I Set Up ShadCN and Integrated Modal & Button Components
Project Setup
I started by creating a new React project using Vite. This gave me a fast development environment and modern tooling.

Installing ShadCN and Dependencies
I installed the @shadcn/ui package which provides pre-built, accessible UI components. I also ensured Tailwind CSS and its dependencies were installed, as ShadCN relies on Tailwind for styling.

Tailwind CSS Configuration
I configured tailwind.config.js to include all the relevant file paths and added Tailwind's base directives (@tailwind base;, @tailwind components;, and @tailwind utilities;) to my main CSS file (index.css).

Using ShadCN Components
I imported the Dialog (Modal) and Button components from @shadcn/ui.

The Dialog component was used to create a modal window that appears when the user clicks a button.

Inside the modal, I added a title, description, and two buttons — one for canceling and one for confirming the action.

State Management
I used React's useState hook to manage whether the modal is open or closed.

Modal Behavior
The modal closes when:

The Cancel button is clicked.

The user clicks outside the modal.

The Escape key is pressed.

Styling
I customized the modal and button styles using Tailwind CSS utility classes (e.g., bg-gray-800, rounded-lg, etc.).

Confirm Button Action
On clicking the Confirm button, a message is logged to the console or an alert is shown — this simulates a real action like an API call.