import './App.css';
import React, { useState, useEffect } from 'react';


function App() {

  const [state, setState] = useState('init');

  useEffect(() => {

    setState('init2')
  }, []);

      async function fetchText() {
        let response = await fetch('http://localhost:5000/');
        // let response = await fetch('https://swapi.dev/api/people/1/');
        console.log(response.json()) 
    }
    fetchText()



  return (
    <div className="App">
      <div>{state}</div>
    </div>
  );
}

export default App;
