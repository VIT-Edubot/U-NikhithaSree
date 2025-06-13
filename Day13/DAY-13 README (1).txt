# React Theme Dashboard

This project demonstrates how to use React hooks (`useContext`, `useMemo`, and `useCallback`) to optimize performance and manage global state in a user dashboard. The dashboard includes a theme toggle (light/dark mode), a user search filter, and optimized re-renders for child components.

## Features

- Global Theme Management: Toggle between light and dark modes using React's `useContext` and `useState`.
- Optimized List Filtering: Efficiently filter the list of users with `useMemo` to avoid unnecessary recalculations.
- Memoized Event Handlers: Prevent unnecessary re-renders of child components with `useCallback`.

## How it Works

### 1. Global Theme Context with `useContext`:
   - The theme is managed globally using the `ThemeContext` and the `useTheme` hook. The `ThemeProvider` wraps the main `App` component, enabling theme toggling between light and dark modes. This context allows any child component to access and update the theme state.

### 2. Optimizing List Filtering with `useMemo`:
   - A list of users is filtered by name using the `useMemo` hook. This ensures that the filtered list is only recalculated when the `searchTerm` or `users` list changes. By memoizing the filtered list, we avoid recalculating it on every render, improving performance.

### 3. Memoizing Event Handlers with `useCallback`:
   - `useCallback` is used to memoize the event handler for the search input. This prevents unnecessary re-renders of child components that might depend on this function, improving performance.


