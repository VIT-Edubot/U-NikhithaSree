// src/FocusInput.jsx
import { useRef } from 'react';

export default function FocusInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <h2>Focus Input (useRef + DOM)</h2>
      <input type="text" ref={inputRef} placeholder="Click button to focus" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}
