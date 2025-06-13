# Web_Development_Crash_Course_Day_14_Assignment
# React useRef, useEffect, and useWatch Assignment

## Overview
This project demonstrates advanced state and DOM management in React using:

- `useRef` for persistent values and direct DOM manipulation.
- `useEffect` to watch and respond to state changes.
- A custom `useWatch` hook to observe specific state changes efficiently.

## Files and Functionality

### `NameForm.jsx`
- Uses `useRef` to persist the initial name input across renders.
- Demonstrates form input and value retention.

### `WatchEffect.jsx`
- Uses `useEffect` to implement a custom "watch" behavior.
- Logs name changes whenever the input value updates.

### `WatchInput.jsx`
- Implements a custom `useWatch` hook.
- Tracks and updates watched value only when it changes.

### `FocusInput.jsx`
- Demonstrates direct DOM interaction by focusing the input field using `useRef`.

## Learning Outcomes
- Manage values persistently across renders without causing re-renders.
- Respond to specific state changes using `useEffect`.
- Track specific input changes using a custom `useWatch` hook.
- Directly interact with DOM elements using `useRef`.

## Setup
```bash
npm create vite@latest react-watch-effect-demo --template react
cd react-watch-effect-demo
npm install
npm run dev
