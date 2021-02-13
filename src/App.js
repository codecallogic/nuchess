import React, {useState, useEffect} from 'react';
import Nav from './components/nav';
import Lobby from './components/lobby'
import Twitch from './components/twitch'
import Search from './components/search'
import Ads from './components/ads'
import "./App.css"

const App = () => {
  return (
    <>
     <Nav></Nav>
     <div className="homepage-container">
      <Lobby></Lobby>
      <Twitch></Twitch>
      <Search></Search>
      <Ads></Ads>
     </div>
    </>
  )
}

export default App

