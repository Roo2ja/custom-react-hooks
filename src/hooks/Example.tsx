import React, { useState } from "react";
import { useDebounce } from "./useDebounce";
import { useThrottle } from "./useThrottle";

export default function Example() {
  const [text, setText] = useState("");
  const debouncedText = useDebounce(text, 500);
  const throttledText = useThrottle(text, 1000);

  return (
    <div>
      <h2>Custom Hooks Example</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>Debounced Value: {debouncedText}</p>
      <p>Throttled Value: {throttledText}</p>
    </div>
  );
}
