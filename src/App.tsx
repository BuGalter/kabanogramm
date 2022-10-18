import React from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  const appName = 'Kabanogramm';

  return (
    <div className="App">
      <Header appName={ appName }/>
    </div>
  );
}

export default App;
