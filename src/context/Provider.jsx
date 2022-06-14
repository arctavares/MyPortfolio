import React, { useState } from 'react';
import context from '../context/context';

function Provider({ children }) {
  const [Nav, setNav] = useState('hide');
  const contextValue = {
    Nav,
    setNav,
  };

  return (
    <context.Provider value={contextValue}>
      {children}
    </context.Provider>
  );
}

export default Provider;