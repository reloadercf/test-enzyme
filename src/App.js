import React from 'react';
import './App.css';
import Titulo from './components/Titulo'
import SubTitulo from './components/SubTitulo'

function App() {
  return (
    <div className="App">
      <Titulo eltitulo="Un titulo normal" />
      <SubTitulo />
      <p>Algún cambio</p>
    </div>
  );
}

export default App;
