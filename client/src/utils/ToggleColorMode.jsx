import React, { useState, useMemo, createContext, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export const ColorModeContext = createContext();

function ToggleColorMode({ children }) {
  const [mode, setMode] = useState('light');

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.className = mode;
  }, [mode]);


  const theme = useMemo(() => createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // Light mode palette
            primary: {
              main: '#ffbbbB', // pink
            },
            background: {
              default: '#ffe3e3', // very light pink
              paper: '#ffdbdb', // light pink for paper elements
            },
            text: {
              primary: '#733838', // dark pink text
              secondary: '#a35656', // pink text
            },
          }
        : {
            // Dark mode palette (keep as is)
          }),
    },
  }), [mode]);



  return (
    <ColorModeContext.Provider value={{ mode, setMode, toggleColorMode }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default ToggleColorMode;