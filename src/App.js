import './App.css';
import NavBar from './components/NavBar';
import React,{Component} from 'react';
import Home from './components/pages/Home'


window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

function App() {
  return (
    <>
      <NavBar/>
      <Home/>
    </>
  );
}

export default App;
