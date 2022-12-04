import './App.css';
import React from 'react';
import Header from './shared/header/Header';
import Characters from './characters/Characters';

function App() {
  return (
    <>
      {Header()}
      {Characters()}
    </>
  );
}

export default App;
