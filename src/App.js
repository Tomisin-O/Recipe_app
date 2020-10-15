import React, {useEffect, useState } from 'react';
import './App.css';


function App() {
  const APP_ID = "165be659";
  const APP_KEY = "66153f4a87d0c67abcf2a11be725d17c	";

  
  useEffect(() => {
    getRecipes ();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data);
    
  }
  return (
    <div className="App">
      <h1 className="App">Hello App</h1>
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default App;
