import './App.css';
import React from 'react'
import Routes from './Components/routes'
 //import AdventureContainer from './Components/adventureContainer'
import NavBar from './Components/NavBar'

const App = () => {
  return (
    
    <div className="App">
      <NavBar />
      {/* <AdventureContainer /> */}
      <Routes />
      
    </div>
  )
}

export default App;
