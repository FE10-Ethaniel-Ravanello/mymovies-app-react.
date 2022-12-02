import React, { Component } from 'react'
import Navbar from '../Component/Navbar'
import List from '../Component/List'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Liked = () => {

  const navigate = useNavigate()
  const favorite = useSelector((state) => state.favorite)
  const {mode} = useSelector((state) => state.darkMode)

    return (
      <>
      <Navbar
        Liked={() => navigate("/Liked")}
        Home={() => navigate("/")} />
        <div className={`${mode? `bg-white` : `bg-slate-800`} h-screen`}>
        <div className={`flex flex-wrap max-w-[1920px] pt-5 mx-auto items-center image-full justify-between h-scren ${mode? `bg-white` : `bg-slate-800`}`}>
        { 
          favorite.map(movie => (
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
            />
          )
        )
      }
      </div>
        </div>
       
        
      </>
    )
  }



export default Liked