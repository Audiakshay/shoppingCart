import React, { createContext, useState } from 'react';

export const CounterContext = createContext();

function ContextProvider({ children }) {
  const [counter, setcounter] = useState(10);
  return (
    <CounterContext.Provider value={{ counter, setcounter }}>
      {children}
    </CounterContext.Provider>
  );
}

export default ContextProvider;
