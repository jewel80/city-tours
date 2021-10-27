import React, { Component } from 'react';
import './App.scss';
import './components/Navbar/Navbar';
import Navbar from './components/Navbar/Navbar';
import TourList from './components/TourList/index';


class App extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <TourList />
      </main>
    )
  }
}


export default App;
