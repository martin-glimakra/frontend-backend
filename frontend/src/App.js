import './App.css';
import React, { useState, useEffect } from 'react';


function App() {

  const [state, setState] = useState('init');

  useEffect(() => {
    fetchText()
  }, []);

      async function fetchText() {
        let response = await fetch('http://localhost:5000/');
        let data = await response.json()
        console.log(data)
        setState(data.msg)
    }
    



  return (
    <div className="App">
      <div>{state}</div>
    </div>
  );
}

export default App;
