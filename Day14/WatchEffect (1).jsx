// src/WatchEffect.jsx
import { useEffect, useState } from 'react';

export default function WatchEffect() {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (inputValue) {
      console.log('Input value changed:', inputValue);
    }
  }, [inputValue]);

  return (
    <div>
      <h2>Watch Effect (useEffect)</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something"
      />
      <p>Live Input: {inputValue}</p>
    </div>
  );
}
