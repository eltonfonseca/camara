import React, { createContext, useState, useContext } from 'react';

const DeputadosContext = createContext();

export default function DeputadosProvider({ children }) {
  const [deputados, updateDeputados] = useState([]);
  const [deputado, updateDeputado] = useState(null);

  return (
    <DeputadosContext.Provider value={{
      deputadosHook: { deputados, updateDeputados },
      deputadoHook: { deputado, updateDeputado },
    }}
    >
      { children }
    </DeputadosContext.Provider>
  );
}

export function useDeputados() {
  const context = useContext(DeputadosContext);

  if (!context) {
    throw new Error('useDeputados must be used within DeputadosProvider');
  }

  return context;
}
