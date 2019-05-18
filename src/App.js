import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
// eslint-disable-next-line
import Menu from './Navbar/Menu.js';
import Topbar from './Navbar/Topbar.js';
import Home from './Body/Home.js';
import Products from './Body/Products.js';
import Features from './Body/Feature.js';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Menu />
      <div id="body" className="App-header">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/features" component={Features} />
            <Route exact path="/products" component={Products} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
