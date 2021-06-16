import React from 'react'
import Pins from './Components/Pins';
import Navbar from './Components/NavBar'
import './styles.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="pins-container">
        <Pins></Pins>
      </div>
    </div>
  );
}

export default App;
