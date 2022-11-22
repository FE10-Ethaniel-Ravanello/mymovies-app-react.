import React, { Component } from 'react'
import data from '../data'

class Hero extends Component {
  render() {
    return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <h2 className='text-center font-bold text-5xl mb-3'>Movie PLaying Now!!</h2>
        <div className="carousel w-full">
            {data.map((item) => {
            return (
            <div id={item.id} className="carousel-item relative w-full bg-base-100 shadow-xl">
                <img src={item.image} className="w-[1640px] h-[600px] object-cover" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href={item.left} className="btn btn-circle">❮</a> 
                    <a href={item.right} className="btn btn-circle">❯</a>
                </div>
            </div> 
            );
        })}
        </div>
    </div>
    )
  }
}

export default Hero
