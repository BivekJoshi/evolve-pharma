import React, { useMemo } from 'react';
import AppRoute from './routes/AppRoute';
import { themeSettings } from './theme/theme';
import { ThemeProvider, createTheme } from '@mui/material';

const App = () => {
  const theme = useMemo(() => createTheme(themeSettings()));
  return (
    <ThemeProvider theme={theme}>
      <AppRoute />
    </ThemeProvider>
  );
}

export default App;
