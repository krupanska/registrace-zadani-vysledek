import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Registration from './components';

const App = () => {
  return (
    <div className="container">
      <header>
        <div className="logo" />
        <h1>Webová aplikace</h1>
      </header>
      <main>
        <p>Registration form</p>
        <Registration/>
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
