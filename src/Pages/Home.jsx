import React, {useState, useEffect} from 'react'
import api from '../api'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


import Navbar from '../Component/Navbar'
import Hero from '../Component/Hero'
import List from '../Component/List'
import Filter from '../Component/Filter'
import Footer from '../Component/Footer'

const Home = () => {

  const [movies, setMovies] = useState([])
  const {mode} = useSelector((state) => state.darkMode)
  const navigate = useNavigate()

  const getNowPlaying = () => {
      api.now_Playing(`now_playing`)
      .then((response) => {
        console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getNowPlaying()
  }, [])


    
    return (
      <div>
      <Navbar
      Liked ={() => navigate("/Liked")}
      Home ={() => navigate("/")}
      />
      <Hero/>
      <Filter/>
      <div className={`flex flex-wrap max-w-[1920px] mx-auto items-center image-full justify-between h-max ${mode? `bg-white` : `bg-slate-800`}`}>
      {movies.map( movie =>(
        <List
        title = {movie.title}
        poster_path = {movie.poster_path}
        overview = {movie.overview}
        diKlik = {() => 
          navigate("/Detail", {
            state : {
              id : movie.id
            }
          })}
        />   
      ))}
      </div>
      <Footer/>
      
      </div>
    )
}

export default Home

