import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { GlobalStyles } from './styles/global';

import * as theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme['light']}>
      <GlobalStyles />
      <Header />
      <Home />
    </ThemeProvider>
  );
}

export default App;
