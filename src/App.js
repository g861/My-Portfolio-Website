import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router} from 'react-router-dom' ; 
import HomePage from './components/HomePage';
import './App.css' ; 
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <HomePage />
      </Router>
    </div>
  ) 
}

export default App