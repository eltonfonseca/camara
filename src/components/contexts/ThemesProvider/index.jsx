import React, { createContext, useContext } from 'react';
import usePersistState from 'utils/persist';
import { ThemeProvider } from 'styled-components';
import { light, dark } from 'utils/themes';

const ThemesContext = createContext();

export default function ThemesProvider({ children }) {
  const [theme, updateTheme] = usePersistState('theme', light);

  function toogleTheme() {
    updateTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemesContext.Provider value={{
      themeHook: { theme, toogleTheme },
    }}
    >
      <ThemeProvider theme={theme}>
        { children }
      </ThemeProvider>
    </ThemesContext.Provider>
  );
}

export function useThemes() {
  const context = useContext(ThemesContext);

  if (!context) {
    throw new Error('useThemes must be used within ThemesProvider');
  }

  return context;
}
