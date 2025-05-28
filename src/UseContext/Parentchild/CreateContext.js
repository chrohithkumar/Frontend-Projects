import React, { createContext, useState } from 'react';

// Correct position of createContext
const CreateContext = createContext();

const CreateProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <CreateContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </CreateContext.Provider>
  );
};

export { CreateContext, CreateProvider };
