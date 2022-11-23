import React, { Component } from 'react'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import List from './Component/List'
import api from './api'

class App extends Component {
  state = {
    data: []
  }

  async getNowPlaying() {
    await api
      .now_Playing(`now_playing`)
      .then((response) => {
        console.log(response.data.results);
        this.setState({ data: response.data.results });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getNowPlaying();
  }
  render() {
    const result = this.state.data;
    console.log("result :", result);


    return (
      <div>
      <Navbar/>
      <Hero/>
      <List
      movies={result}
      />
      </div>
    )
  }
}


export default App
