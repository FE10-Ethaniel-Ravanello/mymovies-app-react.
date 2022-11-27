import React, { Component } from 'react'
import Navbar from '../Component/Navbar'
import { useNavigate } from 'react-router-dom'

const Liked = () => {

  const navigate = useNavigate()

    return (
      <Navbar
      Liked ={() =>navigate("/Liked")}
      Home ={() =>navigate("/")}
      />
    )
  }



export default Liked