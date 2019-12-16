import React from 'react';
// import logo from './logo.svg';
import './App.css';

import NavBar from "./components/NavBar";
import Cities from "./containers/cities/Cities";

function App() {
  return (
    <div className="app">
      <NavBar/>
      <Cities/>
    </div>
  );
}

export default App;
