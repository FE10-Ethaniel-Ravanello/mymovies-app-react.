import React from 'react'
import { useSelector } from 'react-redux'
import List from '../Component/List'

const likePage = () => {
  const liked = useSelector((state) => state.favorite)
  console.log(liked)
  return (
    <div>
        { 
        liked.map(movie => (
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
  )
}

export default likePage