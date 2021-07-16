import './App.css';
import React from 'react'

import { Router,Link,navigate } from '@reach/router'
import Home from './Components/Home'
import Hello from './Components/Hello'
import Four from './Components/Four'




function App() {

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/home")
  }

  return (
    <div className="App">
      <input onClick={ handleClick }type="button" value="Home"/>
      <Router>
        <Home path="/home"/>
        <Four path="/home/:id"/>
        <Hello path="/home/:id/:color/:background"/>
      </Router>
    </div>
  );
}

export default App;
