import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Navbar from '../Component/Navbar'
import BagianDetail from '../Component/BagianDetail'
import api from '../api'

const Detail = () => {
  const [movieDetail, setmovieDetails] = useState()
  const navigate = useNavigate()

  const location = useLocation()
  const details = location?.state?.id
  console.log(details)

  const get_Details = async() => {
    await api.get_Details(details)
    .then((response) => {
      console.log(response.data);
      setmovieDetails(response.data);
      console.log(get_Details)
    })
    .catch((error) => {
      console.log(error);
    });
}

useEffect(() => {
  get_Details()
}, [])




  return (
    <>
    <Navbar 
    Liked ={() => navigate("/Liked")}
    Home ={() => navigate("/")}
    />
    {movieDetail && (
          <BagianDetail
          gambar = {movieDetail.poster_path} 
          judul = {movieDetail.title} 
          detail = {movieDetail.overview}
          backdrop = {movieDetail.backdrop_path}
          budget = {movieDetail.budget}
          release = {movieDetail.release_date}
          revenue = {movieDetail.revenue}
      />
    )}


    
    </>
  )
}

export default Detail