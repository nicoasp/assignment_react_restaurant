import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import NavBar from './NavBar';
import Header from './Header';
import ReservationForm from './ReservationForm';
import Menu from './Menu';
import GoogleMap from './Map';


const items = [
  {
    name: "Jamon Iberico",
    description: 'Racion de jamon iberico de bellota',
    price: '$15'
  },
  {
    name: "Dorada a la sal",
    description: 'Dorada fresca cocinada al horno al tradicional estilo a la sal',
    price: '$25'
  },
  {
    name: "Thick juicy cheeseburger",
    description: 'It is thick. It is juicy. It is a burger.',
    price: '$69'
  },
  "notanobject"
];

const address = "Spalenring 15 Basel"

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <Header />
          <ReservationForm />
          <Menu items={items} />
          <GoogleMap address={address} />
        </div>
      </div>
    );
  }
}

export default App;
