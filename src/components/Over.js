import React from 'react';
import './Over.css';

function Over({ onClick }) {
  return (
    <div className="overlay" onClick={onClick}>
      <div className="overlay-content">
        <h1>Welcome!</h1>
        <p>The website is under construction.</p>
        <p>But you can touch the menu or scroll ↑↓ to move.</p>
        <p>Click to continue</p>
        <p>---</p>
        <h1>¡Bienvenido!</h1>
        <p>El sitio está en construcción.</p>
        <p>Por ahora puedes ver el menu o hacer scroll ↑↓ para ponerte en movimiento.</p>
        <p>Haz click para continuar.</p>
      </div>
    </div>
  );
}

export default Over;