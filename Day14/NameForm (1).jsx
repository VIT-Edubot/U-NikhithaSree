// src/NameForm.jsx
import { useRef, useState } from 'react';

export default function NameForm() {
  const inputRef = useRef(null); // for DOM reference
  const initialValueRef = useRef(''); // persists across renders
  const [submittedName, setSubmittedName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentName = inputRef.current.value;
    setSubmittedName(currentName);
    if (!initialValueRef.current) {
      initialValueRef.current = currentName;
    }
  };

  return (
    <div>
      <h2>Name Form (useRef)</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} placeholder="Enter your name" />
        <button type="submit">Submit</button>
      </form>
      <p>Submitted Name: {submittedName}</p>
      <p>Initial Name (persisted): {initialValueRef.current}</p>
    </div>
  );
}
