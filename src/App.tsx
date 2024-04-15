import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Calendar } from './Calendar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <div className='body'>
        <nav className='nav-panel'>
          {Array(8).fill(0).map((_, i) => (
            <div key={i} className='menu-item'>
              menu item {i + 1}
            </div>
          ))}
        </nav>
        <div className='content'>
          <Calendar />
        </div>
      </div>
    </div>
  );
}

export default App;
