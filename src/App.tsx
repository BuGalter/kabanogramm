import React from 'react';
import Header from './components/Header';

export interface IApp {
  appName: string
};

function App() {
  const app: IApp = {
    appName: 'Kabanogramm',
  }

  return (
    <div className="App">
      <Header appName={ app.appName }/>
    </div>
  );
}

export default App;
