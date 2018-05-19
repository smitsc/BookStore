import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Store from './components/Store';
import ShowIt from './components/ShowIt';
import Navbar from './components/CustomNavbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
          <Route path="/store" component={Store} />
          <Route path="/show" component={ShowIt} />          
        </div>
      </Router>
    );
  }
}

export default App;
