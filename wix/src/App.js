import React from 'react';
import {Routes, Route} from 'react-router-dom'

 
import './App.css';

import Home from './components/home/Home.js';
import Project from './components/project/Project.js';


function App() {
  return (
    <div className="App"  >
        <Routes>
          <Route exact path='/' element={ <Home/>} />
          <Route exact path='/project' element={ <Project/>} />
        </Routes>
         
    </div>
  );
}

export default App;
