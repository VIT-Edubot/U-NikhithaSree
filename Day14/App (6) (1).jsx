// src/App.jsx
import React from 'react';
import NameForm from './NameForm';
import WatchEffect from './WatchEffect';
import WatchInput from './WatchInput';
import FocusInput from './FocusInput';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>React useRef, useEffect, and useWatch Demo</h1>
      <hr />
      <NameForm />
      <hr />
      <WatchEffect />
      <hr />
      <WatchInput />
      <hr />
      <FocusInput />
    </div>
  );
}

export default App;
