# Web_Development_Crash_Course_Day_12_Assignment
# LaunchDarkly User Dashboard - React Assignment

##  Overview
This project is a user dashboard built with React to demonstrate useEffect for:
- Fetching user data from a mock API
- Managing side effects like timers
- Cleaning up intervals on unmount
- Filtering users with a search input

##  How useEffect is Used
1. Data Fetching: useEffect fetches data from `https://reqres.in/api/users?page=1` once when the component mounts.
2. Side Effect (Timer): Another useEffect sets up a timer to update the document title every 5 seconds to reflect the number of users loaded.
3. Cleanup: The interval is cleared in the cleanup function of useEffect to prevent memory leaks when the component unmounts.

##  Bonus: Search Functionality
An input field allows users to filter the list of users by name as they type.

##  Styling
Basic styling is applied using `styles.css`:
- Clean layout with responsive search
- Clear loading indicator
- User avatars and email display

##  Challenges and Solutions
- API structure: The `reqres.in` API returns users inside a `data` field, which required extracting properly.
- Timer cleanup: Ensured cleanup using `return () => clearInterval(...)` in useEffect.
- Filtering: Used `.filter()` with a case-insensitive search on `first_name` + `last_name`.

---

##  Run the App

```bash
npm create vite@latest react-user-dashboard --template react
cd react-user-dashboard
npm install
npm run dev
