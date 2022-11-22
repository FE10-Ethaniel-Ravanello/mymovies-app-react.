import React, { Component } from 'react'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import List from './Component/List'

class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>
      <Hero/>
      <List/>
      </div>
    )
  }
}


export default App
