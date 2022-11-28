import React, {useState, useEffect} from 'react'
import api from '../api'
import { useNavigate } from 'react-router-dom'


import Navbar from '../Component/Navbar'
import Hero from '../Component/Hero'
import List from '../Component/List'
import Filter from '../Component/Filter'
import { useCountContext } from '../Context/context'
import Footer from '../Component/Footer'

const Home = () => {

  const [movies, setMovies] = useState([])
  const {toggle} = useCountContext()
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
      <div className={`flex flex-wrap max-w-[1920px] ${toggle ? `bg-white` : `bg-gray-800` } mx-auto items-center image-full justify-between h-max`}>
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

