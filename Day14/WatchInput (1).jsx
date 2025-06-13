// src/WatchInput.jsx
import { useEffect, useRef, useState } from 'react';

// Custom useWatch Hook
function useWatch(value) {
  const previousValue = useRef(value);
  const [watchedValue, setWatchedValue] = useState(value);

  useEffect(() => {
    if (previousValue.current !== value) {
      previousValue.current = value;
      setWatchedValue(value);
    }
  }, [value]);

  return watchedValue;
}

export default function WatchInput() {
  const [input, setInput] = useState('');
  const watched = useWatch(input);

  return (
    <div>
      <h2>useWatch Hook</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Watch this input"
      />
      <p>Watched Value: {watched}</p>
    </div>
  );
}
