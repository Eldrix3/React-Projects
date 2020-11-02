import React from 'react';
import './App.css';
import {useState} from 'react';
import NavbarComp from "./components/Navbar.js";

const App = () => {

  const [item, searchItem] = useState('');
  

  const handleChange = (e) => {
    searchItem(e.target.value);
  }

 

  return <NavbarComp handleChange={handleChange} item={item}  />;

}

export default App;