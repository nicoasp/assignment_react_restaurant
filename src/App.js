import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import NavBar from './NavBar';
import Header from './Header';

const mainHeader = {
  image: {
    url: 'restaurant.jpg',
    alt: 'A lovely restaurant'
  },
  headline: 'A Beautiful Restaurant',
  tagline: 'This is a website about a beautiful restaurant'
};

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Header props={mainHeader} />
      </div>
    );
  }
}

export default App;
