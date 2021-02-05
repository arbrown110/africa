import './App.css';
import React from 'react'
import Routes from './Components/routes'
import NavBar from './Components/NavBar'

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes />
    </div>
  )
}

export default App;
