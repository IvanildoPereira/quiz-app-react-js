import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Heading from './components/Heading';
import { defaultTheme } from './theme/themeColors';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">
        <header className="App-header">
          <Heading variant="h1" level={1}>
            Quiz APP
          </Heading>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
