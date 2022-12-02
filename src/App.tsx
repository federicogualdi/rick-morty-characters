import './App.css';
import React from 'react';
import CharacterList from './characters/characterList';
import Header from './shared/header/header';

function App() {
  return (
    <>
      {Header()}
      {CharacterList()}
    </>
  );
}

export default App;
