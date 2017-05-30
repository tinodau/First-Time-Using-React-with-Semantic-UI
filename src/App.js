import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import NavbarMenu from './components/menu/navbar.js'
import MainContainer from './components/container/container.js'
import Footer from './components/footer/footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
			<NavbarMenu />
			<MainContainer/>
			<Footer/>
      </div>
    );
  }
}

export default App;
