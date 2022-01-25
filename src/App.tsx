import React from 'react';
import { Header } from './components/Header';
import { Home } from './pages/Home';

import './styles/index.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
