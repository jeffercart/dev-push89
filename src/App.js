import React, { useState } from 'react';
import Pushi from './components/pushi'; // Importa el componente pushi.js
import Menu from './components/Menu';
import UnderDer from './components/Under-derecha';
import Over from './components/Over';
import './App.css';
import logo from './components/img/logo.png'

function App() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  return (
    <div className="App">
      <Menu />
          <img 
            src={ logo } 
            alt={ isOverlayVisible ? 'Ocultar Instrucciones' : 'Mostrar Instrucciones' }
            onClick={ toggleOverlay }
            className="toggle-button"
            style={ { cursor: 'pointer' } }
          />
          { isOverlayVisible && <Over onClick={toggleOverlay} /> }
       
       <Pushi /> 
       <UnderDer />

    </div>

  );
}

export default App;
