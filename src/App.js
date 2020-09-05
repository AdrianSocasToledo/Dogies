import React, { useState } from 'react';
import './App.css';
import 'react-widgets/dist/css/react-widgets.css';

import Header from './components/Templates/Header'
import Galery from './components/Galery/Galery'

function App() {

  const [selectedBreed,setSelectedBreed] = useState("")

  const handleSelectedBreed = (selectedBreed) => {
    setSelectedBreed(selectedBreed);
  }

  
  return (
    <div className="App">
      <div>
        <Header onSelectedBreed={handleSelectedBreed} className="Header"/>
        <Galery selectedBreed={selectedBreed} />
      </div>
      
    </div>
  );
}

export default App;
