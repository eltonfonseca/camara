import React, { createContext, useContext, useState } from 'react';

const PartidosContext = createContext();

export default function PartidosProvider({ children }) {
  const [partidos, updatePartidos] = useState([]);
  const [partido, updatePartido] = useState(null);

  return (
    <PartidosContext.Provider value={{
      partidosHook: { partidos, updatePartidos },
      partidoHook: { partido, updatePartido },
    }}
    >
      { children }
    </PartidosContext.Provider>
  );
}

export function usePartidos() {
  const context = useContext(PartidosContext);

  if (!context) {
    throw new Error('usePartidos must be used within PartidosProvider');
  }

  return context;
}
