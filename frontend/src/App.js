import './App.css';
import React, { useState, useEffect } from 'react';


function App() {

  const [state, setState] = useState('init');

  useEffect(() => {
    async function fetchText() {
      let response = await fetch('http://localhost:5000/');
      console.log(response);
  }
  fetchText()
    setState('init2')
  }, []);



  return (
    <div className="App">
      <div>{state}</div>
    </div>
  );
}

export default App;
