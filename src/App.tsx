import React from 'react'
import { css, jsx } from '@emotion/react'

// Components
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer';
import useDarkMode from './useDarkMode';

function App() {
  const { theme, toggleTheme } = useDarkMode();
  const themeStyles = theme === 'light'? {
    backgroundColor: '#eee',
    color: '#000'
  }: {
    backgroundColor: '#171616',
    color: '#fff'
  }
  return (
    <div 
      className="App"
      style={themeStyles}
      >
      <Header theme={theme} toggleTheme={toggleTheme}/>
      <Main theme={theme}/>
      <Footer />
    </div>
  );
}

export default App;
