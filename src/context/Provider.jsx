import React, { useState } from 'react';
import context from '../context/context';

function Provider({ children }) {
  const [stateA, setStateA] = useState('initialStateA');
  const contextValue = {
    stateA,
    setStateA,
  };

  return (
    <context.Provider value={contextValue}>
      {children}
    </context.Provider>
  );
}

export default Provider;