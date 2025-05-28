import React, { useContext } from 'react';
import { CreateContext } from './CreateContext';

export default function UseContext() {
  // Correct capitalization of toggleTheme
  const { theme, toggleTheme } = useContext(CreateContext);

  return (
    <div>
      <p>Use Context</p>
      <p>Present Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
}
