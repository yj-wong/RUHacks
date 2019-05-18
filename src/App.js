import React from 'react';
import './App.css';
import Menu from './Navbar/Menu.js';
import Topbar from './Navbar/Topbar.js';
import Products from './Body/Products.js';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Menu />
    <header className="App-header">
      <div id="body">
        <Products />
      </div>
    </header>
    </div>
  );
}

export default App;
