import React, {useState, useEffect, navigate} from 'react'
import api from '../api'
import { useNavigate } from 'react-router-dom'


import Navbar from '../Component/Navbar'
import Hero from '../Component/Hero'
import List from '../Component/List'
import Filter from '../Component/Filter'

const Home = () => {

  const [movies, setMovies] = useState([])

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
      <div className='flex flex-wrap max-w-[1640px] mx-auto mb-5 items-center bg-base-100 image-full justify-between h-screen'>
      {movies.map( movie =>(
        <div className='flex-none'>
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
        </div>
      
      ))}
      </div>
      
      </div>
    )
}

export default Home

