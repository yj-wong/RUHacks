import React from 'react';
import './App.css';
// eslint-disable-next-line
import Menu from './Navbar/Menu.js';
import Topbar from './Navbar/Topbar.js';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Menu />
    </div>
  );
}

export default App;
