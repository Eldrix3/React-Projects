import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
const App = () => {
  const [theJoke, setJoke] = useState([])
  useEffect(() => {
    const fetchItems = async () =>{
      const result = await axios(`https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist`);
      console.log(result.data);
      setJoke(result.data);
    }
    fetchItems();

  }, [])
  return (<React.Fragment>
    
    
  </React.Fragment>)
}

export default App;