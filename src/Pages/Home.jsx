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
  const [loading, setLoading] = useState(false)
  const {mode} = useSelector((state) => state.darkMode)
  const navigate = useNavigate()
  const favorite = useSelector((state) => state.favorite)
  console.log(favorite)

  const getNowPlaying = async () => {
    await api.now_Playing(`now_playing`)
      .then((response) => {
        setLoading(true)
        console.log(response.data.results);
        setMovies(response.data.results);
        setLoading(false)
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
      Favorite ={() => navigate("/Favorite")}
      Home ={() => navigate("/")}
      />
      <Hero/>
      <Filter/>
        <div className={`flex flex-wrap max-w-[1920px] mx-auto items-center image-full justify-between h-max ${mode? `bg-white` : `bg-slate-800`}`}>
      {
      movies && loading === false ? 
        movies.map(movie => (
          <List
            title = {movie.title}
            overview = {movie.overview}
            poster_path = {movie.poster_path}
            diKlik = {() => {
              navigate("/Detail", {
                state : {
                  id: movie.id
                }
              })
            }}
            event = {movie}
            deleteFav = {() => deleteFav()}
            deletButton = "Delete From Favorite"
          />
        )
      )
      :
      <p className='text-7xl text-white'>Loading</p>
    }
      </div>
      <Footer/>
      
      </div>
    )
}

export default Home

