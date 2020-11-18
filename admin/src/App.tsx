import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Login} from './Login';
import {BrowserRouter, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
