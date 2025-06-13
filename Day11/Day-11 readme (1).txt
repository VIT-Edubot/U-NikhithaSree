# Web_Development_Crash_Course_Day_11_Assignment
# User Dashboard with State Management

## Overview
This React project demonstrates basic state management using the `useState` hook. It allows users to:
- Change their name.
- Toggle between active/inactive status.
- Switch between light and dark themes.

## How useState Is Used
- `name` is managed using `useState('Nikhitha')`, and updates in real-time via an input field.
- `status` is a boolean toggled by a button.
- `theme` is a string (`'light'` or `'dark'`) and persisted to `localStorage` using `useEffect`.

## User Interactions
- Name Input: Updates the state and display live.
- Status Toggle: Updates the label and optionally shows an inactive warning message.
- Theme Toggle: Dynamically changes styles and persists preference to `localStorage`.

## Challenges
- Remembering the theme between reloads required integrating `localStorage` with an initializer function and syncing updates using `useEffect`.

## Run the Project
```bash
npm install
npm run dev
