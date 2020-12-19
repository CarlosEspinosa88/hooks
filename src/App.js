
import React, { useState } from 'react';
import Header from './components/header'
import CharactersScreen from './screens/CharactersScreen';
import {theme} from './context';


function App() {
  const [dark, setDark] = useState(false);
  const ThemeContextProvider = theme.Provider

  return (
    <ThemeContextProvider value={{dark, setDark}}>
      <Header />
      <CharactersScreen />
    </ThemeContextProvider>
  );
}

export default App;
